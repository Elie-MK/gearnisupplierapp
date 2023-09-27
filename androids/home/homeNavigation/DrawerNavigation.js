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

    <Drawer.Screen name="dashboard" options={{
      title:'Dashboard',
      drawerIcon:()=><Menu size={30} color="black"/>,
     
    }} component={Dashboard} />
  
    <Drawer.Screen name='profile' component={Profiles} options={{
      title:"My Profile",
      drawerIcon:()=><User size={30} color="black"/>,
    }} />
    <Drawer.Screen name='companyprofile' component={Companyprofile} options={{
      title:"Company Profile",
      drawerIcon:()=><Buildings size={30} color="black" />,
    }} />
    <Drawer.Screen name='makemodel' component={Companyprofile} options={{
      title:"Makes and Models",
      drawerIcon:()=><Car size={30} color="black" />,
    }} />
    <Drawer.Screen name='branches' component={Branches} options={{
      title:"Branches",
      drawerIcon:()=><Shop size={30} color="black" />,
    }} />
    <Drawer.Screen name='users' component={Branches} options={{
      title:"Users",
      drawerIcon:()=><People size={30} color="black" />,
    }} />
    <Drawer.Screen name='contact' component={Branches} options={{
      title:"Customer Support",
      drawerIcon:()=><Information size={30} color="black" />,
    }} />
    <Drawer.Screen name='addbranches' component={AddBranches} options={{
      title:"Customer Support",
      drawerIcon:()=><Information size={30} color="black" />,
    }} />
    <Drawer.Screen name='notification' component={Notifications} options={{
      title:"Customer Support",
      drawerIcon:()=><Information size={30} color="black" />,
    }} />




  </Drawer.Navigator>
  )
}

export default DrawerNavigation