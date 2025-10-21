import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/productSlice"
import cartReducers from "../features/cartSlice"

export const store = configureStore({
    reducer: {
        product: productReducers,
        cart: cartReducers
    }

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;