import {configureStore} from "@reduxjs/toolkit";
import cartItemsReducer from "./cartItems";
import favouritesItemsReducer from "./favorites"
export const store = configureStore({
	reducer: {
		cartItems: cartItemsReducer,
		favouriteItems: favouritesItemsReducer,
	},
});

