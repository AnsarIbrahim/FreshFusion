import { View } from "react-native";
import HomeScreen from "../Home/HomeScreen";
import DetailsScreen from "../Details/DetailsScreen";
import CartScreen from "../Cart/CartScreen";

const Main = () => {
  return (
    <View>
      <HomeScreen />
      <DetailsScreen />
      <CartScreen />
    </View>
  );
};

export default Main;
