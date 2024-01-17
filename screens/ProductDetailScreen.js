import { Pressable, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";

export default function ProductDetailScreen({ navigation, route }) {
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
				<SimpleLineIcons name="handbag" size={24} color="black" />
			</View>

			<View>
				<Text style={styles.titleText}>
					{route?.params?.title.split(" ").slice(0, 2).join(" ")}
				</Text>

				<View style={styles.ratingsContainer}>
					<Text>Rating:{route.params.rating}⭐</Text>
				</View>
			</View>

			<View>
				<Carousel data={route.params.images} />
			</View>

			<View style={styles.priceInfoContainer}>
				<Text style={styles.priceText}>${route.params.price}</Text>
				<View style={styles.discountTextContainer}>
					<Text style={styles.discountText}>%{route.params.discount} OFF</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<View style={styles.addButton}>
					<Pressable>
						<Text style={styles.addButtonText}>Add To Cart</Text>
					</Pressable>
				</View>
				<View style={styles.buyButton}>
					<Pressable>
						<Text style={styles.buyButtonText}>Buy Now</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.descriptionContainer}>
				<View style={styles.detailsTextContainer}>
					<Text style={styles.detailsText}>Details</Text>
				</View>
				<View style={styles.descriptionTextContainer}>
					<Text style={styles.descriptionText}>{route.params.description}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 60,
		paddingHorizontal: 20,
	},

	titleText: {
		color: "black",
		fontFamily: "Manrope_800ExtraBold",
		fontSize: 50,
		marginTop: 46,
		marginLeft: 20,
	},

	ratingsContainer: {
		marginTop: 14,
		marginLeft: 26,
	},

	priceInfoContainer: {
		flexDirection: "row",
		marginTop: 26,
		marginLeft: 20,
		alignItems: "center",
		gap: 13,
	},

	priceText: {
		fontFamily: "Manrope_700Bold",
		fontSize: 18,
		color: "#2A4BA0",
	},
	discountTextContainer: {
		backgroundColor: "#2A4BA0",
		fontFamily: "Manrope_400Regular",
		fontSize: 12,
		width: 95,
		height: 26,
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	discountText: {
		color: "#FAFBFD",
	},

	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 30,
	},
	addButton: {
		width: 143,
		height: 56,
		borderRadius: 20,
		borderColor: "#2A4BA0",
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	buyButton: {
		width: 143,
		height: 56,
		borderRadius: 20,
		backgroundColor: "#2A4BA0",
		justifyContent: "center",
		alignItems: "center",
	},
	addButtonText: {
		fontFamily: "Manrope_600SemiBold",
		fontSize: 14,
		color: "#2A4BA0",
	},
	buyButtonText: {
		fontFamily: "Manrope_600SemiBold",
		fontSize: 14,
		color: "#FFFFFF",
	},

	descriptionContainer: {
		width: 330,
		height: 102,
		marginTop: 30,
		marginLeft: "auto",
		marginRight: "auto",
	},
	detailsText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 16,
		color: "#1E222B",
	},
	descriptionText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 16,
		color: "#8891A5",
	},
	detailsTextContainer: {
		marginBottom: 6,

	
	},
	descriptionTextContainer: {
		
	},
});
