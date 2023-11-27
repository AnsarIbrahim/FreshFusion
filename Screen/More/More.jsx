import { Text, View, StyleSheet } from "react-native";
import User from "../../Components/User/User";
import Card from "../../Components/Card/Card";

const More = () => {
  return (
    <View style={styles.container}>
      <User name="Hey, Ansar" address="Coimbatore, Tamilnadu, India" hour={2} />
      <Card />
      <View style={styles.textContainer}>
        <Text style={styles.text}>ComingSoon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default More;
