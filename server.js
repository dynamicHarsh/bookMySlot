const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
const connectDB=require('./config/db');
const userRouter = require('./routes/userRoutes');
const adminRouter=require('./routes/adminRoutes');
dotenv.config();
connectDB();

const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/user',userRouter);
app.use('/admin',adminRouter);

const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server is listening at port ${port} in ${process.env.NODE_MODE} mode`);
});
