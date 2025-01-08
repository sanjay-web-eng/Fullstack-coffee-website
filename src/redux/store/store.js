import { configureStore , combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSilce";
 
const rootReducer = combineReducers({
	cart: cartReducer,
	 
  });
  
export const store = configureStore({
	reducer: rootReducer
});

 