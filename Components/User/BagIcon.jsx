import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const BagIcon = ({ number, navigation, color }) => {
  if (number > 0) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("CartScreen")}
        style={{
          position: "relative",
          width: 24,
          height: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SimpleLineIcons name="handbag" size={18} color={color} />
        <Text
          style={{
            position: "absolute",
            right: -5,
            top: -5,
            color: "white",
            backgroundColor: "orange",
            borderRadius: 50,
            width: 17,
            height: 17,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 13,
            lineHeight: 17,
          }}
        >
          {number}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          position: "relative",
          width: 24,
          height: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SimpleLineIcons name="handbag" size={18} color={color} />
      </View>
    );
  }
};

export default BagIcon;
