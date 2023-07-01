import { createSlice } from '@reduxjs/toolkit';

const State={
    filter:''
}
const cartSlice = createSlice({
  name: 'filter',
  initialState :State,
  reducers: {
    option: (state, action) => {
        // state.push(action.payload);
        // originalString.replace('Hello', 'Hi');
        state.initialState.replace(state.filter,action.payload);
    },
  }
})
export const { option} = cartSlice.actions;
export default cartSlice.reducer;