import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
	name: "cartItem",
	initialState: {
		items: [],
	},
	reducers: {
		addCartItem: (state, action) => {
			state.items.push(action.payload.item);
		},
		removeCartItem: (state, action) => {
			state.items.splice(state.items.indexOf(action.payload.item), 1);
		},
	},
});

export const addCartItem = cartItemSlice.actions.addCartItem;
export const removeCartItem = cartItemSlice.actions.removeCartItem;
export default cartItemSlice.reducer;
