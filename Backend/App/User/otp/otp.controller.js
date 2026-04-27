import UserModel from "../user.model.js"
import Otp from "./otp.model.js";
import { generateOTP } from "../../utils/generate.otp.js";
// import bcrypt from "bcrypt"; iska use password ko hash krne mein 
import crypto from "crypto"; // normallay otp because liteweight liberary
import sendMail from "../../utils/mail.js";
import otpTemplate from "../../utils/otp.tamplate.js";
import { createUser } from "../user.controllers.js";


// send email with otp
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
        // 5 min mein ek hi otp generate ho ek sath kai baar hit na ho generate api
        const existOtp = await Otp.findOne({ email });
        if (existOtp) {
            return res.status(400).send({
                success: false,
                message: "OTP already sent Please wait 5 minutes"
            });
        }
        const OTP = generateOTP(); // reuseble function
        const hashotp = await crypto.createHash("sha256").update(OTP.toString()).digest("hex"); // otp ko hash mein store with crypto lightweight
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 5 min add kr diya for expires
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

// Verify otp
export const verifyOTP = async (req, res) => {
    try {
        const { otp, email } = req.body;
        if (!otp || !email) {
            return res.status(400).send({
                success: false,
                message: "OTP and Email are Required"
            });
        };
        const hashOTP = await crypto.createHash("sha256").update(otp.toString()).digest("hex");
        const existUser = await Otp.findOne({ email });
        if (!existUser) {
            return res.status(404).send({
                success: "false",
                message: "User Not Found"
            });
        };
        if (existUser.expiresAt < new Date()) {
            return res.status(400).send({
                success: false,
                message: "OTP Expired"
            });
        }
        if (hashOTP !== existUser.otp) {
            return res.status(400).send({
                success: false,
                message: "OTP Not Matched"
            })
        };

       /*  await Otp.deleteOne({ email }); */
        createUser(req, res);
       /*  return res.status(200).send({
                success: true,
                message: "OTP  Matched"
            }) */
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    };
};




