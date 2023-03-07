import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

export type RootReducer = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  authState: authReducer,
  productState: productReducer,
  cartState: cartReducer,
});

export default rootReducer;
