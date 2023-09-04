import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import WelcomeAndroid from "./android/WelcomeAndroid";
import WelcomeIos from "./ios/WelcomeIos";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
    {/* Android */}
      {Platform.OS == "android" && (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="welcome" component={WelcomeAndroid} />
          </Stack.Navigator>
        </NavigationContainer>
      )}


      {/* IOS */}
      {Platform.OS == "ios" && (
        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen name="welcome" component={WelcomeIos} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
