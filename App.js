import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import {
	Manrope_500Medium,
	Manrope_600SemiBold,
	Manrope_800ExtraBold,
	Manrope_300Light,
	Manrope_400Regular,
	useFonts,
} from "@expo-google-fonts/manrope";
import ProductDetailScreen from "./screens/ProductDetailScreen";

export default function App() {
	let [fontsLoaded, fontError] = useFonts({
		Manrope_600SemiBold,
		Manrope_500Medium,
		Manrope_800ExtraBold,
		Manrope_300Light,
		Manrope_400Regular,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<>
			<StatusBar style="light" />
			<View style={styles.rootScreen}>
				<SafeAreaView style={styles.rootScreen}>
					<HomeScreen />
					{/* <ProductDetailScreen/> */}
				</SafeAreaView>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
