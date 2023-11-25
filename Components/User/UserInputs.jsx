import React, { useState, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Fonts from "../Fonts/Fonts";

const UserInputs = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  const handlePress = () => {
    setIsFocused(false);
    inputRef.current.blur();
  };

  const ModalItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Text style={styles.modalText}>{item}</Text>
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
                <ModalItem item="All" />
                <ModalItem item="Grocery" />
                <ModalItem item="Fruits" />
                <ModalItem item="Vegetables" />
                <ModalItem item="Bakery" />
                <ModalItem item="Dairy" />
                <ModalItem item="Meat" />
                <ModalItem item="Seafood" />
                <ModalItem item="Snacks" />
                <ModalItem item="Beverages" />
                <ModalItem item="Alcohol" />
                <ModalItem item="Pet" />
                <ModalItem item="Baby" />
                <ModalItem item="Pharmacy" />
                <ModalItem item="Household" />
                <ModalItem item="Office" />
                <ModalItem item="Other" />
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
