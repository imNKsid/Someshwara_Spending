import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard, Login, SpendingLimit } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      >
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
