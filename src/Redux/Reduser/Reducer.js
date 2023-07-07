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
        // if (state.cart.map((item) => item.quantity === 1)) {
        // let find = state.cart.findIndex((item) => item.idMeal === action.payload.idMeal);
        // state.cart[find].quantity = 1;
        // state.cart = state.cart.map((item) => {
        //   if (item.quantity)
        //   return { ...item, quantity: item.quantity }
        //   elsex
        //     return { ...item, quantity: 1 }
        //   })
        // }
        // else {
        // state.cart.push(action.payload);
        // state.cart = state.cart.map((item) => {
        // return { ...item, quantity: item.quantity }
        // })
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.idMeal !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // state.cart = state.cart.map((item) => {
        const { idMeal, quantity } = action.payload;
        const itemToUpdate = state.cart.find(item => item.idMeal === idMeal);

        if (itemToUpdate) 
          itemToUpdate.quantity = quantity+1;
        

        // if (item.idMeal === action.payload) {
          // return { ...item, quantity: item.quantity + 1 };
          // item.quantity=item.quantity + 1;
        // item.quantity=item.quantity + 1;  
      // }
      // state.quantity = state.quantity + 1;
    // })
  },
  decreaseItemQuantity: (state, action) => {
    const { idMeal, quantity } = action.payload;
    const itemToUpdate = state.cart.find(item => item.idMeal === idMeal);
  console.log(itemToUpdate);

    if (itemToUpdate.quantity>1) 
      itemToUpdate.quantity = quantity-1;

    // state.quantity = state.quantity - 1;
  },
},
  // }
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