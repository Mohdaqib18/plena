import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CarouselItem from "./CarouselItem";
import Pagination from "./Pagination";
import { Ionicons } from "@expo/vector-icons";


const Carousel = ({data}) => {
	return (
		<View style={styles.carousel}>
			<Ionicons
				name="heart-outline"
				size={24}
				color="red"
				style={styles.heart}
			/>
			<FlatList
				data={data}
				renderItem={({ item }) => <CarouselItem item={item} />}
				pagingEnabled
				snapToAlignment="center"
				horizontal
				showsHorizontalScrollIndicator={false}
			/>

			<Pagination data={data} />
		</View>
	);
};

export default Carousel;

const styles = StyleSheet.create({
	carousel: {
		height: 207,
		borderWidth: 1,
		borderColor: "red",
	},

    heart:{
        position:"absolute",
        right:10,
        top:10,
        zIndex:1,

    }
});
