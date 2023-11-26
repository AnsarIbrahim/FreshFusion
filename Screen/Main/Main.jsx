import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "../../Components/Navigation/Navbar";
import DetailsScreen from "../Home/DetailsScreen";
import CartScreen from "../Home/CartScreen";
import BagIcon from "../../Components/User/BagIcon";

const Stack = createStackNavigator();

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 10 }}>
      <BagIcon number={0} navigation={navigation} color={"#000"} />
    </View>
  );
};

const Main = () => {
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
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
