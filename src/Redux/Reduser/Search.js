// import { createSlice } from '@reduxjs/toolkit';

// const State={
//     filter:''
// }
// const cartSlice = createSlice({
//   name: 'filter',
//   initialState :State,
//   reducers: {
//     option: (state, action) => {
//         // state.push(action.payload);
//         // originalString.replace('Hello', 'Hi');
//         state.initialState.replace(state.filter,action.payload);
//     },
//   }
// })
// export const { option} = cartSlice.actions;
// export default cartSlice.reducer;
// itemSlice.js

import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'filter',
  initialState: null,
  reducers: {
    setItem: (state, action) => {
      return action.payload;
    }
  },
});

export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
