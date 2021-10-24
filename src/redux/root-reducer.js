import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import CartReducer from './Cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: CartReducer
});