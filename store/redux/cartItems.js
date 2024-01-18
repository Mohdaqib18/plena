import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
	name: "cartItem",
	initialState: {
		ids: [],
	},
	reducers: {
		addCartItem: (state, action) => {
			state.ids.push(action.payload.id);
		},
		removeCartItem: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const addCartItem = cartItemSlice.actions.addCartItem;
export const removeCartItem = cartItemSlice.actions.removeCartItem;
export default cartItemSlice.reducer;
