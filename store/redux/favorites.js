import { createSlice } from "@reduxjs/toolkit";

const favouriteItemSlice = createSlice({
	name: "favouriteItem",
	initialState: {
		items: [],
	},
	reducers: {
		addFavourite: (state, action) => {
			state.items.push(action.payload.item);
		},
		removeFavourite: (state, action) => {
		state.items.splice(state.items.indexOf(action.payload.item), 1);
		},
	},
});

export const addFavourite = favouriteItemSlice.actions.addFavourite;
export const removeFavourite = favouriteItemSlice.actions.removeFavourite;
export default favouriteItemSlice.reducer;
