import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../../Screen/Home/HomeScreen";
import Categories from "../../Screen/Categories/Categories";
import Favourite from "../../Screen/Favourite/Favourite";
import More from "../../Screen/More/More";
import IconButton from "../IconButton/IconButton";

const BottomTabs = createBottomTabNavigator();

const Navbar = () => {
  const navigation = useNavigation();

  const navigate = (name) => {
    navigation.navigate(name);
  };

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F8F9FB",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          elevation: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "300",
          marginBottom: 5,
        },
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              name="home-outline"
              size={size}
              color={color}
              focused={focused}
              onPress={() => navigate("Home")}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Categories",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              name="grid-outline"
              size={size}
              color={color}
              focused={focused}
              onPress={() => navigate("Categories")}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: "Favourite",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              name="heart-outline"
              size={size}
              color={color}
              focused={focused}
              onPress={() => navigate("Favourite")}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="More"
        component={More}
        options={{
          title: "More",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButton
              name="ellipsis-vertical-outline"
              size={size}
              color={color}
              focused={focused}
              onPress={() => navigate("More")}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Navbar;
