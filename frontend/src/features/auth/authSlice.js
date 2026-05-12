import { createSlice } from "@reduxjs/toolkit";
import { loginUser, sendOtp, verifyOtp, } from "./authThunk.js";


const initialState = {
    user: null,
    loading: false,
    error: null,
    token: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // pending
            .addCase(sendOtp.pending, (state) => {
                state.loading = true;
                state.error = null
            })

            // success
            .addCase(sendOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token
            })
            // rejected
            .addCase(sendOtp.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // **** verify otp handle slice ****

            // pending 
            .addCase(verifyOtp.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })

            // fulfill
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null
                state.user = action.payload.user
            })

            // rejected 
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // *****login user handle slice*****

            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
});

export default authSlice.reducer;


