const express=require('express');
const { loginController, registerController,authController ,profileController, getUsers} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const {addDoctor,getDoctors}= require('../controllers/doctorController');
const {addAppointment,getAppointments,createSession}= require('../controllers/appointmentController');

const userRouter=express.Router();

userRouter.post('/login',loginController);

userRouter.post('/register',registerController);

userRouter.post('/getUserData',authMiddleware,authController);

userRouter.post('/addDoctor',addDoctor);

userRouter.get('/getDoctors',getDoctors);

userRouter.get('/getUsers',getUsers);

userRouter.post('/book',addAppointment);
module.exports=userRouter;


userRouter.post('/appointments',getAppointments);
userRouter.post('/profile',profileController);
