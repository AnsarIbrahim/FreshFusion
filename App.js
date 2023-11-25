import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import store from "./Store/store";
import Main from "./Screen/Main/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <StatusBar style="auto" />
    </Provider>
  );
}
