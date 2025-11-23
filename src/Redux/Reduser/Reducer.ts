import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItem = {
  idMeal: string;
  quantity: number;
  [key: string]: any;
};

export type CartState = {
  cart: CartItem[];
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const find = state.cart.findIndex((item) => item.idMeal === action.payload.idMeal);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.idMeal !== action.payload);
    },
    increaseItemQuantity: (state, action: PayloadAction<{ idMeal: string; quantity: number }>) => {
      const { idMeal, quantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.idMeal === idMeal);
      if (itemToUpdate) itemToUpdate.quantity = quantity + 1;
    },
    decreaseItemQuantity: (state, action: PayloadAction<{ idMeal: string; quantity: number }>) => {
      const { idMeal, quantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.idMeal === idMeal);
      if (itemToUpdate && itemToUpdate.quantity > 1) itemToUpdate.quantity = quantity - 1;
    },
  },
});

export const { add, remove, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;