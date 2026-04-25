import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./App/Config/db.js";
import otpRouter from "./App/User/otp/otp.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config(); // env file ko access

connectDB(); // MOngodb connect 

app.use("/api/otp", otpRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server Running on the ${PORT}`);
});