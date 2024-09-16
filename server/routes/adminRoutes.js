const express=require('express');

const {addDoctor}= require('../controllers/doctorController');
const adminRouter=express.Router();

adminRouter.post('/addDoctor',addDoctor);

module.exports=adminRouter;