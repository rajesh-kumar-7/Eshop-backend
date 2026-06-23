import mongoose from "mongoose" //import
const userSchema = new mongoose.Schema({
    name:{type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
}) //made structure
const User=mongoose.model('User',userSchema) //created model make sure it string
export default User //exported