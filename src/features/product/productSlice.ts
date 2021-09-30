import { fetchAllProductsAsync } from './productAPI';
import { RootState } from './../../app/store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../models/Product';


interface productState {
    products: Product[]
}

const initialState : productState = {
    products: []
}

export const fetchProductsAsync = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetchAllProductsAsync()
        return response
    }
)

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        })
    }
})

export const selectProducts = (state: RootState) => state.product.products

export default productSlice.reducer;