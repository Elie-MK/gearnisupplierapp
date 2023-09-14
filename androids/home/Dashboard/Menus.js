import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Global from "../../components/Global";
import { useCustomFonts } from "../../../utilities/Fonts";
import { Notification, Menu,  UserMinus, User, Buildings, Car } from "iconsax-react-native";
import { moderateScale, verticalScale } from "../../../utilities/Metrics";

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
          justifyContent: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: fontGotham.medium,
              fontSize: moderateScale(22),
            }}
          >
            Menu
          </Text>
        </View>
        <TouchableOpacity>
          <Notification size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop:verticalScale(40)}}>
        <View>
          <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Section Header</Text>
        </View>
        <View style={{marginTop:20}}>
          {/* Dashboard */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Menu size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        {/* My Profile */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:15}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <User size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>My Profile</Text>
          </View>
        </TouchableOpacity>
        {/* Company Profile */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:15}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Buildings size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Company Profile</Text>
          </View>
        </TouchableOpacity>
        {/* Make and Models */}
        <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} style={{marginTop:15}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <Car size={30} color="black" />
          <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>Make and Models</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </Global>
  );
};

export default Menus;
