import { useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";
import ProductCard from "../../Components/Card/ProductCard";
import { fetchProducts } from "../../Store/Redux/Https";
import Fonts from "../../Components/Fonts/Fonts";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products.products);

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

  return (
    <Fonts>
      <View style={styles.container}>
        <User name="Hey, Rahul" address="Green Way 3000, Sylhet" hour={2} />
        <FlatList
          style={styles.list}
          data={product}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={renderHeader}
          numColumns={numColumns}
          columnWrapperStyle={styles.columnWrapper}
          key={numColumns}
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
    flex: 1,
    gap: 10,
    padding: 10,
  },
});

export default HomeScreen;
