import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Buildings, Car, Home, Information, LogoutCurve, Menu, People, Shop, User } from 'iconsax-react-native'
import { useCustomFonts } from '../../../utilities/Fonts'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import MenuItems from '../../components/MenuItems'
import { BottomSheet, Button, Divider } from '@rneui/base'
import { BlurView } from 'expo-blur'
import { ScrollView } from 'react-native'
import { moderateScale, verticalScale } from '../../../utilities/Metrics'
import Color from '../../../utilities/Color'

const DrawerContent = (props) => {
  const [touchable, setTouchable]=useState("dashboard")
  const [isVisible, setIsVisible]=useState(false)
  const navigation = useNavigation()
  const handleNavigation = (section)=>{
    setTouchable(section)
      navigation.navigate(section)
  }
  const handleLogout = ()=>{
    navigation.replace("welcome")
    setIsVisible(!isVisible)
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
        <MenuItems icons={<Menu size={30} color="black" />} touchable={touchable} items={"dashboard"} title={"Dashboard"} onPress={()=>handleNavigation("dashboard")} />
        {/* My Profile */}
        <MenuItems icons={<User size={30} color="black" />} touchable={touchable} items={"profile"} title={"My Profile"} onPress={()=>handleNavigation("profile")} />
        {/* Company Profile */}
        <MenuItems icons={<Buildings size={30} color="black" />} touchable={touchable} items={"companyprofile"} title={"Company Profile"} onPress={()=>handleNavigation("companyprofile")} />
        {/* Make and Models */}
        <MenuItems icons={<Car size={30} color="black" />} touchable={touchable} items={"makemodel"} title={"Make and Models"} onPress={()=>handleNavigation("makemodel")} />
        {/* Divider */}
        <View style={{marginTop:15, marginRight:20}}>
          <Divider color="black" width={1} />
        </View>
        {/* Section Header */}
        <View style={{marginTop:15}}>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
        {/* Branches */}
        <MenuItems icons={<Shop size={30} color="black" />} touchable={touchable} items={"branches"} title={"Branches"} onPress={()=>handleNavigation("branches")} />
        {/* Users */}
        <MenuItems icons={<People size={30} color="black" />} touchable={touchable} items={"users"} title={"Users"} onPress={()=>handleNavigation("users")} />
        {/* Divider */}
        <View style={{marginTop:verticalScale(15), marginRight:20}}>
          <Divider color="black" width={1} />
        </View>
        {/* Section Header */}
        <View style={{marginTop:verticalScale(15)}}>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
        {/* Customer Support */}
        <MenuItems icons={<Information size={30} color="black" />} touchable={touchable} items={"contact"} title={"Customer Support"} onPress={()=>handleNavigation("contact")} />


        {/* Logout */}
        <TouchableOpacity onPress={()=>setIsVisible(!isVisible)} style={{marginTop:verticalScale(50)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10,marginLeft:12}}>
          <LogoutCurve size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Logout</Text>
          </View>
        </TouchableOpacity>
        </View>
        </ScrollView>
        <BottomSheet isVisible={isVisible} >
          <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
            <BlurView  intensity={8}
            tint="dark"
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}>
               <View style={{ alignItems: "center", marginTop:200 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "black",
              width: 312,
              height:260,
            }}
          >
            <View style={{ alignItems: "center", marginTop:30 }}>
              <View style={{ alignItems: "center" }}>
                <LogoutCurve color="black" size={30} />
                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontFamily: fontGotham.medium,
                  }}>Logout</Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontFamily: fontGotham.book,
                  }}
                >
                  Are you sure want to log out?
                </Text>
              </View>
  
            </View>
          <View style={{alignItems:"center"}}>
          <View style={{ alignItems:"center",  marginTop: verticalScale(30), flexDirection:"row", gap:10}}>
              <Button
                title="Logout"
                onPress={handleLogout}
                containerStyle={{ width:116, borderRadius: 4 }}
                buttonStyle={{  backgroundColor: Color.light.main, fontFamily:fontGotham.medium }}
                titleStyle={{ color: Color.light.black, fontSize:14}}
              />
              <Button
              type="outline"
                title="Cancel"
                onPress={()=>setIsVisible(!isVisible)}
                containerStyle={{ width: 116,  }}
                buttonStyle={{ borderColor:"red", fontFamily:fontGotham.medium,borderRadius: 4 }}
                titleStyle={{ color: "red", fontSize:14, }}
              />
            </View>
          </View>
          </View>
        </View>
            </BlurView>
          </TouchableOpacity>
        </BottomSheet>
      </View>
  </DrawerContentScrollView>
  )
}

export default DrawerContent

