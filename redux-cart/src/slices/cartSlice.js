import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apple: 0,
    banana: 0 
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        buyApple: (state) => {
            state.apple += 1;
        },
        buyBanana: (state) => {
            state.banana += 1;
        },
        clearCart: (state) => {
            state.apple = 0;
            state.banana = 0;
        }
    } 
})

export const {buyApple, buyBanana, clearCart} = cartSlice.actions;
export default cartSlice.reducer;