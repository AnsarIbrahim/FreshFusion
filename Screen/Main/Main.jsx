import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "../../Components/Navigation/Navbar";
import DetailsScreen from "../Home/DetailsScreen";
import CartScreen from "../Home/CartScreen";
import BagIcon from "../../Components/User/BagIcon";
import Ionicons from "react-native-vector-icons/Ionicons";
import Loader from "../../Components/Loader/Loader";

const Stack = createStackNavigator();

const Main = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
  const loading = useSelector((state) => state.products.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "",
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <BagIcon
                  number={totalItems}
                  navigation={navigation}
                  color={"#000"}
                />
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ padding: 10 }}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={({ navigation }) => ({
            headerTitle: `Shopping Cart (${totalItems})`,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
