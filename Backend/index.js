import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./App/Config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config(); // env file ko access

connectDB(); // MOngodb connect 

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server Running on the ${PORT}`);
});