import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  quantity: 1
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      let find = state.cart.findIndex((item) => item.idMeal === action.payload.idMeal);
      if (find >= 0)
        state.cart[find].quantity += 1;
      else
        state.cart.push(action.payload);
    },
    remove: (state, action) => {
      return state.cart.filter((item) => item.idMeal !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.quantity = state.quantity + 1;
      // state.cart.map((item) => {
      // if (item.idMeal === action.payload.idMeal) {
        // return { ...item, quantity: item.quantity + 1 };
        // }
        // });
      },
      decreaseItemQuantity: (state, action) => {
      if (state.quantity > 1)
      state.quantity = state.quantity - 1;
      // state.cart.map((item) => {
      //   if (item.idMeal === action.payload) {
      //     return { ...item, quantity: item.quantity - 1 };
      //   }
      // });
    },
  }
})
export const { add, remove, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// const { createSlice } = require('@reduxjs/toolkit');

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState:[],
//   reducers: {
//     add(state, action) {
//       // console.log(action.payload.id);
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       // console.log(action.payload);
//       // console.log(state.filter((item)=> item.id ));
//       // const itemId = action.payload.id;
//       return state.filter((item) => item.id !== itemId);


//     },
//   },
// });
// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;