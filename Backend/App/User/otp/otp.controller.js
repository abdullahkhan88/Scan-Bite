import UserModel from "../user.model.js"
import Otp from "./otp.model.js";
import { generateOTP } from "../../utils/generate.otp.js";
import bcrypt from "bcrypt";
import sendMail from "../../utils/mail.js";
import otpTemplate from "../../utils/otp.tamplate.js";



export const sendEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({
                message: "Email fields are required !"
            });
        };

        const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regExp.test(email)) {
            return res.status(400).send({
                success: false,
                message: "Please Enter Valid Email"
            })
        }
        const UserExist = await UserModel.findOne({ email });
        if (UserExist) {
            return res.status(400).send({
                success: false,
                message: "User already exists"
            });
        };
        const existOtp = await Otp.findOne({email});
        if (existOtp) {
            return res.status(400).send({
                success: false,
                message: "OTP already sent Please wait 5 minutes"
            });
        }
        const OTP = generateOTP(); // reuseble function
        const hashotp = await bcrypt.hash(OTP.toString(), 10); // otp ko hash mein store
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min add kr diya for expires
        await Otp.deleteMany({ email }); // phale db ko khali kro 
        const MailRes = await sendMail(email, "Signup OTP", otpTemplate(OTP)); // send mail function
        if (!MailRes) {
            return res.status(500).send({
                success: false,
                message: "Failed to send OTP Email"
            });
        }
        await Otp.create({
            email,
            otp: hashotp,
            expiresAt
        });
        res.status(200).send({
            success: true,
            message: "OTP sent Successfully"
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
            message: "Internal Server Error"
        });
    };
};



