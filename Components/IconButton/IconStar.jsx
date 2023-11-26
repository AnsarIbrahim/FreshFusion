import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconStar = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <AntDesign
        key={i}
        name={i < Math.round(rating) ? "star" : "staro"}
        size={16}
        color={i < Math.round(rating) ? "#FFC83A" : "black"}
      />
    );
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

export default IconStar;
