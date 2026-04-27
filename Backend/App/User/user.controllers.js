import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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







