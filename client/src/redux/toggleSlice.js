
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toogleButtonLenguage: true, 
    toogleButtonColorMode: true,                                    
};

export const clientsSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        lenguage: (state, action) => {
            state.toogleButtonLenguage = action.payload;
        }, 
        colorMode: (state, action) => {
            state.toogleButtonColorMode = action.payload;
        },
    },
});

export const { lenguage, colorMode } = clientsSlice.actions;    
export default clientsSlice.reducer;