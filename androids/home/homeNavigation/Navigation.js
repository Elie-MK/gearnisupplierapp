import { View, Text, Platform } from 'react-native'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import Menus from '../Dashboard/Menus';
import Notifications from '../Dashboard/Notifications';
import Profiles from '../Profile/Profiles';
import Companyprofile from '../companyProfile/Companyprofile';
import Branches from '../Branches/Branches';

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
        <Stack.Screen name='notification' component={Notifications} />
        <Stack.Screen name='profile' component={Profiles} />
        <Stack.Screen name='companyprofile' component={Companyprofile} />
        <Stack.Screen name='branches' component={Branches} />
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