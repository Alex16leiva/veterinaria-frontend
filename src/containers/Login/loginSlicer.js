import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    logged: false,
    isFetching: false,
    error: false,
}

export const loginSlicer = createSlice({
    name: 'logins',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.logged = true;
        },
        logout: (state) => {
            state.user = null,
            state.logged = false
        }
    }
})

export const { login, logout } = loginSlicer.actions;