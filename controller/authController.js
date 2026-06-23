import bcrypt from "bcryptjs";
import User from "../model/User.js"
import jwt from "jsonwebtoken"
export const signupUser = async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        //checking if user already exist or not
        const userExist=await User.findOne({email});
        if(userExist){
            res.json({massage:"User already exist"})
        }
        //hash password
        const hashedpass= await bcrypt.hash(password,10);
        //creating user
         await User.create({
            name,
            email,
            password:hashedpass
        })
        res.json({message:"user created"});

    }
    catch(error){
        res.json({message:"server error",error})

    }

}
export const login= async (req,res)=>{
    try{

        const {email,password}=req.body;
        const user= await User.findOne({email});
        if(!user){
            res.json({message:"User not exist"})
        }
        const validPass= await bcrypt.compare(password,user.password);
        if(!validPass){
            res.json({message:"invalid password"});
        }
        const token=jwt.sign(
            {id:User._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        res.json({
            message:"login successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })

    }
    catch(error){
        res.json({
            message:"server error",error
        })
    }

}
