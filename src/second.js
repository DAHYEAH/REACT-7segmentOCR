import React from "react";
import { View, Text, Button } from "react-native";

function Secondscreen({ navigation }) {
  return (
    <View>
      <Text>second page!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Secondscreen;