import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ProductCard from "../../Components/Card/ProductCard";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

const Favourite = () => {
  const favoriteProducts = useSelector((state) => state.favorite.products);
  const loading = useSelector((state) => state.favorite.loading);

  if (loading) {
    return <Loader />;
  }
  const EmptyListComponent = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>No favorite products found.</Text>
    </View>
  );

  return (
    <View>
      <User name="Hey, Ansar" address="Coimbatore, Tamilnadu, India" hour={2} />
      <Card />
      <FlatList
        data={favoriteProducts}
        renderItem={({ item: product }) =>
          product && <ProductCard product={product} />
        }
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListEmptyComponent={<EmptyListComponent />}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyListText: {
    fontSize: 18,
    color: "#333",
  },
});
