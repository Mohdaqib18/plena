import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const ShoppingCartScreen = ({ navigation }) => {
	const cartItemIds = useSelector((state) => state.cartItems.ids);
	function backButtonHandler() {
		navigation.goBack();
	}
   console.log(cartItemIds)
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
					<Text style={styles.shoppingCartText}>Shopping Cart(5)</Text>
				</View>
			</View>
			<View>
				<FlatList
					data={cartItemIds}
					renderItem={({ item }) => (
						<CartItem
							image={item.thumbnail}
							price={item.price}
							title={item.title}
						/>
					)}

					key={(item) => item.id}
				/>
			</View>
			<View style={styles.container}>
				<View style={styles.priceBreakupContainer}>
					<View style={styles.cartAmountInfoContainer}>
						<Text style={styles.regularText}>Subtotal</Text>
						<Text style={styles.mediumText}>$35.96</Text>
					</View>
					<View style={styles.cartAmountInfoContainer}>
						<Text style={styles.regularText}>Delivery</Text>
						<Text style={styles.mediumText}>$2.0</Text>
					</View>
					<View style={styles.cartAmountInfoContainer}>
						<Text style={styles.regularText}>Total</Text>
						<Text style={styles.mediumText}>$37.96</Text>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable>
						<View>
							<Text style={styles.buttonText}>Proceed to checkout</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 20,
	},

	priceBreakupContainer: {
		width: "100%",
		padding: 10,
	},
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

	cartAmountInfoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	regularText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 16,
	},
	mediumText: {
		fontFamily: "Manrope_500Medium",
		fontSize: 16,
	},
	buttonContainer: {
		width: "100%",
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		height: 56,
		backgroundColor: "#2A4BA0",
		marginTop: 20,
	},
	buttonText: {
		fontFamily: "Manrope_600SemiBold",
		color: "white",
		fontSize: 16,
	},
});
