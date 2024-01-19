import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import {
	Manrope_500Medium,
	Manrope_600SemiBold,
	Manrope_800ExtraBold,
	Manrope_300Light,
	Manrope_400Regular,
	Manrope_700Bold,
	useFonts,
} from "@expo-google-fonts/manrope";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import FavouriteScreen from "./screens/FavouriteScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,

				backgroundColor: "red",
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Favourites"
				component={FavouriteScreen}
				options={{
					tabBarLabel: "Favourites",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="cards-heart"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={ShoppingCartScreen}
				options={{
					
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="cart"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	let [fontsLoaded, fontError] = useFonts({
		Manrope_600SemiBold,
		Manrope_500Medium,
		Manrope_800ExtraBold,
		Manrope_300Light,
		Manrope_400Regular,
		Manrope_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<>
			<StatusBar style="light" />
			<Provider store={store}>
				<NavigationContainer>
					<View style={styles.rootScreen}>
						<SafeAreaView style={styles.rootScreen}>
							<Stack.Navigator
								screenOptions={{
									headerShown: false,
									contentStyle: {
										backgroundColor: "white",
									},
								}}
								// initialRouteName="ProductDetails"
							>
								<Stack.Screen name="Tab" component={Tabs} />
								<Stack.Screen name="Home" component={HomeScreen} />
								<Stack.Screen
									name="ProductDetails"
									component={ProductDetailScreen}
								/>
								<Stack.Screen
									name="ShoppingCart"
									component={ShoppingCartScreen}
								/>
								<Stack.Screen name="Favourite" component={FavouriteScreen} />
							</Stack.Navigator>
						</SafeAreaView>
					</View>
				</NavigationContainer>
			</Provider>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
