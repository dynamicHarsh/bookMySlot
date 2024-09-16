const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
const connectDB=require('./config/db');
const userRouter = require('./routes/userRoutes');
const path=require('path');
// const adminRouter=require('./routes/adminRoutes');
dotenv.config();
connectDB();

const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));



app.use('/user',userRouter);
// app.use('/admin',adminRouter);

const port=process.env.PORT || 8080;


app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

app.listen(port,()=>{
    console.log(`Server is listening at port ${port} in ${process.env.NODE_MODE} mode`);
});
