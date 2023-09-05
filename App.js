import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import WelcomeAndroid from "./android/WelcomeAndroid";
import WelcomeIos from "./ios/WelcomeIos";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./android/auth/signin/Login";
import Register from "./android/auth/signup/Register";
import Otp from "./android/auth/otp/Otp";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      {/* Android */}
      {Platform.OS === "android" && (
        <KeyboardAvoidingView
          behavior="margin"
          style={{ flex: 1 }}
      
        >
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="welcome"
            >
              <Stack.Screen name="welcome" component={WelcomeAndroid} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
              <Stack.Screen name="otp" component={Otp} />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      )}

      {/* IOS */}
      {Platform.OS == "ios" && (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="welcome" component={WelcomeIos} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
