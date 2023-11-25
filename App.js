import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Main from "./Screen/Main/Main";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}
