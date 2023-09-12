const doctorModel=require('../models/doctorModel');

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

module.exports={addDoctor};