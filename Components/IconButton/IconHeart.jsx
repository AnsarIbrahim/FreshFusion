import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../Store/Redux/Https";

const IconHeart = ({ product }) => {
  const favoriteProducts = useSelector((state) => state.favorite.products);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const isProductFavorite = favoriteProducts.some(
      (favoriteProduct) => favoriteProduct.id === product.id
    );
    setIsFavorite(isProductFavorite);
  }, [favoriteProducts, product]);

  const handlePress = () => {
    if (isFavorite) {
      dispatch(remove(product));
    } else {
      dispatch(add(product));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color={isFavorite ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default IconHeart;
