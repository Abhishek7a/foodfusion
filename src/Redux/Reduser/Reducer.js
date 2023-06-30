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

import { createSlice } from '@reduxjs/toolkit';


const initialState={
  cart:[],
  quantity:0
};


const cartSlice = createSlice({
  name: 'cart',
  initialState :[],
  reducers: {
    add: (state, action) => {
      let find = state.findIndex((item) => item.id === action.payload.id);
      // if (find >= 0) 
        // state[find].quantity +=1;
      // else
        state.push(action.payload);
    },
    remove: (state, action) => {
      // const nextCartItems = state.filter((cartItem) => cartItem.id !== action.payload.id);
      // state.cartItems = nextCartItems;
      // const itemId = action.payload;
      return state.filter((item) => item.idMeal !== action.payload);
    //   filter((e) => {
    //     return e !== id;
    // }
    },
  }
})
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;