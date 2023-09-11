const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema({

    name:{
        type: String,
        required: [true,'name is required']
    },
    speciality: {
        type: String ,
        required: [true,'speciality is required']
    },
    present:{
        type: Boolean,
        default: false,
    },
    inLine: {
        type: Number,
        default: 0
    }
});

const doctorModel=mongoose.model('doctor',doctorSchema);

module.exports=doctorModel;