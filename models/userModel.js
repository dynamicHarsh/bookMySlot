const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    name:{
        type: String,
        required: [true,'name is required']
    },
    email:{
        type: String,
        required: [true,'email is required']
    },
    phone:{
        type: String,
        required: [true,'phone is required']
    },
    location: {  
        type: String,
        default: null,
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: null,
      },
    password: {
        type: String,
        required: [true,'password is required']
    },
    role: {
        type: String,
        enum: ["user","doctor","admin"],
        default: "user"
    },
    notification:{
        type: Array,
        default: []
    },
    seenNotification: {
        type: Array,
        default: []
    }
})

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;