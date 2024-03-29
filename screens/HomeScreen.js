import React, { useEffect, useState } from "react";
import {
	FlatList,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	ToastAndroid,
	View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import OfferCard from "../components/OfferCardSlider";
import ProductThumbnail from "../components/ProductThumbnail";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../store/redux/cartItems";
import { addFavourite, removeFavourite } from "../store/redux/favorites";

export default function HomeScreen({ navigation }) {
	const [productList, setProductList] = useState([]);
	const cartItemIds = useSelector((state) => state.cartItems.items);

	const favouriteItems = useSelector((state) => state.favouriteItems.items);
	const dispatch = useDispatch();

	function changeFavoriteStatusHandler(item) {
		const favouriteItem = favouriteItems
			.map((item) => item?.id)
			.includes(item.id);

		if (favouriteItem) {
			dispatch(removeFavourite({ item: item }));
		} else {
			dispatch(addFavourite({ item: item }));
		}
	}

	function addToCart(item) {
		const cartItemAdded = cartItemIds.map((item) => item?.id).includes(item.id);
		if (cartItemAdded) {
			ToastAndroid.showWithGravity(
				"Item Already Added",
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM
			);
		} else {
			dispatch(addCartItem({ item: item }));
		}
	}

	function goToCart() {
		navigation.navigate("ShoppingCart");
	}

	function renderItem({ item }) {
		function pressHandler() {
			navigation.navigate("ProductDetails", {
				title: item.title,
				price: item.price,
				thumbnail: item.thumbnail,
				rating: item.rating,
				images: item.images,
				discount: item.discountPercentage,
				description: item.description,
				id: item.id,
				item: item,
			});
		}

		return (
			<ProductThumbnail
				title={item.title}
				price={item.price}
				thumbnail={item.thumbnail}
				item={item}
				onItemPress={pressHandler}
				addToCart={addToCart}
				toggleFavStatus={changeFavoriteStatusHandler}
			/>
		);
	}

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProductList(data.products));
	}, []);

	return (
		<View style={styles.screenContainer}>
			<View style={styles.headerContainer}>
				<View style={styles.welcomeContainer}>
					<Text style={styles.welcomeText}>Hi, Aqib</Text>
					<Pressable onPress={goToCart}>
						<SimpleLineIcons name="handbag" size={24} color="white" />
					</Pressable>
				</View>
				<View style={styles.searchContainer}>
					<AntDesign
						name="search1"
						size={24}
						color="#F8F9FB"
						style={styles.searchIcon}
					/>
					<TextInput
						placeholder="Search Products or store"
						style={styles.searchInput}
						placeholderTextColor={"#8891A5"}
					/>
				</View>
				<View style={styles.deliveryInfoContainer}>
					<View>
						<Text style={styles.greyText}>DELIVERY TO</Text>
						<View style={styles.infoContainer}>
							<Text style={styles.whiteText}>Green Way 3000, Sylhet</Text>
							<EvilIcons name="chevron-down" size={24} color="#B2BBCE" />
						</View>
					</View>
					<View>
						<Text style={styles.greyText}>WITHIN</Text>
						<View style={styles.infoContainer}>
							<Text style={styles.whiteText}>1 Hour</Text>
							<EvilIcons name="chevron-down" size={24} color="#B2BBCE" />
						</View>
					</View>
				</View>
			</View>
			<View style={styles.mainContainer}>
				<OfferCard />

				<View>
					<Text style={styles.recommendedText}>Recommended</Text>
				</View>

				<View>
					<View style={styles.productListContainer}>
						<FlatList
							data={productList}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
							numColumns={2}
							showsVerticalScrollIndicator={false}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
	},
	headerContainer: {
		alignItems: "center",
		paddingHorizontal: 20,
		paddingBottom: 10,
		backgroundColor: "#2A4BA0",
	},
	welcomeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		alignItems: "center",
		marginTop: 60,
	},

	welcomeText: {
		fontFamily: "Manrope_600SemiBold",
		color: "#F8F9FB",
		fontSize: 22,
	},
	mainContainer: {},

	searchContainer: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		width: "100%",
		height: 56,
		marginTop: 35,
		fontFamily: "Manrope_500Medium",
		borderRadius: 28,
		backgroundColor: "#153075",
	},

	searchIcon: { marginLeft: 40 },

	searchInput: {
		fontSize: 16,
		color: "white",
	},

	deliveryInfoContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		marginTop: 30,
	},

	infoContainer: {
		flexDirection: "row",
	},

	greyText: {
		fontFamily: "Manrope_800ExtraBold",
		fontSize: 13,
		color: "#B2BBCE",
		marginBottom: 5,
	},

	whiteText: {
		fontFamily: "Manrope_500Medium",
		fontSize: 16,
		color: "#F8F9FB",
	},

	recommendedText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 30,
		marginLeft: 20,
		marginBottom: 12,
	},

	productListContainer: {
		padding: 10,
		justifyContent: "space-between",
		height: 350,
	},
});
