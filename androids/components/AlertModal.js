import { View, Text, Modal, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Color from "../../utilities/Color";
import { horizontalScale, moderateScale, verticalScale } from "../../utilities/Metrics";
import { Button } from "@rneui/base";
import { useCustomFonts } from "../../utilities/Fonts";
import { BlurView } from "expo-blur";
import { SmsTracking } from "iconsax-react-native";

const AlertModal = ({ subtext,show, visible, dismis, onPress, text, btnText, title, icons }) => {
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
      animationType="fade"
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
              padding: 24,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ alignItems: "center" }}>
                {icons}
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontFamily: fontGotham.medium,
                  }}
                >
                  {title}
                </Text>
              </View>
              <View style={{ marginTop: verticalScale(20)}}>
                <Text style={{ fontFamily: fontGotham.regular, textAlign:"center", fontSize:14 }}>{text}</Text>
                <Text style={{ fontFamily: fontGotham.regular, textAlign:"center", fontSize:14 }}>{subtext}</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginTop: verticalScale(30)}}>
              <Button
              type="outline"
                title={btnText}
                onPress={onPress}
                containerStyle={{ width: horizontalScale(116),  }}
                buttonStyle={{ backgroundColor:show?Color.light.main:null,  fontFamily:fontGotham.medium,borderColor:show?Color.light.main:'#E34B4B', borderWidth:1,borderRadius: 4 }}
                titleStyle={{ color:show?Color.light.black:'#E34B4B',  fontSize:moderateScale(14)}}
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

export default AlertModal;
