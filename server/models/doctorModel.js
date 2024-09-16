const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema({

    firstname:{
        type: String,
        required: [true,'firstname is required']
    },
    lastname:{
        type: String,
        required: [true,'lastname is required']
    },
    phone:{
        type: String,
        maxLen: 10,
        required: [true,'phone is required']
    },
    email: {
        type: String,
        required: [true,'email is required']
    },
    speciality: {
        type: String ,
        required: [true,'speciality is required']
    },
    timing:{
        type: Object,
        required: [true, 'timing is required']
    },
    feePerC:{
        type: Number,
        required: [true, 'feePerC is required']
    },
    present:{
        type: Boolean,
        default: false,
    },
    inLine: {
        type: Number,
        default: 0
    }
},{timeStamps: true});

const doctorModel=mongoose.model('doctor',doctorSchema);

module.exports=doctorModel;