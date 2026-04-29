import jwt from "jsonwebtoken";
import { cookieOptions } from "../Config/cookie.js";

const Invalid = async (res) =>{
    res.clearCookie('AuthToken',cookieOptions(0)) // function resusable defined other folder
    return res.status(401).send({
        message:"Unauthorized or Invalid Token"
    });
};

export const AdminUserGuard = (req, res, next) =>{
    try {
        const {AuthToken} = req.cookies;
        if(!AuthToken){
            return Invalid(res)
        };

        const payload = jwt.verify(AuthToken,process.env.AUTH_SECRET);
        if(payload.role !== "user" && payload.role !== "admin"){
            return Invalid(res)
        };

        req.user = payload;
        next();

    } catch (err) {
        res.status(401).send({
            success:false,
            message:"Invalid Token"
        })
    }
};
