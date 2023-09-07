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
import Flow from "./android/components/Flow";
import Adminregister from "./android/auth/signup/adminRegistration/Adminregister";

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
              initialRouteName="login"
            >
              <Stack.Screen name="welcome" component={WelcomeAndroid} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
              <Stack.Screen name="otp" component={Otp} />
              <Stack.Screen name="flow" component={Flow} />
              <Stack.Screen name="adminRegistration" component={Adminregister} />
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
