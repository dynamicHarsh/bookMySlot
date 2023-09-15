const appointmentModel=require('../models/appointmentModel');
const doctorModel=require('../models/doctorModel');

const addAppointment=async (req,res)=>{
    try{
        let data=req.body;
        console.log(data);
        //Appointment Scheduling algorithm
        let availableDoctor=await doctorModel.findOne({present: true,speciality: data.speciality}).sort({inLine: 1});
        if(availableDoctor){
            let inLine=availableDoctor.inLine;
        availableDoctor.inLine=inLine+1;
        
        //calculate Slot
        let appTime=15;
        let time=new Date();
        let HH=time.getHours();
        let mm=time.getMinutes();

        let slotMM=Math.ceil(mm/appTime)*appTime+(inLine-1)*appTime;
        let hINCR=Math.floor(slotMM/60);
        slotMM=slotMM%60;
        let slotHH=HH+hINCR;
        console.log('HH:',slotHH,' MM:',slotMM);
        time.setHours(slotHH),time.setMinutes(slotMM),time.setSeconds(0);
        await doctorModel.findOneAndUpdate({_id: availableDoctor._id},availableDoctor);
        const newAppointment=new appointmentModel({...data,doctorId: availableDoctor._id,doctorName: availableDoctor.firstname+" "+availableDoctor.lastname,slot: time,phone: availableDoctor.phone});
        
        let resp=await newAppointment.save();
        res.status(201).send({message: 'Appointment Booked Successfully',success: true});
        }
        else{
            const newAppointment=new appointmentModel(data);
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
        if(user.isAdmin){

            const app=await appointmentModel.find();

            res.status(200).send({success: true,message: `Apppointment Fetched Successfully`,app});
        }
        else{
           
            const app=await appointmentModel.find({patientId: user.id});
            
            res.status(200).send({success: true,message: `Apppointment Fetched Successfully`,app});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({success:false,message: `getAppointments ${error.message}`});
    }
}


module.exports={addAppointment,getAppointments};