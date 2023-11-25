import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Fonts from "../Fonts/Fonts";
import myImage from "../../assets/Images/Group.png";

const Card = () => {
  const data = [
    { id: 1, color: "orange" },
    { id: 2, color: "#80808049" },
    { id: 3, color: "#80808049" },
  ];

  const CardItem = ({ item }) => (
    <View style={{ marginLeft: 20, marginTop: 30, borderRadius: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: item.color,
          borderRadius: 20,
          padding: 24,
          width: 280,
        }}
      >
        <View>
          <Image source={myImage} />
        </View>
        <View>
          <Text style={styles.text1}>Get</Text>
          <Text style={styles.text2}>50% OFF</Text>
          <Text style={styles.text3}>On first 03 order</Text>
        </View>
      </View>
    </View>
  );

  return (
    <Fonts>
      <FlatList
        horizontal
        data={data}
        renderItem={CardItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </Fonts>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontFamily: "Manrope",
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 27,
    letterSpacing: 0,
    color: "white",
  },
  text2: {
    fontFamily: "Manrope",
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "left",
    color: "white",
  },
  text3: {
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "white",
  },
});

export default Card;
