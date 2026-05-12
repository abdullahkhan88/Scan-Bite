import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOtpAPI, verifyOtpAPI, loginUserAPI } from "./authAPI.js";

// Async thunk for sending OTP request
export const sendOtp = createAsyncThunk(
    "auth/sendOtp",
    async(userData,thunkAPI) => {
        try {
            const response = await sendOtpAPI(userData);
            return response;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "something went wrong"
            );
        };
    }
);

// Async thunkfor verify otp

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (userData, thunkAPI)=>{
    try {
        const response = await verifyOtpAPI(userData);
        return response
    } catch (err) {
        return thunkAPI.rejectWithValue(
            err.response?.data?.message || "something went wrong"
        )
    }
});

// Async thunk for login user

export const loginUser = createAsyncThunk("auth/loginUser", async (userData, thunkAPI)=>{
    try {
        const response = await loginUserAPI(userData);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(
            err.response?.data?.message || "something went wrong"
        )
    };
});

