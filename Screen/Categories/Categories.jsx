import { useSelector } from "react-redux";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

const Categories = () => {
  const products = useSelector((state) => state.products.products.products);
  const loading = useSelector((state) => state.products.loading);

  let uniqueCategories = [];
  if (products) {
    uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
  }

  if (loading) {
    return <Loader />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <User
              name="Hey, Ansar"
              address="Coimbatore, Tamilnadu, India"
              hour={2}
            />
            <Card />
          </>
        }
        data={uniqueCategories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
