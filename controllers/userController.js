const userModel=require('../models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const registerController=async (req,res)=>{
    try{
        let data=req.body;
        const existingUser= await userModel.findOne({email: data.email});
        if(existingUser){
            return res.status(200).send({message: 'User already exists', success: false});
        }
        const password=data.password;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        data.password=hashedPassword;
        const newUser=new userModel(data);
        await newUser.save();
        
        res.status(201).send({message: 'User Registered Successfully', success: true});

    }
    catch(error){
        console.log(error);
        res.status(500).send({success:false,message:`registerController ${error.message}`});
    }

}

const loginController=async (req,res)=>{
    try{
        const data=req.body;
        const user=await userModel.findOne({email: data.email});
        if(!user){
            return res.status(200).send({message: "User not found",success: false});
        }
        const Matched=await bcrypt.compare(data.password,user.password);
        if(!Matched){
            return res.status(200).send({message:"Invalid Email/Password"});
        }
        const token=jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn: '1d'});
        res.cookie("login",token);
        
        res.status(200).send({message: "Login Successfull",success: true,token});

    }
    catch(error){
        console.log(error);
        res.status(500).send({message: `loginController ${error.message}`})
    }
}

const authController=async (req,res)=>{
try{
    const user=await userModel.findOne({_id:req.body.userId});
    if(!user){
        return res.status(200).send({message: "User Not Found",success: false});
    }
    else{
        res.status(200).send({success: true,data: {name: user.name,email: user.email,isAdmin: user.isAdmin}});
    }
}
catch(err){
    console.log(err);
    res.status(500).send({message: `authController ${err.message}`,success: false,})
}
}
module.exports={ loginController, registerController,authController};
