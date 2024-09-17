const userModel=require('../models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
// const twilio=require('twilio')(process.env.Twilio_SID,process.env.Twilio_AUTH);



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
        // try{
        //     const msgRes=await twilio.messages.create({
        //         from: "+19382532027",
        //         to: `+91${data.phone}`,
        //         body: `\nDear ${newUser.name}\nWelcome to Emmet Hospital!\nWe're delighted to have you as a valued member of our healthcare community. Your successful registration marks the beginning of our journey together, and we're here to provide you with the best care possible.\nHere are the details we received:\nName: ${newUser.name}\nEmail: ${newUser.email}\nPhone: ${newUser.phone}\nOur commitment is to prioritize your health and well-being. If you have any questions or need assistance, please don't hesitate to reach out to us. You can also use our patient portal for convenient access to your medical records and appointment scheduling.\nThank you for choosing Emmet Hospital. We look forward to providing you with exceptional care and support.\nWarm regards,\nTeam Emmet`
                
        //     })
        //     if(msgRes){
        //         console.log('Message has been sent Successfully');
        //     }
        // }
        // catch(err){
        //     console.log(err.message);
        // }
        
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
        let alluser=await userModel.find();
        
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
        res.status(200).send({success: true,data: {name: user.name,email: user.email,role: user.role,id: user._id,phone: user.phone}});
    }
}
catch(err){
    console.log(err);
    res.status(500).send({message: `authController ${err.message}`,success: false,})
}
}

const getUsers=async (req,res)=>{
    try{
        
        const users=await userModel.find({role: 'user'});
        res.status(201).send({message: 'Doctor Fetched Successfully', success: true,users});
    }
    catch(error){
        console.log(error);
        res.status(500).send({success: false,message: `addDoctor ${error.message}`});
    }
}
const profileController = async (req, res) => {
    try {
      const data=req.body.values;
      console.log(data);
      
      await userModel.findOneAndUpdate({_id: req.body._id},data);
      
      res.status(200).send({message: 'Profile Updated Successfully', success: true});
    } catch (error) {
      res.status(404).json({
        message: `profileController ${error.message}`,
        success: false,
      });
    }
  };
 
  

module.exports={ loginController, registerController,authController,getUsers,profileController};
