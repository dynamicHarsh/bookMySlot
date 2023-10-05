const appointmentModel=require('../models/appointmentModel');
const doctorModel=require('../models/doctorModel');
const userModel=require('../models/userModel')




const dotenv=require('dotenv');
dotenv.config();
const twilio=require('twilio')(process.env.Twilio_SID,process.env.Twilio_AUTH);






const addAppointment=async (req,res)=>{
    try{
        let data=req.body;
        
        let availableDoctor=await doctorModel.findOne({present: true,speciality: data.speciality}).sort({inLine: 1});
        
        if(availableDoctor){
            let inLine=availableDoctor.inLine;
        availableDoctor.inLine=inLine+1;
        
        //calculate Slot
        let appTime=15;
        let time=new Date();
        let HH=time.getHours();
        let mm=time.getMinutes();
        
        let slotMM=Math.ceil(mm/appTime)*appTime+(inLine>0?(inLine)*appTime: 0);
        let hINCR=Math.floor(slotMM/60);
        slotMM=slotMM%60;
        let slotHH=HH+hINCR;
        // console.log('HH:',slotHH,' MM:',slotMM);
        time.setHours(slotHH),time.setMinutes(slotMM),time.setSeconds(0);
        await doctorModel.findOneAndUpdate({_id: availableDoctor._id},availableDoctor);
        const doctorName=availableDoctor.firstname+" "+availableDoctor.lastname
        const newAppointment=new appointmentModel({...data,doctorId: availableDoctor._id,doctorName: doctorName,slot: time.toLocaleString(),phone: availableDoctor.phone});
        const patient= await userModel.findOne({_id: newAppointment.patientId});
        const patientPhone=patient.phone;
    

        



        let resp=await newAppointment.save();
        try{
            const msgRes=await twilio.messages.create({
                from: "+12564747323",
                to: `+91${patientPhone}`,
                body: `.\nDear ${patient.name},\nWe are pleased to confirm the successful booking of your appointment at Emmet Hospital. Your health and well-being are our top priorities, and we look forward to providing you with exceptional care.\nAppointment Details:\nDoctor:Dr. ${newAppointment.doctorName}\nExpected Slot: ${newAppointment.slot}\nPlease arrive 15 minutes prior to your appointment to complete any necessary paperwork and ensure a smooth check-in process. If you have any medical records, test results, or relevant documents, kindly bring them with you.\nIf you have any questions or require further information, please feel free to contact at ${newAppointment.phone}\nThank you for choosing Emmet Hospital for your healthcare needs. We look forward to serving you and assisting you on your journey to better health.\nSincerely,\nTeam Emmet
                `
            })
        if(msgRes){console.log('Message sent successfully');}
        }
        catch(err){
            console.log('Phone no. is invalid');
        }
    
        
        
        res.status(201).send({message: 'Appointment Booked Successfully',success: true});
        }
        else{
            
            const info={patientId: data.patientId,patientName: data.patientName,concern: data.concern,status: "waiting",speciality: data.speciality};
            const newAppointment=new appointmentModel(info);
            let resp=await newAppointment.save();
        res.status(201).send({message: 'Appointment Waitlisted',success: true});
        }
        
       
    }
    catch(error){
        console.log(error);
        res.status(500).send({success:false,message: `addAppointment ${error.message}`});
    }
}

const getAppointments=async(req,res)=>{
    try{
        let user=req.body;
        //Waiting
        const waitListedAppointments= await appointmentModel.find({status: "waiting"}).sort({createdAt: 1});
        waitListedAppointments.forEach(async function(app){
                const ad=await doctorModel.find({present: true,speciality: app.speciality}).sort({inLine: 1});
                const availableDoctor=ad[0];
                if(availableDoctor){
                    let inLine=availableDoctor.inLine;
        availableDoctor.inLine=inLine+1;
        
        //calculate Slot
        let appTime=15;
        let time=new Date();
        let HH=time.getHours();
        let mm=time.getMinutes();
        
        let slotMM=Math.ceil(mm/appTime)*appTime+(inLine>0?(inLine)*appTime: 0);
        let hINCR=Math.floor(slotMM/60);
        slotMM=slotMM%60;
        let slotHH=HH+hINCR;
        // console.log('HH:',slotHH,' MM:',slotMM);
        time.setHours(slotHH),time.setMinutes(slotMM),time.setSeconds(0);
                    const doctorName=availableDoctor.firstname+" "+availableDoctor.lastname;
                    await appointmentModel.updateOne({_id: app._id},{doctorId: (availableDoctor._id).toString(),doctorName: doctorName,status: "pending",phone: availableDoctor.phone,slot: time.toLocaleString()});
                    await doctorModel.findOneAndUpdate({_id: availableDoctor._id},availableDoctor);

                    try{
                        const patient=await userModel.findById(app.patientId);
                        const msgRes=await twilio.messages.create({
                            from: "+12564747323",
                            to: `+91${patient.phone}`,
                            body: `.\nDear ${patient.name},\nWe are pleased to inform you that your waitlisted appointment at Emmet has been scheduled and confirmed. We understand that you have been eagerly waiting for this appointment, and we appreciate your patience.\nAppointment Details:\nDoctor:Dr. ${doctorName}\nExpected Slot: ${time.toLocaleString()}\nPlease arrive 15 minutes prior to your appointment to complete any necessary paperwork and ensure a smooth check-in process. If you have any medical records, test results, or relevant documents, kindly bring them with you.\nIf you have any questions or require further information, please feel free to contact at ${availableDoctor.phone}\nThank you for choosing Emmet Hospital for your healthcare needs. We look forward to serving you and assisting you on your journey to better health.\nSincerely,\nTeam Emmet
                            `
                        })
                    if(msgRes){console.log('Message sent successfully');}
                    }
                    catch(err){
                        console.log('Phone no. is invalid');
                    }



                }
            
        }
        )
        
        //Waiting

        if(user.role=='admin'){

            const app=await appointmentModel.find().sort({createdAt: -1});
            res.status(200).send({success: true,message: `Apppointment Fetched Successfully`,app});
        }
        else if(user.role=='doctor'){
            const docId=await doctorModel.findOne({email: user.email});
            const app=await appointmentModel.find({doctorId: docId._id}).sort({createdAt: -1});
            
            res.status(200).send({success: true,message: `Apppointment Fetched Successfully`,app});
        }
        else{
           
            const app=await appointmentModel.find({patientId: user.id}).sort({createdAt: -1});
            res.status(200).send({success: true,message: `Apppointment Fetched Successfully`,app});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({success:false,message: `getAppointments ${error.message}`});
    }
}


module.exports={addAppointment,getAppointments};