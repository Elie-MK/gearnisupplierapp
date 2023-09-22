import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Global from "../../components/Global";
import { useCustomFonts } from "../../../utilities/Fonts";
import { Notification, Menu,   User, Buildings, Car, Shop, People, LogoutCurve, Information } from "iconsax-react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../utilities/Metrics";
import { Divider } from "@rneui/base";

const Menus = ({navigation}) => {
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
        <View style={{marginTop:verticalScale(20)}}>
          {/* Dashboard */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Menu size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        {/* My Profile */}
        <TouchableOpacity onPress={()=>navigation.navigate('profile')} style={{marginTop:verticalScale(15)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <User size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>My Profile</Text>
          </View>
        </TouchableOpacity>
        {/* Company Profile */}
        <TouchableOpacity onPress={()=>navigation.navigate('companyprofile')} style={{marginTop:verticalScale(15)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Buildings size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Company Profile</Text>
          </View>
        </TouchableOpacity>
        {/* Make and Models */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:verticalScale(15)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Car size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Make and Models</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop:15, marginRight:20}}>
          <Divider color="black" width={1} />
        </View>
        <View style={{marginTop:15}}>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
        {/* Branches */}
        <TouchableOpacity onPress={()=>navigation.navigate('branches')} style={{marginTop:verticalScale(15)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Shop size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Branches</Text>
          </View>
        </TouchableOpacity>
        {/* Users */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:verticalScale(15)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <People size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Users</Text>
          </View>
        </TouchableOpacity>

        <View style={{marginTop:verticalScale(15), marginRight:20}}>
          <Divider color="black" width={1} />
        </View>
        <View style={{marginTop:verticalScale(15)}}>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>

        {/* Customer Support */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:verticalScale(15)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Information size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.medium}}>Customer Support</Text>
          </View>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:verticalScale(50)}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <LogoutCurve size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Logout</Text>
          </View>
        </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </Global>
  );
};

export default Menus;
