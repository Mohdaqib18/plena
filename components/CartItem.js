import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const CartItem = ({ image, title, price, deleteCartItem, item }) => {
	const [quantity, setQuantity] = useState(1);

	const totalPrice = price * quantity;

	function increaseQuantity() {
		setQuantity((prev) => prev + 1);
		
	}
	function decreaseQuantity() {
		setQuantity((prev) => prev - 1);
		if (quantity === 1) {
			deleteCartItem(item);
		}
	}
	return (
		<View style={styles.cartItemContainer}>
			<View style={styles.cartItemInfoContainer}>
				<Image source={{ uri: image }} style={styles.image} />
				<View>
					<Text style={styles.itemName}>
						{title?.split(" ").slice(0, 1).join(" ")}
					</Text>
					<Text style={styles.itemPrice}>${totalPrice}</Text>
				</View>
			</View>

			<View style={styles.cartItemQuantityContainer}>
				<Pressable onPress={decreaseQuantity}>
					<Ionicons name="remove-circle-outline" size={40} color="black" />
				</Pressable>
				<Text style={styles.quantityText}>{quantity}</Text>
				<Pressable onPress={increaseQuantity}>
					<Ionicons name="add-circle-outline" size={40} color="black" />
				</Pressable>
			</View>
		</View>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	cartItemContainer: {
		marginBottom: 36,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cartItemInfoContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 12,
	},
	cartItemQuantityContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	quantityText: {
		fontFamily: "Manrope_500Medium",
		fontSize: 18,
	},
	itemName: {
		fontFamily: "Manrope_500Medium",
		fontSize: 16,
	},
	itemPrice: {
		fontFamily: "Manrope_400Regular",
		fontSize: 16,
	},
	image: {
		width: 70,
		height: 70,
	},
});
