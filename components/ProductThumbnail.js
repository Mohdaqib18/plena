import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function ProductThumbnail({ title, price, thumbnail, onItemPress }) {
	return (
		<View style={styles.thumbnailContainer}>
			<Pressable onPress={onItemPress}>
				<View>
					<Ionicons
						name="heart-outline"
						size={24}
						color="black"
						style={styles.heart}
					/>
					<Image source={{ uri: thumbnail }} style={styles.productImage} />
				</View>
				<View style={styles.productInfoContainer}>
					<View>
						<Text style={styles.priceText}>${price}</Text>
						<Text style={styles.nameText}>
							{title.split(" ").slice(0, 2).join(" ")}
						</Text>
					</View>
					<View>
						<Pressable>
							<Ionicons name="add-circle" size={29} color="#2A4BA0" />
						</Pressable>
					</View>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	thumbnailContainer: {
		width:"45%",
		height: 194,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "black",
		padding: 2,
		margin:7,
	
	},

	productImage: {
		width: "100%",
		height: 100,
	},

	productInfoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
	},

	nameText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 12,
		color: "#616A7D",
	},

	priceText: {
		fontFamily: "Manrope_600SemiBold",
		fontSize: 14,
		color: "#1E222B",
	},

	heart: {
		marginVertical: 5,
		marginLeft: 5,
	},
});
