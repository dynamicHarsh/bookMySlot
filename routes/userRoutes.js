const express=require('express');
const { loginController, registerController,authController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const {addDoctor}= require('../controllers/doctorController');
const {addAppointment,getAppointments}= require('../controllers/appointmentController');

const userRouter=express.Router();

userRouter.post('/login',loginController);

userRouter.post('/register',registerController);

userRouter.post('/getUserData',authMiddleware,authController);

userRouter.post('/addDoctor',addDoctor);


userRouter.post('/book',addAppointment);
module.exports=userRouter;


userRouter.post('/appointments',getAppointments);