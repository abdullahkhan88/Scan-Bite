import http from "../../utils/http.js";

// API function to send OTP email to the user
export const sendOtpAPI = async (userData) =>{
    const response = await http.post('/api/otp/send-mail',userData);
    return response.data;
};

// API function to verify otp 
export const verifyOtpAPI = async (userData) =>{
    const response = await http.post('/api/otp/verify-otp',userData);
    return response.data
};

// API function to login user
export const loginUserAPI = async (userData) =>{
    const response = await http.post('/api/user/login', userData);
    return response.data
};