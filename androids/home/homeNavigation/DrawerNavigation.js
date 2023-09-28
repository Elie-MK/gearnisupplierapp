import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Dashboard/Dashboard';
import DrawerContent from './DrawerContent';
import Menus from '../Dashboard/Menus';
import Branches from '../Branches/Branches';
import { Buildings, Car, Home, Information, Menu, People, Shop, User } from 'iconsax-react-native';
import Profiles from '../Profile/Profiles';
import Companyprofile from '../companyProfile/Companyprofile';
import { useCustomFonts } from '../../../utilities/Fonts';
import Notifications from '../Dashboard/Notifications';
import AddBranches from '../Branches/addBranches/AddBranches';
import EditBranch from '../Branches/EditBranch/EditBranch';
import UserList from '../Users/UserList';
import CreateUser from '../Users/CreateUser';

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
        fontFamily:fontGotham.regular
      },
      drawerContentStyle:{marginTop:60},
      drawerActiveBackgroundColor:"#FFFBF0", 
      drawerType:"slide",
      headerShown:false
    }}
    >

    <Drawer.Screen name='dashboard' component={Dashboard}  />
    <Drawer.Screen name='notification' component={Notifications}  />

  </Drawer.Navigator>
  )
}

export default DrawerNavigation