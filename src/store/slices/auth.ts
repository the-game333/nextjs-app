import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
const initialUser = {
    _id: "",
    email: "",
    username: "",
};

const initialState = {
    isInitialized: true,
    isLoggedIn: false,
    accessToken: "",
    user: initialUser,
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        rLogin(state, action) {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
            state.isLoggedIn = true;
            state.isInitialized = true;
            window.location.href = '/dashboard';
        },

        Logout(state, action) {
            state.accessToken = "";
            state.user = initialUser;
            state.isLoggedIn = false;
            state.isInitialized = true;
            state = { ...state };
            window.location.href = "/";
        },
    },
});

export default auth.reducer;

export const {
    rLogin,
    Logout,
} = auth.actions;
