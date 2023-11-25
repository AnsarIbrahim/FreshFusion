import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class IconHeart extends Component {
  state = {
    isFavorite: false,
  };

  handlePress = () => {
    this.setState((prevState) => ({ isFavorite: !prevState.isFavorite }));
  };

  render() {
    const { isFavorite } = this.state;

    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.container}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "red" : "black"}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
