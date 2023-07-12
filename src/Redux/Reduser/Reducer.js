import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []

};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      let find = state.cart.findIndex((item) => item.idMeal === action.payload.idMeal);
      if (find >= 0)
        state.cart[find].quantity += 1;
      else {
        state.cart.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.idMeal !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const { idMeal, quantity } = action.payload;
      const itemToUpdate = state.cart.find(item => item.idMeal === idMeal);

      if (itemToUpdate)
        itemToUpdate.quantity = quantity + 1;
    },
    decreaseItemQuantity: (state, action) => {
      const { idMeal, quantity } = action.payload;
      const itemToUpdate = state.cart.find(item => item.idMeal === idMeal);

      if (itemToUpdate.quantity > 1)
        itemToUpdate.quantity = quantity - 1;
    },
  },
})
export const { add, remove, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;