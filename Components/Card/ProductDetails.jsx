import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addToCart, addTobuy } from "../../Store/Redux/Https";
import Fonts from "../Fonts/Fonts";
import styles from "./StylesDetails";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = ({ product }) => {
  const cart = useSelector((state) => state.cart.cart);
  const isInCart = cart.some((item) => item.id === product.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
                  style={[
                    styles.imageView,
                    {
                      backgroundColor:
                        index === currentImage ? "yellow" : "gray",
                    },
                  ]}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.iconHeart}>
              <IconHeart product={product} />
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
              style={isInCart ? styles.cartBtnOuterInCart : styles.cartBtnOuter}
              onPress={() => {
                dispatch(addToCart(product));
              }}
            >
              <Text
                style={isInCart ? styles.cartBtnIncart : styles.cartBtnInner}
              >
                {isInCart ? "In Cart" : "Add to Cart"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buyBtnOuter}
              onPress={() => {
                dispatch(addTobuy(product));
                navigation.navigate("CartScreen");
              }}
            >
              <Text style={styles.buyBtnInner}>Buy Now</Text>
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

export default ProductDetails;
