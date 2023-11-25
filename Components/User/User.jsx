import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import UserInputs from "./UserInputs";
import BagIcon from "./BagIcon";
import Fonts from "../Fonts/Fonts";

const User = ({ name, address, hour }) => {
  const navigation = useNavigation();
  return (
    <Fonts>
      <View className="flex bg-blue w-full">
        <View className="flex flex-col w-full mt-10 p-4">
          <View className="flex flex-row  justify-between">
            <Text
              className="text-white"
              style={{
                fontFamily: "ManropeMedium",
                fontSize: 22,
                fontWeight: "600",
                lineHeight: 30,
                letterSpacing: 0,
              }}
            >
              {name}
            </Text>
            <BagIcon number={3} navigation={navigation} />
          </View>
          <View className="bg-indigo flex items-center flex-row p-3 rounded-full px-5 mt-9">
            <Ionicons
              name="search-outline"
              size={18}
              color="white"
              style={{
                marginRight: 10,
                paddingLeft: 10,
              }}
            />
            <UserInputs />
          </View>
          <View className="flex justify-between flex-row mt-7 -mb-2">
            <View>
              <Text
                className="text-gray50 text-xs font-extrabold leading-4 tracking-tighter"
                style={{
                  fontFamily: "ManropeLight",
                  letterSpacing: 0.2,
                }}
              >
                DELIVERY TO
              </Text>
              <Text
                className="text-white text-base font-medium leading-5 tracking-normal"
                style={{
                  fontFamily: "ManropeRegular",
                }}
              >
                {address}{" "}
                <Entypo name="chevron-small-down" size={16} color="white" />
              </Text>
            </View>
            <View>
              <Text
                className="text-gray50 text-xs font-extrabold leading-4 tracking-tighter"
                style={{
                  fontFamily: "ManropeLight",
                  letterSpacing: 0.2,
                }}
              >
                WITHIN
              </Text>
              <Text
                className="text-white text-base font-medium leading-5 tracking-normal"
                style={{
                  fontFamily: "ManropeRegular",
                }}
              >
                {hour} Hour{" "}
                <Entypo name="chevron-small-down" size={16} color="white" />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Fonts>
  );
};

export default User;
