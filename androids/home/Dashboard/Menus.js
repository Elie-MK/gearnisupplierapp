import { View, Text, TouchableOpacity, ScrollView, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import Global from "../../components/Global";
import { useCustomFonts } from "../../../utilities/Fonts";
import { Notification, Menu,   User, Buildings, Car, Shop, People, LogoutCurve, Information } from "iconsax-react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../utilities/Metrics";
import { BottomSheet, Button, Divider } from "@rneui/base";
import MenuItems from "../../components/MenuItems";
import { BlurView } from "expo-blur";
import Color from "../../../utilities/Color";

const Menus = ({navigation}) => {
  const [touchable, setTouchable]=useState("dashboard")
  const [isVisible, setIsVisible]=useState(false)

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
    <Global>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight:20
        }}
      >
        <View></View>
        <View>
          <Text
            style={{
              fontFamily: fontGotham.medium,
              fontSize: 22,
            }}
          >
            Menu
          </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
          <Notification size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop:verticalScale(40)}}>
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
               <View style={{ alignItems: "center", marginTop:350 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "red",
              width: 312,
              padding: 24,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontFamily: fontGotham.medium,
                  }}
                >
                  Are you sure to log out?
                </Text>
              </View>
  
            </View>
          <View style={{alignItems:"center"}}>
          <View style={{ alignItems:"center",  marginTop: verticalScale(30), flexDirection:"row", gap:10}}>
              <Button
                title="Yes"
                onPress={handleLogout}
                containerStyle={{ width: horizontalScale(90), borderRadius: 5 }}
                buttonStyle={{ backgroundColor:"red", fontFamily:fontGotham.medium }}
                titleStyle={{ color: Color.light.themeColor, fontSize:moderateScale(14)}}
              />
              <Button
                title="No"
                onPress={()=>setIsVisible(!isVisible)}
                containerStyle={{ width: horizontalScale(90), borderRadius: 5 }}
                buttonStyle={{ backgroundColor: Color.light.main, fontFamily:fontGotham.medium }}
                titleStyle={{ color: Color.light.black, fontSize:moderateScale(14)}}
              />
            </View>
          </View>
          </View>
        </View>
            </BlurView>
          </TouchableOpacity>
        </BottomSheet>
      </View>
    </Global>
  );
};

export default Menus;
