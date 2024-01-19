import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const FavouriteItem = ({ image, title, price }) => {


	return (
		<View style={styles.cartItemContainer}>
			<View style={styles.cartItemInfoContainer}>
				<Image source={{ uri: image }} style={styles.image} />
				<View>
					<Text style={styles.itemName}>
						{title?.split(" ").slice(0, 1).join(" ")}
					</Text>
					<Text style={styles.itemPrice}>${price}</Text>
				</View>
			</View>

			<View style={styles.cartItemQuantityContainer}>
				
				<Text style={styles.quantityText}>${price}</Text>
		
			</View>
		</View>
	);
};

export default FavouriteItem;

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
