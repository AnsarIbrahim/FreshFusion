import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import store from "./Store/store";
import Main from "./Screen/Main/Main";
import Loader from "./Components/Loader/Loader";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  if (!isReady) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      <Main />
      <StatusBar style="auto" />
    </Provider>
  );
}
