import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: "history",
    initialState: {
        history: []
    },
    reducers: {
        initHistory: (state, action) => {
            state.history = action.payload;
        },
        addHistory: (state, action) => {
            state.history.push(action.payload)
        },
        removeHistory: (state, action) => {
            let index = -1;
            for (let i = 0; i < state.history.length; i++) {
                if (state.history[i]._id === action.payload) {
                    index = i;
                }
            }
            if (index > -1) {
                state.history.splice(index, 1);
            }
        }
    }
})

export const { initHistory, addHistory, removeHistory} = historySlice.actions;
export default historySlice.reducer;