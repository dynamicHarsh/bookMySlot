const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`db connected at: ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`MongoDB server issue: ${error}`);
    }
};

module.exports= connectDB;