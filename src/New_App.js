import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Mainscreen from "./main";
import Secondscreen from "./second";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="main">
            <Stack.Screen name="main" component={Mainscreen} />
            <Stack.Screen name="second" component={Secondscreen} />
          </Stack.Navigator>
        </NavigationContainer>
     );
};

export default App;

