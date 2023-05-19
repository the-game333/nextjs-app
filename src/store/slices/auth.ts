import { createSlice } from "@reduxjs/toolkit";

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
        Login(state, action) {
            const { user, session } = action.payload;
            state.user = user;
            state.accessToken = session.accessToken;
            state.isLoggedIn = true;
            state.isInitialized = true;
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
    Login,
    Logout,
} = auth.actions;
