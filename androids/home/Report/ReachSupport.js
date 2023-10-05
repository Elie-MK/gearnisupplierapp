import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import Color from "../../../utilities/Color";
import { AntDesign } from "@expo/vector-icons";
import Buttons from "../../components/Buttons";
import { useCustomFonts } from "../../../utilities/Fonts";
import InputsText from "../../components/InputsText";
import { horizontalScale } from "../../../utilities/Metrics";
import { Like, Like1, Profile, Sms } from "iconsax-react-native";
import NumberNotEditable from "../../components/NumberNotEditable";
import CheckInputs from "../../components/CheckInputs";
import { useState } from "react";
import { TextInput } from "react-native";
import AlertBottomSheet from "../../components/AlertBottomSheet";

const ReachSupport = ({ navigation }) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
const handleSubmit = ()=>{
    setVisible(!visible)
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
          marginLeft: 35,
          marginTop: 20,
          justifyContent: "space-between",
          marginRight: 20,
        }}
      >
        <TouchableOpacity  onPress={() => navigation.navigate("main")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 32, fontFamily: fontGotham.medium, marginLeft:15 }}>
          Reach Support
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: fontGotham.regular, marginLeft:15 }}>
            Can you please describe the issue that you are currently facing?
          </Text>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                width: horizontalScale(315),
              }}
            >
              {/* First Name */}
              <InputsText
                padding
                placeholder={"Joe"}
                width={horizontalScale(155)}
                label={"First Name"}
                iconsLeft={<Profile color="black" />}
              />
              {/* Last Name */}
              <InputsText
                padding
                placeholder={"Smith"}
                width={horizontalScale(155)}
                label={"Last Name"}
                iconsLeft={<Profile color="black" />}
              />
            </View>
            {/* Email */}
            <InputsText
              padding
              placeholder={"Email"}
              width={horizontalScale(315)}
              label={"Email"}
              iconsLeft={<Sms color="black" />}
            />
            {/* Not Editable Input Number */}
            <NumberNotEditable />
            {/* Check Inputs */}
            <CheckInputs />

            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                }}
              >
                <TextInput
                  placeholder={"Description..."}
                  onChangeText={(e) => setText(e)}
                  value={text}
                  multiline={true}
                  style={{
                    fontSize: 14,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 5,
                    borderWidth: 1,
                    fontFamily: fontGotham.book,
                    width: horizontalScale(315),
                    height: 115,
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
                  fontSize: 12,
                }}
              >
                Order Comment
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 25, alignItems: "center" }}>
          <Buttons
            handleSubmit={handleSubmit}
            title={"Send"}
          />
        </View>
        <AlertBottomSheet
          isVisible={visible}
          textbtn={"Home"}
          hide
          hidebtn
          onPress={()=>setVisible(!visible)}
          icons={<Like1 color="black" size={25} />}
          title={"Ticket submitted"}
          text={
            "We have recieved your ticket, our support team will reach you out as soon as possible. Thank you for using our service."
          }
        />
      </View>
    </View>
  );
};

export default ReachSupport;
