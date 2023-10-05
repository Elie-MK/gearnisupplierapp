import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Requests from "../Requests/Requests";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Building, HambergerMenu, Home, Home2, Information, ReceiptSearch } from "iconsax-react-native";
import Color from "../../../utilities/Color";
import ReachSupport from "../Report/ReachSupport";
import Companyprofile from "../companyProfile/Companyprofile";
import StackNavigation from "./StackNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useCustomFonts } from "../../../utilities/Fonts";

const BottomNavigation = ({route}) => {
  const Tab = createMaterialBottomTabNavigator();
  // const Tab = createBottomTabNavigator();
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tab.Navigator
    sceneAnimationEnabled
    sceneAnimationType="opacity"
    barStyle={{backgroundColor:Color.light.themeColor}}
    inactiveColor="gray"
    shifting={true}
   
    >
     
      <Tab.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({color}) => <Home  color={color} size={30} />,
          
        }}
        component={StackNavigation}
      />
      <Tab.Screen
        name="requests"
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => <ReceiptSearch color={color} size={30} />,
        }}
        component={Requests}
      />
      <Tab.Screen
        name="companyprofile"
        options={{
          tabBarLabel: "Company",
          tabBarIcon: ({ color }) => <Building color={color} size={30} />,
          tabBarColor:"blue"
        }}
        component={Companyprofile}
      />
      <Tab.Screen
        name="report"
        options={{
          tabBarLabel: "Support",
          tabBarIcon: ({ color }) => <Information color={color} size={30} />,
        }}
        component={ReachSupport}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
