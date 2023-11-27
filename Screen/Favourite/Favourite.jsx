import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import ProductCard from "../../Components/Card/ProductCard";
import { v4 as uuidv4 } from "uuid";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";

const Favourite = () => {
  const favoriteProducts = useSelector((state) => state.favorite.products);

  return (
    <View>
      <User name="Hey, Rahul" address="Green Way 3000, Sylhet" hour={2} />
      <Card />
      {favoriteProducts.map(
        (product) => product && <ProductCard key={uuidv4()} product={product} />
      )}
    </View>
  );
};

export default Favourite;
