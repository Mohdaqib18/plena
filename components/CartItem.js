import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CartItem = ({image,title,price}) => {
	return (
		<View style={styles.cartItemContainer}>
			<View style={styles.cartItemInfoContainer}>
				<Image source={{ uri: image }} style={styles.image} />
				<View>
					<Text style={styles.itemName}>{title}</Text>
					<Text style={styles.itemPrice}>${price}</Text>
				</View>
			</View>

			<View style={styles.cartItemQuantityContainer}>
				<Ionicons name="remove-circle-outline" size={40} color="black" />
				<Text style={styles.quantityText}>1</Text>
				<Ionicons name="add-circle-outline" size={40} color="black" />
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
        gap:10
	},
    quantityText:{
        fontFamily:"Manrope_500Medium",
        fontSize:18
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
