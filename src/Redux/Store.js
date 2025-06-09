import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reduser/Reducer';

const store = configureStore({
  reducer: {
    cart: reducer,
  },
})
export default store;  