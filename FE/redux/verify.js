import { createSlice } from "@reduxjs/toolkit";

export const verifySlice = createSlice({
    name: "verify",
    initialState: {
        email: "",
        code: "",
    },
    reducers: {
        initEmail: (state, action) => {
            state.email = action.payload;
        },
        initCode: (state, action) => {
            state.code = action.payload;
        },
    },
});

export const { initEmail, initCode } = verifySlice.actions;
export default verifySlice.reducer;
