import React from "react";
import { Text, Image, View } from "react-native";
import IconHeart from "../IconButton/IconHeart";
import IconPlus from "../IconButton/IconPlus";
import Fonts from "../Fonts/Fonts";

const UserCard = ({ product }) => {
  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <Fonts>
      <View className="bg-white50 rounded-xl justify-center w-[50%]">
        <View>
          <IconHeart />
        </View>
        <View className="flex items-center justify-center">
          <Image
            source={{ uri: product.thumbnail }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
            onError={(error) => console.log("Error loading image:", error)}
          />
        </View>
        <View className="flex flex-row items-center justify-around mt-5 mb-5 p-2">
          <View>
            <Text
              className="text-base font-semibold leading-5"
              style={{ fontFamily: "ManropesemiBold" }}
            >
              ${product.price}
            </Text>
            <Text
              className="text-sm font-normal leading-4"
              style={{
                fontFamily: "ManropeRegular",
                color: "#606D76",
              }}
            >
              {product.title}
            </Text>
          </View>
          <IconPlus
            color="#F8F9FB"
            backgroundColor="#2A4BA0"
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </Fonts>
  );
};

export default UserCard;
