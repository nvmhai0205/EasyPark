import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
    name: "current",
    initialState: {
        current: {
            parking_id: "",
            sector: "",
            row: "",
            pos: "",
        }
    },
    reducers: {
        initCurrent: (state, action) => {
            state.current = action.payload;
        }
    }
})

export const {initCurrent} = currentSlice.actions;
export default currentSlice.reducer;