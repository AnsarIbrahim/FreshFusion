import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../Store/Redux/Https";
import Fonts from "../../Components/Fonts/Fonts";
import Loader from "../../Components/Loader/Loader";

const CartScreen = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const loading = useSelector((state) => state.cart.loading);

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Fonts>
      <View className="min-h-screen">
        <View className="">
          <ScrollView className="gap-5 mt-5 p-3 h-[50%]">
            {cart.map((product, index) => (
              <View
                key={index}
                className="felx flex-row justify-between items-center p-5 bg-white50 rounded-full mb-3"
              >
                <View className="flex flex-row items-center justify-between gap-x-5">
                  <View>
                    <Image
                      source={{ uri: product.thumbnail }}
                      style={{ width: 30, height: 30, borderRadius: 8 }}
                      onError={(error) => {
                        throw new Error("Error loading image:" + error);
                      }}
                    />
                  </View>
                  <View>
                    <Text style={styles.title}>{product.brand}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                  </View>
                </View>
                {isEditMode && (
                  <View className="mr-5">
                    <TouchableOpacity
                      onPress={() => dispatch(removeFromCart(product))}
                    >
                      <MaterialIcons name="delete" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                )}
                <View className="flex flex-row items-center justify-between mr-5 gap-5">
                  <TouchableOpacity
                    onPress={() => dispatch(decreaseQuantity(product.id))}
                    style={styles.button}
                  >
                    <Text>
                      <AntDesign name="minus" size={10} color="black" />
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{product.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => dispatch(increaseQuantity(product.id))}
                    style={styles.button}
                  >
                    <Text>
                      <AntDesign name="plus" size={10} color="black" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <View className="flex flex-row justify-end p-5">
            <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
              <Text className="text-blue">Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-5 bg-white50 ml-3" style={styles.totalContainer}>
          <View className="flex justify-between flex-row p-5">
            <View className="gap-3">
              <Text style={styles.text}>Subtotal </Text>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>Total</Text>
            </View>
            <View className="gap-3">
              <Text style={styles.amount}>${total.toFixed(2)}</Text>
              <Text style={styles.amount}>
                ${(total > 0 ? 2.0 : 0).toFixed(2)}
              </Text>
              <Text style={styles.amount}>
                ${total > 0 ? (total + 2).toFixed(2) : (0).toFixed(2)}
              </Text>
            </View>
          </View>
          <View
            className="flex items-center justify-center"
            style={styles.buttonCheckout}
          >
            {total > 0 ? (
              <Text style={styles.buttonText}>Proceed To Checkout</Text>
            ) : (
              <Text style={styles.buttonText}>Your cart is empty</Text>
            )}
          </View>
        </View>
      </View>
    </Fonts>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "ManropeRegular",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
  },
  price: {
    fontFamily: "ManropeRegular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
  },
  button: {
    backgroundColor: "#c8cccea7",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "ManropeRegular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
  },
  totalContainer: {
    borderRadius: 50,
    width: "95%",
    height: "35%",
  },
  text: {
    fontFamily: "ManropeRegular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#616A7D",
  },
  amount: {
    fontFamily: "ManropeMedium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#1E222B",
  },
  buttonCheckout: {
    backgroundColor: "#2A4BA0",
    padding: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "ManropeMedium",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: 0,
  },
});
