import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import IconStar from "../IconButton/IconStar";
import IconHeart from "../IconButton/IconHeart";
import Fonts from "../Fonts/Fonts";

const ProductDetails = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentImage(currentIndex);
  };

  return (
    <Fonts>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <View style={styles.ratingContainer}>
            <IconStar rating={product.rating} />
            <Text style={styles.rating}>
              {product.rating.toFixed(2)} Rating
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
              onScroll={handleScroll}
              pagingEnabled
            >
              {product.images.map((image, index) => (
                <View style={styles.imageWrapper} key={index}>
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ))}
            </ScrollView>
            <View style={{ ...styles.imageIndicator, flexDirection: "row" }}>
              {product.images.map((_, index) => (
                <View
                  key={index}
                  style={{
                    height: 5,
                    width: 20,
                    borderRadius: 5,
                    backgroundColor: index === currentImage ? "yellow" : "gray",
                    margin: 5,
                  }}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.iconHeart}>
              <IconHeart />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center gap-5 py-5">
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.discount}>
              ${product.discountPercentage} OFF%
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderColor: "#2A4BA0",
                borderWidth: 1,
                borderRadius: 15,
                padding: 10,
                width: 100,
                alignItems: "center",
              }}
              onPress={() => {
                /* handle add to cart */
              }}
            >
              <Text
                style={{
                  color: "#2A4BA0",
                  fontFamily: "ManropeRegular",
                  fontSize: 14,
                  fontWeight: "600",
                  lineHeight: 19,
                  letterSpacing: 0,
                  textAlign: "center",
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#2A4BA0",
                borderRadius: 15,
                padding: 10,
                width: 100,
                alignItems: "center",
              }}
              onPress={() => {
                /* handle buy now */
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "ManropeRegular",
                  fontSize: 14,
                  fontWeight: "600",
                  lineHeight: 19,
                  letterSpacing: 0,
                  textAlign: "center",
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-2 mb-5">
            <Text style={styles.details}>Details</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
    </Fonts>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  scrollView: {
    height: 500,
  },
  imageWrapper: {
    width: 340,
    height: 250,
    marginRight: 10,
    marginTop: 40,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  iconHeart: {
    position: "absolute",
    top: 3,
    right: 10,
  },
  title: {
    fontFamily: "ManropeRegular",
    fontSize: 50,
    fontWeight: "300",
    lineHeight: 63,
    letterSpacing: 0,
  },
  price: {
    fontFamily: "ManropeBold",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.05,
    color: "#2A4BA0",
  },
  description: {
    fontFamily: "ManropeRegular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: "#A9B4BC",
  },
  brand: {
    fontFamily: "ManropeBold",
    fontSize: 50,
    fontWeight: "800",
    lineHeight: 63,
    letterSpacing: 0,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    rowGap: 10,
  },
  rating: {
    fontFamily: "ManropeLight",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    marginLeft: 10,
  },
  discount: {
    fontFamily: "ManropeLight",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#F8F9FB",
    backgroundColor: "#2A4BA0",
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  details: {
    fontFamily: "ManropesemiBold",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    marginBottom: 10,
  },
});

export default ProductDetails;
