const doctorModel=require('../models/doctorModel');
const userModel=require('../models/userModel');
const addDoctor=async (req,res)=>{
    try{
        let data=req.body;
        const newDoctor=new doctorModel(data);
        let resp=await newDoctor.save();
        res.status(201).send({message: 'Doctor added Successfully', success: true,id: resp._id});
        
    }
    catch(error){
        console.log(error);
        res.status(500).send({success: false,message: `addDoctor ${error.message}`});
    }
}
const getDoctors=async (req,res)=>{
    try{
        
        const doctors=await doctorModel.find();
        res.status(201).send({message: 'Doctor Fetched Successfully', success: true,doctors});
    }
    catch(error){
        console.log(error);
        res.status(500).send({success: false,message: `addDoctor ${error.message}`});
    }
}

module.exports={addDoctor,getDoctors};