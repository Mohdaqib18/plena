import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../store/redux/cartItems";

const ShoppingCartScreen = ({ navigation }) => {
	const cartItemIds = useSelector((state) => state.cartItems.items);
	function backButtonHandler() {
		navigation.goBack();
	}

	const dispatch = useDispatch();

	function deleteCartItem(item) {
		dispatch(removeCartItem({ item: item }));
	}

	const subTotal = cartItemIds.reduce((acc, item) => acc + item.price, 0);
	return (
		<View style={{ flex: 1 }}>
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
						Shopping Cart({cartItemIds.length})
					</Text>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={cartItemIds}
					renderItem={({ item }) => (
						<CartItem
							image={item.thumbnail}
							price={item.price}
							title={item.title}
							deleteCartItem={deleteCartItem}
							item={item}
						/>
					)}
					key={(item) => item.id}
				/>
			</View>
			<View style={styles.container}>
				<View style={styles.priceBreakupContainer}>
					<View style={styles.cartAmountInfoContainer}>
						<Text style={styles.regularText}>Subtotal</Text>
						<Text style={styles.mediumText}>${subTotal}</Text>
					</View>
					<View style={styles.cartAmountInfoContainer}>
						<Text style={styles.regularText}>Delivery</Text>
						<Text style={styles.mediumText}>$2.0</Text>
					</View>
					<View style={styles.cartAmountInfoContainer}>
						<Text style={styles.regularText}>Total</Text>
						<Text style={styles.mediumText}>${subTotal + 2}</Text>
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
