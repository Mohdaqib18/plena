import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const {width} = Dimensions.get("window") 

const CarouselItem = ({ item }) => {

	return (
		<View style={styles.carouselItem}>
			<Image source={{uri:item}} style={styles.image} />
		</View>
	);
};

export default CarouselItem;

const styles = StyleSheet.create({
	carouselItem: {
        
    },
	image: {
	 width, 
     height: 207,
    
 
	},
});
