import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
};

// Thunk для загрузки
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Ошибка загрузки товаров');
    return await res.json();
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка';
            });
    },
});

export default productsSlice.reducer;
