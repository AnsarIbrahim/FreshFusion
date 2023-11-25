import React from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const IconPlus = ({ color = "black", backgroundColor = "lightgray" }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Ionicons name="add" size={24} color={color} />
    </View>
  );
};

export default IconPlus;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
