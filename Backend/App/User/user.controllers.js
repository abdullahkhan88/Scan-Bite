import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { cookieOptions } from "../Config/cookie.js";

// create user controller
export const createUser = async (req, res) => {
    try {
        const { name, email, role, mobile, password } = req.body;

        if (!name || !email || !mobile || !role || !password) {
            return res.status(400).send({
                success: false,
                message: "Fields are Required"
            });
        };

        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(409).send({
                success: false,
                message: "User Already exist with this Email"
            });
        };

        const hashedPassword = await bcrypt.hash(password.toString(), 10);
        const user = new UserModel({
            name,
            email,
            mobile,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        const userRes = await savedUser.toObject(); //yaha pe password hide kiya gya response mein na dekhe
        delete userRes.password;
        res.status(200).send({
            success: true,
            message: "User Created Successfully",
            data: userRes
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
            message: "Internal Server Error"
        });
    };
};

// generate Token

const createToken = (user) => {
    const token = jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }, process.env.AUTH_SECRET,
        { expiresIn: "1d" });
    return token
};

export const loginUser = async (req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Fields are Required"
            });
        };
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not Found"
            });
        };
        const matchedPass = await bcrypt.compare(password, user.password);
        if(!matchedPass){
            return res.status(401).send({
                success:false,
                message:"Invalid Credentials"
            });
        };
        const userRes = user.toObject()
        delete userRes.password;
        const token = createToken(user);
        const dayMs = 1*24*60*60*1000 // 1 day into milisecond
        res.cookie("AuthToken", token,cookieOptions(dayMs)); // reusable function
        res.status(200).send({
            success:true,
            message:"Login Successfull",
            data:userRes,
        });

    } catch (err) {
        res.status(500).send({
            success:false,
            message:"Internal Server Error"    
        });
    }
}









