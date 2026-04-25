import express from "express";
import { sendEmail } from "./otp.controller.js";

const otpRouter = express.Router();

otpRouter.post("/send-mail",sendEmail);  // http://localhost:8080/api/otp/send-mail


export default otpRouter;