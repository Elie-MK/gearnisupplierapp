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
import NavigationPage from "./androids/auth/signup/pages/NavigationPage";
import BottomNavigation from "./androids/home/homeNavigation/BottomNavigation";
import DrawerNavigation from "./androids/home/homeNavigation/DrawerNavigation";
import Profiles from "./androids/home/Profile/Profiles";
import Adminregister from "./androids/auth/signup/pages/adminRegistration/Adminregister";
import Registercompany from "./androids/auth/signup/pages/companyRegister/Registercompany";
import Completeregistration from "./androids/auth/signup/pages/registrationcomplete/Completeregistration";
import ReachSupport from "./androids/home/Report/ReachSupport";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { privateKeys } from "./utilities/privateKeys";
import Axios from "axios";

export default function App() {
  const Stack = createStackNavigator();
  // const [tokenData, setTokenData] = useState(false);

  // const refreshAccessToken = async () => {
  //   try {
  //     const result = await AsyncStorage.getItem("access_token");
  //     if (result) {
  //       const refreshToken = await AsyncStorage.getItem("refresh_token");
  //       const Data = {
  //         grant_type: "refresh_token",
  //         client_id: privateKeys.CLIENT_ID,
  //         client_secret: privateKeys.CLIENT_SECRET,
  //         refresh_token: refreshToken,
  //       };
  //       const response = await Axios.post(privateKeys.REFRESH_TOKEN_URL, Data);
  //       if (response.status === 200) {
  //         const dataToStore = {
  //           value: response.data,
  //           expirationTime: new Date().getTime() + 24 * 60 * 60 * 1000,
  //         };
  //         console.log(response.data);
  //         await AsyncStorage.setItem(
  //           "access_token",
  //           JSON.stringify(dataToStore)
  //         ).then(() => console.log("Data Save Succefully"));
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Erreur de refresh ", error);
  //   }
  // };

  // const checkAndRefreshToken = async () => {
  //   try {
  //     const result = await AsyncStorage.getItem("access_token");
  //     if (result) {
  //       const storedData = JSON.parse(result);
  //       // Vérifiez si la donnée est encore valide
  //       if (storedData && new Date().getTime() < storedData.expirationTime) {
  //         console.log("Donnée valide", storedData );
  //       } else {
  //         console.log("Donnée refresh" );
  //         await refreshAccessToken();
  //       }
  //       setTokenData(false)
  //     } else {
  //       console.log("La donnée n'existe pas.");
  //       setTokenData(false);
  //     }
  //   } catch (error) {
  //     console.log("Erreur lors de la récupération de la donnée :", error);
  //     setTokenData(false);
  //   }
  // };
  // useEffect(() => {
  //   checkAndRefreshToken();
  //   const refreshInterval = 24 * 60 * 60 * 1000; // 24 heures
  //   const refreshTimer = setInterval(checkAndRefreshToken, refreshInterval);

  //   return () => {
  //     clearInterval(refreshTimer);
  //   };
  // }, []);

  return (
    <>
      {/* Android */}
      {Platform.OS === "android" && (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"welcome"}
          >
            <Stack.Screen name="welcome" component={WelcomeAndroid} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="otp" component={Otp} />
            <Stack.Screen name="flow" component={Flow} />
            <Stack.Screen name="contact" component={ReachSupport} />
            <Stack.Screen name="adminRegistration" component={Adminregister} />
            <Stack.Screen
              name="companyRegistration"
              component={Registercompany}
            />
            <Stack.Screen
              name="registrationComplete"
              component={Completeregistration}
            />
            <Stack.Screen name="drawer" component={DrawerNavigation} />
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
