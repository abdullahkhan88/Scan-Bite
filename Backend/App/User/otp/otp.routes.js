import express from "express";
import { sendEmail, verifyOTP } from "./otp.controller.js";

const otpRouter = express.Router();

otpRouter.post("/send-mail",sendEmail);  // http://localhost:8080/api/otp/send-mail
otpRouter.post("/verify-otp",verifyOTP);  // http://localhost:8080/api/otp/verify-otp


export default otpRouter;