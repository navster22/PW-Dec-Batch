import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import themeReducer from "../slices/themeSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer
    }
})