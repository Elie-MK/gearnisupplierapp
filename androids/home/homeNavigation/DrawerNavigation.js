import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Dashboard/Dashboard';
import DrawerContent from './DrawerContent';
import Menus from '../Dashboard/Menus';
import Branches from '../Branches/Branches';
import AddBranches from '../addBranches/AddBranches';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
    initialRouteName="DashBoard"
    drawerContent={(props) => <DrawerContent {...props} />} 
    screenOptions={{
     
    }}
    >

    <Drawer.Screen name="DashBoard" component={Dashboard} />
    <Drawer.Screen name='menu' component={Menus} />
    <Drawer.Screen name='branches' component={Branches} />




  </Drawer.Navigator>
  )
}

export default DrawerNavigation