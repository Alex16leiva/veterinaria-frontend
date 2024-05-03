import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCollapsed: false
}

export const controlsSlicer = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        registerCollapse: (state, action) => {
            state.isCollapsed = action.payload;
        }
    }
})

export const { registerCollapse } = controlsSlicer.actions;