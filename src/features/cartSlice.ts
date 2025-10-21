import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Products} from "./productSlice";

interface CartItem extends Products {
    quantity: number
};

interface CartState {
    items: CartItem[]
};

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Products>) => {
            const existing = state.items.find((i) => i.id === action.payload.id)
            if(existing){
                existing.quantity += 1
            }else{
                state.items.push({...action.payload, quantity: 1})
            }


        },
        removeCart: (state, action:PayloadAction<number>) => {
            state.items = state.items.filter((i) => i.id !== action.payload)

        },

        clearCart: (state) => {
            state.items = []
        }
    }
});

export const {addToCart, removeCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;