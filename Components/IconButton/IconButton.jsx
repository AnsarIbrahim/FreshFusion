import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, size, color, onPress, focused }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          borderRadius: size,
          backgroundColor: focused ? "black" : "transparent",
          padding: size * 0.25,
          justifyContent: "center",
          alignItems: "center",
          width: size * 2,
          height: size * 2,
          marginTop: focused ? -20 : 0,
        }}
      >
        <Ionicons name={name} size={size} color={focused ? "#FFC83A" : color} />
      </View>
    </Pressable>
  );
};

export default IconButton;
