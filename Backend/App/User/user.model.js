import mongoose, { Model, Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const UserModel = mongoose.model("user",UserSchema);
export default UserModel;