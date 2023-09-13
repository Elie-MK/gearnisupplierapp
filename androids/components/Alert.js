import { View, Text, Modal, Image } from "react-native";
import React from "react";
import Color from "../../utilities/Color";
import ReactNativeModal from "react-native-modal";
import { horizontalScale, moderateScale } from "../../utilities/Metrics";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import { useCustomFonts } from "../../utilities/Fonts";

const Alert = ({ visible, dismis, onPress, text, btnText }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ReactNativeModal
        isVisible={visible}
        backdropColor="white"
        backdropOpacity={0.6}
        onBackdropPress={dismis}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: Color.light.black,

              width: horizontalScale(250),
              padding: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ alignItems: "center" }}>
               <Image resizeMode="contain"  source={require('../../assets/phone.png') } style={{height:60, width:70}} />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: moderateScale(20),
                    fontFamily: fontGotham.bold,
                  }}
                >
                  Code sent
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: fontGotham.regular, textAlign:"center", fontSize:moderateScale(16) }}>{text}</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Button
                title={btnText}
                onPress={onPress}
                containerStyle={{ width: horizontalScale(95), borderRadius: 5 }}
                buttonStyle={{ backgroundColor: Color.light.main, fontFamily:fontGotham.regular }}
                titleStyle={{ color: Color.light.black, fontWeight: "bold", fontSize:moderateScale(15)}}
              />
            </View>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Alert;
