import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Products {
    id: number;
    name: string;
    price: number;
}

interface ProductState {
    items: Products[];
    loading: boolean;
    error: null|string; 
}

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null
}

// fetch to products list
export const fetchProducts = createAsyncThunk("Products/fetch", async () => {
    const res = await axios.get("http://localhost:3000/products")
    return res.data
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.loading = false
        })
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message || "fetch error"
            state.loading = false
            console.log("Fetch Error");
        })
    }
});

export default productSlice.reducer;