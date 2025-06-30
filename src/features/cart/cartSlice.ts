import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {Product} from '../../types/product';

interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const loadFromLocalStorage = (): CartItem[] => {
    try {
        const data = localStorage.getItem('cart');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items));
};

const initialState: CartState = {
    items: loadFromLocalStorage(),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            const existing = state.items.find(item => item.id === product.id);
            if (existing) {
                existing.quantity++;
            } else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                });
            }
            saveToLocalStorage(state.items);
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveToLocalStorage(state.items);
        },
        updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity > 0 ? action.payload.quantity : 1;
            }
            saveToLocalStorage(state.items);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
