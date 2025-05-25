import { createSlice, type PayloadAction, } from '@reduxjs/toolkit';
import type { CartItem } from '../../../types/cart';

const LOCAL_STORAGE_KEY = 'cart_items';

const loadCartFromLocalStorage = (): CartItem[] => {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveCartToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
            saveCartToLocalStorage(state.items);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(i => i.id !== action.payload);
            saveCartToLocalStorage(state.items);
        },
        updateQuantity(
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
                saveCartToLocalStorage(state.items);
            }
        },
        clearCart(state) {
            state.items = [];
            saveCartToLocalStorage(state.items);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;

export const selectCartTotalQuantity = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
