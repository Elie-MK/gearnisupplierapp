import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import WelcomeIos from "./ios/WelcomeIos";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeAndroid from "./androids/WelcomeAndroid";
import Login from "./androids/auth/signin/Login";
import Register from "./androids/auth/signup/Register";
import Otp from "./androids/auth/otp/Otp";
import Flow from "./androids/components/Flow";
import Adminregister from "./androids/auth/signup/adminRegistration/Adminregister";
import Registercompany from "./androids/auth/signup/companyRegister/Registercompany";
import Completeregistration from "./androids/auth/signup/registrationcomplete/Completeregistration";


export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      {/* Android */}
      {Platform.OS === "android" && (
     
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="companyRegistration"
            >
              <Stack.Screen name="welcome" component={WelcomeAndroid} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
              <Stack.Screen name="otp" component={Otp} />
              <Stack.Screen name="flow" component={Flow} />
              <Stack.Screen name="adminRegistration" component={Adminregister} />
              <Stack.Screen name="companyRegistration" component={Registercompany} />
              <Stack.Screen name="registrationComplete" component={Completeregistration} />
            </Stack.Navigator>
          </NavigationContainer>
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
