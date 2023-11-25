import { useFonts } from "expo-font";

const Fonts = ({ children }) => {
  const [loaded] = useFonts({
    Manrope: require("../../assets/fonts/Manrope-VariableFont_wght.ttf"),
    ManropeMedium: require("../../assets/fonts/Manrope-Medium.ttf"),
    ManropeBold: require("../../assets/fonts/Manrope-Bold.ttf"),
    ManropesemiBold: require("../../assets/fonts/Manrope-SemiBold.ttf"),
    ManropeLight: require("../../assets/fonts/Manrope-Light.ttf"),
    ManropeExtraLight: require("../../assets/fonts/Manrope-ExtraLight.ttf"),
    ManropeRegular: require("../../assets/fonts/Manrope-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return children;
};

export default Fonts;
