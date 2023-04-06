import React from "react";
import { View, Text, Button } from "react-native";

function Mainscreen({ navigation }) {
  return (
    <View>
      <Text>main page!</Text>
      <Button
        title="Go to second page"
        onPress={() => navigation.navigate("second")}
      />
    </View>
  );
}

export default Mainscreen;