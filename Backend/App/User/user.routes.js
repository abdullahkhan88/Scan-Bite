import express from "express";

import { createUser, loginUser } from "./user.controllers.js";
import { AdminUserGuard } from "../middleware/guard.middleware.js";


const userRouter = express.Router();

userRouter.post("/signup",createUser); // http://localhost:8080/api/user/signup
userRouter.post("/login",loginUser); // http://localhost:8080/api/user/login

export default userRouter;

