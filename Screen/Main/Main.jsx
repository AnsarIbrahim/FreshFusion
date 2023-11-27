import { View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "../../Components/Navigation/Navbar";
import DetailsScreen from "../Home/DetailsScreen";
import CartScreen from "../Home/CartScreen";
import BagIcon from "../../Components/User/BagIcon";

const Stack = createStackNavigator();

const HeaderRight = ({ totalItems }) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 10 }}>
      <BagIcon number={totalItems} navigation={navigation} color={"#000"} />
    </View>
  );
};

const Main = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
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
          options={{
            headerShown: true,
            headerTitle: "",
            headerRight: () => <HeaderRight totalItems={totalItems} />,
          }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerTitle: `Shopping Cart (${totalItems})`,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
