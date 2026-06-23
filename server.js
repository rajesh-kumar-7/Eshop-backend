import express from "express"; 
import cors from "cors";
import dotenv from "dotenv" 
import connectDB from "./config/database.js";//impoted funciton which connect db
import router from "./routes/authRoutes.js" //imported routes
const app=express();
dotenv.config();
app.use(cors())// Now requests from other origins are allowed.
app.use(express.json()); //mainly used so the backend can receive data sent from the frontend

connectDB();
app.use('/api/auth',router); //used router the url will be /api/auth
 app.get('/',(req,res)=>{
    res.send("working");

 })

 app.listen(5010,()=>{
    console.log("https//localhost:5010")
 })