import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Adminregister from './adminRegistration/Adminregister';
import Registercompany from './companyRegister/Registercompany';
import Completeregistration from './registrationcomplete/Completeregistration';

const NavigationPage = () => {
    const Stack = createStackNavigator();

  return (
    <>
     {Platform.OS === "android" && (
     
       <Stack.Navigator
         screenOptions={{
           headerShown: false,
         }}
         initialRouteName="adminRegistration"
       >
         <Stack.Screen name="adminRegistration" component={Adminregister} />
         <Stack.Screen name="companyRegistration" component={Registercompany} />
         <Stack.Screen name="registrationComplete" component={Completeregistration} />
       </Stack.Navigator>
 )}
    </>
  )
}

export default NavigationPage