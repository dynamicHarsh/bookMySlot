const express=require('express');
const { loginController, registerController,authController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const userRouter=express.Router();

userRouter.post('/login',loginController);

userRouter.post('/register',registerController);

userRouter.post('/getUserData',authMiddleware,authController);

module.exports=userRouter;