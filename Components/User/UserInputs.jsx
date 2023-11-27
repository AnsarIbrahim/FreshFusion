import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Fonts from "../Fonts/Fonts";

const UserInputs = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products.products);

  const handlePress = (product) => {
    setIsFocused(false);
    inputRef.current.blur();
    navigation.navigate("DetailsScreen", { product });
  };

  const ModalItem = ({ product }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(product)}>
        <Text style={styles.modalText}>{product.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Fonts>
      <View>
        <TextInput
          ref={inputRef}
          placeholder="Search Products or store"
          placeholderTextColor="#ffffff4e"
          style={styles.input}
          onFocus={() => setIsFocused(true)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={isFocused}
          onRequestClose={() => {
            setIsFocused(false);
          }}
        >
          <TouchableWithoutFeedback onPress={() => setIsFocused(false)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ScrollView>
                  {products &&
                    products.map((product) => (
                      <ModalItem key={product.id} product={product} />
                    ))}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </Fonts>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "ManropesemiBold",
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.5,
    color: "#FFFFFF",
    width: "100%",
  },
  centeredView: {
    flex: 1,
    marginTop: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default UserInputs;
