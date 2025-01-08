import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	totalAmount: 0,
 
};

export const cartSlice = createSlice({
	name: "carts",
	initialState,
	reducers: {
		ADD_TO_CART: (state, action) => {
			const existingItem = state.cart.find((item) => item.$id === action.payload.$id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
			state.totalAmount = state.cart.reduce(
				(sum, item) => sum + item.quantity * item.price,
				0
			);
		  
		},
		REMOVE_ITEM: (state, action) => {
			state.cart = state.cart.filter((elm) => elm.$id !== action.payload);
			state.totalAmount = state.cart.reduce(
				(sum, item) => sum + item.quantity * item.price,
				0
			);
		},
		increaseItem: (state, action) => {
			const item = state.cart.find((item) => item.$id === action.payload);
			if (item) {
				item.quantity += 1;
			}
			state.totalAmount = state.cart.reduce(
				(sum, item) => sum + item.quantity * item.price,
				0
			);
		},
		decreaseItem: (state, action) => {
			const item = state.cart.find((item) => item.$id === action.payload);
			if (item) {
				if (item.quantity > 1) {
					item.quantity -= 1;
				}
			}
			state.totalAmount = state.cart.reduce(
				(sum, item) => sum + item.quantity * item.price,
				0
			);
		},
		clearCart: (state) => {
			state.cart = [];
			state.totalAmount = 0;
		},

	},
});

export const { ADD_TO_CART, REMOVE_ITEM, increaseItem, decreaseItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

