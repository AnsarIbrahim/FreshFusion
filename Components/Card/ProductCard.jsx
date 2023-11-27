import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconHeart from "../IconButton/IconHeart";
import IconPlus from "../IconButton/IconPlus";
import Fonts from "../Fonts/Fonts";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  const handleIconPlusClick = () => {
    navigation.navigate("DetailsScreen", { product });
  };

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <Fonts>
      <View style={styles.container}>
        <View>
          <IconHeart product={product} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.thumbnail }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
            onError={(error) => console.log("Error loading image:", error)}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.priceText}>${product.price}</Text>
            <Text style={styles.titleText}>{product.title}</Text>
          </View>
          <TouchableOpacity onPress={handleIconPlusClick}>
            <IconPlus
              color="#F8F9FB"
              backgroundColor="#2A4BA0"
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Fonts>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    width: "50%",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    padding: 2,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    fontFamily: "ManropesemiBold",
  },
  titleText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    fontFamily: "ManropeRegular",
    color: "#606D76",
  },
});
