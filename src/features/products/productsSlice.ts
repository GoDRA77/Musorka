import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {Product} from '../../types/product';
import { products as initialProducts } from '../../mocks/products';

interface ProductsState {
    items: Product[];
    filteredItems: Product[];
    categories: string[];
    selectedCategories: string[];
}

const initialState: ProductsState = {
    items: initialProducts,
    filteredItems: initialProducts,
    categories: Array.from(new Set(initialProducts.map(p => p.category))),
    selectedCategories: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleCategory(state, action: PayloadAction<string>) {
            const category = action.payload;
            if (state.selectedCategories.includes(category)) {
                state.selectedCategories = state.selectedCategories.filter(c => c !== category);
            } else {
                state.selectedCategories.push(category);
            }
            // Фильтруем товары
            if (state.selectedCategories.length === 0) {
                state.filteredItems = state.items;
            } else {
                state.filteredItems = state.items.filter(p =>
                    state.selectedCategories.includes(p.category)
                );
            }
        },
    },
});

export const { toggleCategory } = productsSlice.actions;

export default productsSlice.reducer;
