import { useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";
import ProductCard from "../../Components/Card/ProductCard";
import { fetchProducts } from "../../Store/Redux/Https";
import Fonts from "../../Components/Fonts/Fonts";
import Loader from "../../Components/Loader/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products.products);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderHeader = () => (
    <View>
      <Card />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Recommended</Text>
      </View>
    </View>
  );

  const numColumns = 2;

  if (loading) {
    return <Loader />;
  }

  return (
    <Fonts>
      <View style={styles.container}>
        <User
          name="Hey, Ansar"
          address="Coimbatore, Tamilnadu, India"
          hour={2}
        />
        <FlatList
          style={styles.list}
          data={product}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={renderHeader}
          numColumns={numColumns}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </Fonts>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  textContainer: {
    marginLeft: 6,
    marginTop: 6,
  },
  text: {
    fontSize: 30,
    fontFamily: "ManropeRegular",
  },
  columnWrapper: {
    gap: 10,
    padding: 10,
  },
});

export default HomeScreen;
