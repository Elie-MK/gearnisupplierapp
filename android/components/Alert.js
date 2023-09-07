import { View, Text, Modal } from "react-native";
import React from "react";
import Color from "../../utilities/Color";
import ReactNativeModal from "react-native-modal";
import { horizontalScale } from "../../utilities/Metrics";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import { useCustomFonts } from "../../utilities/Fonts";

const Alert = ({ visible, dismis, onPress, text }) => {
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
              borderColor: Color.light.main,

              width: horizontalScale(250),
              padding: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="cellphone-message"
                  size={40}
                  color="black"
                />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontFamily: fontGotham.bold,
                  }}
                >
                  Code sent
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: fontGotham.regular, textAlign:"center" }}>{text}</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Button
                title="confirm"
                onPress={onPress}
                containerStyle={{ width: horizontalScale(95), borderRadius: 5 }}
                buttonStyle={{ backgroundColor: Color.light.main, fontFamily:fontGotham.regular }}
                titleStyle={{ color: Color.light.black, fontWeight: "bold" }}
              />
            </View>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Alert;
