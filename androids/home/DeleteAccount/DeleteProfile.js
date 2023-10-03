import { View, Text } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import Color from "../../../utilities/Color";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useCustomFonts } from "../../../utilities/Fonts";
import ItemsChoose from "./ItemsChoose";
import Buttons from "../../components/Buttons";

const DeleteProfile = ({ navigation }) => {
  const [check, setCheck] = useState("");

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: Color.light.themeColor,
        height: Dimensions.get("screen").height,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 20,
          justifyContent: "space-between",
          marginRight: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("main")}>
        <AntDesign name="arrowleft" size={24} color="black" />        
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 32, fontFamily: fontGotham.medium }}>
          Delete profile
        </Text>
        <View style={{marginTop:20}}>
          <Text style={{fontSize:16, fontFamily:fontGotham.regular}}>
            Help us improve our services by expressing the reason behind
            deleting your account
          </Text>
          <View style={{marginTop:35}}>
            <ItemsChoose check={check  === "Something was broken"?check:null} title={"Something was broken"} se onPress={()=>setCheck('Something was broken')} />
            <ItemsChoose check={check=== "I don\'t need this service anymore"?check:null} title={"I don't need this service anymore"} onPress={()=>setCheck('I don\'t need this service anymore')} />
            <ItemsChoose check={check=== "I have privacy concern"?check:null} title={"I have privacy concern"} onPress={()=>setCheck('I have privacy concern')} />
            <ItemsChoose check={check=== "other"?check:null} title={"other"} onPress={()=>setCheck('other')} />
          </View>
        </View>
        <View style={{marginTop:80,alignItems:"center"}}>
          <Buttons handleSubmit={()=>navigation.navigate("deletereasons")} title={"Continue"} />
        </View>
      </View>
    </View>
  );
};

export default DeleteProfile;
