import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Requests from "../Requests/Requests";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Building,
  HambergerMenu,
  Home,
  Home2,
  Information,
  Menu,
  ReceiptSearch,
} from "iconsax-react-native";
import Color from "../../../utilities/Color";
import ReachSupport from "../Report/ReachSupport";
import Companyprofile from "../companyProfile/Companyprofile";
import StackNavigation from "./StackNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useCustomFonts } from "../../../utilities/Fonts";

const BottomNavigation = ({ route }) => {
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createBottomTabNavigator();

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // position: "absolute",
          borderColor: "white",
          elevation: 0,
          backgroundColor: "white",
          height:80, 
          
          paddingTop: 2,
        },
        tabBarIcon: ({ focused }) => (
          <Menu color={focused ? "rgba(56,74,93,.8)" : "#fff"} size="2em" />
        ),

        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
      }}
      sceneAnimationEnabled
      sceneAnimationType="opacity"
      barStyle={{ backgroundColor: Color.light.themeColor }}
      
    >
      <Tab.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: focused ? Color.light.secondMain : null,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  borderRadius: 22,
                  padding: 3,
                }}
              >
                <Home2 color={focused ? "black" : "gray"} size={30} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: focused ? fontGotham.medium : fontGotham.book,
                }}
              >
                Dashboard
              </Text>
            </View>
          ),
        }}
        component={StackNavigation}
      />
      <Tab.Screen
        name="requests"
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: focused ? Color.light.secondMain : null,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  borderRadius: 22,
                  padding: 3,
                }}
              >
                <ReceiptSearch color={focused ? "black" : "gray"} size={30} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: focused ? fontGotham.medium : fontGotham.book,
                  
                }}
              >
                Orders
              </Text>
            </View>
          ),
        }}
        component={Requests}
      />
      <Tab.Screen
        name="companyprofile"
        options={{
          tabBarLabel: "Company",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: focused ? Color.light.secondMain : null,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  borderRadius: 22,
                  padding: 3,
                }}
              >
                <Building color={focused ? "black" : "gray"} size={30} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: focused ? fontGotham.medium : fontGotham.book,
                }}
              >
                Company
              </Text>
            </View>
          ),
        }}
        component={Companyprofile}
      />
      <Tab.Screen
        name="report"
        options={{
          tabBarLabel: "Support",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: focused ? Color.light.secondMain : null,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  borderRadius: 22,
                  padding: 3,
                }}
              >
                <Information color={focused ? "black" : "gray"} size={30} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: focused ? fontGotham.medium : fontGotham.book,
                }}
              >
                Support
              </Text>
            </View>
          ),
        }}
        component={ReachSupport}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
