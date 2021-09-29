import { RootState, AppThunk } from './../../app/store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../models/Product';

export interface CartState {
    products: Product[],
    visible: boolean
}

const initialState: CartState = {
    products: [],
    visible: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        toggleVisible: (state) => {
            state.visible = !state.visible
        }
    },
    extraReducers: (builder) => {
        return builder
    }
})

export const { addProduct, toggleVisible } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer