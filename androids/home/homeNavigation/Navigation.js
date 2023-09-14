import { View, Text, Platform } from 'react-native'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menus from '../Dashboard/Menus';

const Navigation = () => {
    const Stack = createStackNavigator();

  return (
    <>
   {/* Android */}
   {Platform.OS === "android" && (
     
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="dashboard"
      >
        <Stack.Screen name='dashboard' component={Dashboard} />
        <Stack.Screen name='menu' component={Menus} />
      </Stack.Navigator>
)}

{/* IOS */}
{Platform.OS == "ios" && (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={WelcomeIos} />
    </Stack.Navigator>
)}
</>
  )
}

export default Navigation