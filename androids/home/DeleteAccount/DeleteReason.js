import { View, Text } from "react-native";
import React from "react";
import { Platform } from "react-native";
import Color from "../../../utilities/Color";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Buttons from "../../components/Buttons";
import { useCustomFonts } from "../../../utilities/Fonts";
import { useState } from "react";
import { horizontalScale } from "../../../utilities/Metrics";
import { TextInput } from "react-native";
import AlertBottomSheet from "../../components/AlertBottomSheet";
import { Trash } from "iconsax-react-native";

const DeleteReason = ({navigation}) => {
    const [text, setText]=useState('')
    const [show, setShow]=useState(false)
    const [confirm, setConfirm]=useState(false)

    const handleSubmit = ()=>{
        setShow(!show)
        setConfirm(!confirm)
    }
    const handleConfirm = ()=>{
        navigation.replace('welcome')
    }
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 32, fontFamily: fontGotham.medium }}>
          Delete profile
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontFamily: fontGotham.regular }}>
            Can you please share with us your experience using Gearni ?
          </Text>
          <Text style={{ fontSize: 16, fontFamily: fontGotham.regular, marginTop:15, textAlign:"justify" }}>
            We are in constant improvement. We would be grateful if you
            highlight to us in details the reasons behind deleting your account.
          </Text>
          <View style={{ marginTop: 30 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 6,

      }}
    >

      <TextInput
        placeholder={"Type here..."}
        onChangeText={(e)=>setText(e)}
        value={text}
        multiline={true}
        style={{
          fontSize: 14,
          paddingLeft: 10,
          paddingRight:10,
          borderRadius:5,
          borderWidth: 1,
          fontFamily: fontGotham.book,
          width:horizontalScale(315),
          height:115,
        }}
      />
    </View>
    <Text
      style={{
        backgroundColor: "white",
        padding: 2,
        position: "absolute",
        marginTop: -12,
        marginLeft: 10,
        fontSize:12
      }}
    >
        Description
    </Text>
  </View>
        </View>
        <View style={{ marginTop: 80, alignItems:"center" }}>
          <Buttons
            handleSubmit={()=>setShow(!show)}
            title={"Continue"}
          />
        </View>
      </View>
      <AlertBottomSheet isVisible={show} pressValidBtn={handleSubmit} pressBtn={()=>setShow(!show)}  onPress={()=>setShow(!show)} title={"Delete Profile"} textbtn={"Confirm"} text={"Are you sure you want to delete this Profile?"} hide icons={<Trash size={24} color="black" />} />
      <AlertBottomSheet hidebtn isVisible={confirm} title={"Account deleted"} textbtn={"Confirm"} pressValidBtn={handleConfirm} text={"Account has been deleted succefuly"} hide  />
    </View>
  );
};

export default DeleteReason;
