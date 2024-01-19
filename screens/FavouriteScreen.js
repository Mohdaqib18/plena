import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import FavouriteItem from "../components/FavouriteItem";

const FavouriteScreen = ({ navigation }) => {
	const favouriteItems = useSelector((state) => state.favouriteItems.items);
	function backButtonHandler() {
		navigation.goBack();
	}
	return (
		<View>
			<View style={styles.navbar}>
				<Pressable onPress={backButtonHandler}>
					<Ionicons
						name="chevron-back-circle-outline"
						size={28}
						color="black"
					/>
				</Pressable>
				<View>
					<Text style={styles.shoppingCartText}>
						Favourite Items ({favouriteItems.length})
					</Text>
				</View>
			</View>
			<View>
				<FlatList
					data={favouriteItems}
					renderItem={({ item }) => (
						<FavouriteItem
							image={item.thumbnail}
							price={item.price}
							title={item.title}
						/>
					)}
					key={(item) => item.id}
				/>
			</View>
		</View>
	);
};

export default FavouriteScreen;

const styles = StyleSheet.create({
	navbar: {
		flexDirection: "row",
		gap: 21,
		alignItems: "center",
		marginTop: 60,
		paddingHorizontal: 20,
		marginBottom: 41,
	},

	shoppingCartText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 18,
	},
	container: {
		alignItems: "center",
		padding: 20,
	},
});
