const mongoose=require('mongoose');

const appointmentSchema=new mongoose.Schema({
    patientId:{
        type: String,
        required: [true,'patient id is required']
    },
    patientName:{
        type:String,
        required: [true,'patient name is required']
    },
    doctorId:{
        type: String,
        default: null
    },
    doctorName:{
        type: String,
        default: null
    },
    speciality:{
        type: String,
        required: [true,'speciality is required']
    },
    concern:{
        type: String,
        required: [true,'concern is required']
    },
    slot:{
        type: String,
        default: null
    },
    phone:{
        type: String,
        default: null
    },
    status:{
        type: String,
        default: "pending"
    }
    ,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
    ,
    
})


const appointmentModel=mongoose.model('appointment',appointmentSchema);

module.exports=appointmentModel;