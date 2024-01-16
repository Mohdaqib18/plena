import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function OfferCard() {
	return (
		<View style={styles.offerCardContainer}>
			<ScrollView horizontal>
				<View>
					<Image
						source={require("../assets/images/slide1.jpg")}
						style={styles.offerProductImage}
					/>
				</View>
				<View>
					<Image
						source={require("../assets/images/slide2.jpg")}
						style={styles.offerProductImage}
					/>
				</View>
				<View>
					<Image
						source={require("../assets/images/slide3.jpg")}
						style={styles.offerProductImage}
					/>
				</View>
				<View>
					<Image
						source={require("../assets/images/slide4.jpg")}
						style={styles.offerProductImage}
					/>
				</View>
				<View>
					<Image
						source={require("../assets/images/slide5.jpg")}
						style={styles.offerProductImage}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	offerCardContainer: {
		flexDirection: "row",
		marginVertical: 30,
	},

	
	offerProductImage: {
		width: 269,
		height: 130,
		backgroundColor: "#F9B023",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "yellow",
		marginLeft: 20,
	},
});
