import { View, Text, Modal, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Color from "../../utilities/Color";
import ReactNativeModal from "react-native-modal";
import { horizontalScale, moderateScale, verticalScale } from "../../utilities/Metrics";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import { useCustomFonts } from "../../utilities/Fonts";
import { BlurView } from "expo-blur";

const Alert = ({ visible, dismis, onPress, text, btnText }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Modal
      visible={visible}
      onDismiss={dismis}
      onRequestClose={dismis}
      >
      <TouchableWithoutFeedback onPress={dismis}>
            <BlurView
            intensity={8}
            tint="dark"
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}
          >
        <View style={{ alignItems: "center", marginTop:75 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 14,
              borderWidth: 1,
              borderColor: Color.light.black,
              width: 312,
              padding: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ alignItems: "center" }}>
               <Image resizeMode="contain"  source={require('../../assets/phone.png') } style={{height:60, width:70}} />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: moderateScale(16),
                    fontFamily: fontGotham.bold,
                  }}
                >
                  Code sent
                </Text>
              </View>
              <View style={{ marginTop: verticalScale(20)}}>
                <Text style={{ fontFamily: fontGotham.regular, textAlign:"center", fontSize:moderateScale(14) }}>{text}</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginTop: verticalScale(20)}}>
              <Button
                title={btnText}
                onPress={onPress}
                containerStyle={{ width: horizontalScale(116), borderRadius: 5 }}
                buttonStyle={{ backgroundColor: Color.light.main, fontFamily:fontGotham.medium }}
                titleStyle={{ color: Color.light.black, fontSize:moderateScale(14)}}
              />
            </View>
          </View>
        </View>
        </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default Alert;
