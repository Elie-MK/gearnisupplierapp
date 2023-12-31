import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Buildings, Car, Card, Home, Information, LogoutCurve, Menu, People, ReceiptSearch, ShieldTick, Shop, User } from 'iconsax-react-native'
import { useCustomFonts } from '../../../utilities/Fonts'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import MenuItems from '../../components/MenuItems'
import { BottomSheet, Button, Divider } from '@rneui/base'
import { BlurView } from 'expo-blur'
import { ScrollView } from 'react-native'
import { moderateScale, verticalScale } from '../../../utilities/Metrics'
import Color from '../../../utilities/Color'
import AlertBottomSheet from '../../components/AlertBottomSheet'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DrawerContent = (props) => {
  const [touchable, setTouchable]=useState("dashboard")
  const [isVisible, setIsVisible]=useState(false)
  const navigation = useNavigation()
  const handleNavigation = (section)=>{
    setTouchable(section)
      navigation.navigate(section)
  }
    const handleLogout = async () => {
      try {
        const access_token = await AsyncStorage.removeItem('access_token');
        if (access_token !== null) {
          console.log(`Access token deleted: ${access_token}`);
        }
        
        const refresh_token = await AsyncStorage.removeItem('refresh_token');
        if (refresh_token !== null) {
          console.log(`Refresh token deleted: ${refresh_token}`);
        }
        
        console.log("Access token and refresh token deleted");
        
        navigation.replace("welcome");
        setIsVisible(!isVisible);
      } catch (error) {
        console.error("Erreur lors de la suppression des jetons :", error);
      }
    }
  
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <DrawerContentScrollView {...props}>
     <View style={{marginTop:verticalScale(40), marginLeft:15}}>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
        <View style={{marginTop:verticalScale(10)}}>
          {/* Dashboard */}
        <MenuItems icons={<Menu size={30} color="black" />} touchable={touchable} items={"dashboard"} title={"Dashboard"} onPress={()=>handleNavigation("main")} />
        {/* My Profile */}
        <MenuItems icons={<User size={30} color="black" />} touchable={touchable} items={"profile"} title={"My Profile"} onPress={()=>handleNavigation("profile")} />
        {/* Company Profile */}
        <MenuItems icons={<Buildings size={30} color="black" />} touchable={touchable} items={"companyprofile"} title={"Company Profile"} onPress={()=>handleNavigation("companyprofile")} />
        {/* Make and Models */}
        <MenuItems icons={<Car size={30} color="black" />} touchable={touchable} items={"makemodels"} title={"Make and Models"} onPress={()=>handleNavigation("makemodels")} />
        {/* Divider */}
        <View style={{marginTop:15, marginRight:20}}>
          <Divider color="black" width={1} />
        </View>
        {/* Section Header */}
        <View style={{marginTop:15}}>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
          {/* My Order */}
          <MenuItems icons={<ReceiptSearch size={30} color="black" />} touchable={touchable} items={"requests"} title={"Orders"} onPress={()=>handleNavigation("requests")} />
        {/* Branches */}
        <MenuItems icons={<Shop size={30} color="black" />} touchable={touchable} items={"branches"} title={"Branches"} onPress={()=>handleNavigation("branches")} />
        {/* Users */}
        <MenuItems icons={<People size={30} color="black" />} touchable={touchable} items={"users"} title={"Users"} onPress={()=>handleNavigation("listusers")} />
        {/* Divider */}
        <View style={{marginTop:verticalScale(15), marginRight:20}}>
          <Divider color="black" width={1} />
        </View>
        {/* Section Header */}
        <View style={{marginTop:verticalScale(15)}}>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
        <MenuItems icons={<ShieldTick size={30} color="black" />} touchable={touchable} items={"report"} title={"Privacy and sharing"} onPress={()=>alert("In development")} />
        {/* Customer Support */}
        <MenuItems icons={<Information size={30} color="black" />} touchable={touchable} items={"report"} title={"Customer Support"} onPress={()=>handleNavigation("report")} />


        {/* Logout */}
        <TouchableOpacity onPress={()=>setIsVisible(!isVisible)} style={{marginTop:verticalScale(50)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10,marginLeft:12}}>
          <LogoutCurve size={30} color="red" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.medium, color:"red"}}>Logout</Text>
          </View>
        </TouchableOpacity>
        </View>
        </ScrollView>
        <AlertBottomSheet icons={<LogoutCurve color="black" size={30} />} isVisible={isVisible} textbtn={"Logout"} pressValidBtn={handleLogout} pressBtn={()=>setIsVisible(!isVisible)} text={"Are you sure want to log out?"} title={"Logout"} onPress={()=>setIsVisible(!isVisible)} />
      </View>
  </DrawerContentScrollView>
  )
}

export default DrawerContent

