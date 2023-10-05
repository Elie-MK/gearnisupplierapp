import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { Buildings, Car, Home, Information, Menu, People, Profile, Shop, User } from 'iconsax-react-native';
import { useCustomFonts } from '../../../utilities/Fonts';
import { moderateScale } from '../../../utilities/Metrics';
import BottomNavigation from './BottomNavigation';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Drawer.Navigator
    initialRouteName="dashboard"
    drawerContent={(props) => <DrawerContent {...props} />} 
    
    screenOptions={{
      drawerLabelStyle:{
        color:"black",
        
        marginLeft:-20, 
        fontFamily:fontGotham.regular,
        fontSize:moderateScale(14)
        
      },
      drawerContentStyle:{marginTop:60},
      drawerActiveBackgroundColor:"#FFFBF0", 
      drawerType:"slide",
      headerShown:false
    }}
    >
    <Drawer.Screen name='stack' options={{
      title:"Dashboard",
      drawerIcon:()=>(
        <Menu size={30} color="black" />
      )
    }} component={BottomNavigation}  />



  </Drawer.Navigator>
  )
}

export default DrawerNavigation