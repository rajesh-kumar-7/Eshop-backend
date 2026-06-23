import mongoose from "mongoose"
const connectDB = async ()=>{
   try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(" database connected")
    }
    catch(e){
        console.log(e)
    }
}
export default connectDB;