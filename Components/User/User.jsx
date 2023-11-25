import { Text, TextInput, View } from "react-native";

const User = ({ name, address, hour }) => {
  return (
    <View>
      <Text>{name}</Text>
      <TextInput placeholder="Search Products or store" />
      <View>
        <View>
          <Text>DELIVERY TO</Text>
          <Text>{address}</Text>
        </View>
        <View>
          <Text>WITHIN</Text>
          <Text>{hour} hour</Text>
        </View>
      </View>
    </View>
  );
};

export default User;
