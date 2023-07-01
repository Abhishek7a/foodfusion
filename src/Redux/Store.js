import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reduser/Reducer';
import serchReducer from './Reduser/Search';

const store = configureStore({
  reducer: {
    cart: reducer,
    filter:serchReducer
  },
})
export default store;  