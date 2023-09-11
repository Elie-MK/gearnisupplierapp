import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../utilities/Color";
import { horizontalScale, verticalScale } from "../utilities/Metrics";
import { Button, CheckBox, Divider } from "@rneui/base";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import ReactNativeModal from "react-native-modal";
import { Flag } from "./components/ModalLanguage";
import { useCustomFonts } from "../utilities/Fonts";

const WelcomeAndroid = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState("English");

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View>
          <Image
            resizeMode="contain"
            style={{ width: horizontalScale(200), marginTop: -20 }}
            source={require("../assets/gear.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started !"
            buttonStyle={styles.btn}
            titleStyle={{
              color: Color.light.black,
              fontSize: 25,
              fontFamily: fontGotham.medium,
            }}
            type="outline"
            onPress={() => navigation.navigate("login")}
          />
        </View>
        <Pressable
          onPress={() => setVisible(!visible)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 30,
          }}
        >
          <View>
            <Feather name="globe" size={24} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: fontGotham.medium,
              }}
            >
              {checked}
            </Text>
          </View>
          <View>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
        </Pressable>
      </View>

      {/* Modal */}
      <ReactNativeModal
        isVisible={visible}
        onDismiss={() => setVisible(!visible)}
      >
        <View
          style={{
            backgroundColor: Color.light.themeColor,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Pressable onPress={() => setVisible(!visible)}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </Pressable>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: fontGotham.regular,
            }}
          >
            Select Language
          </Text>
          {Flag.map((item) => (
            <TouchableOpacity
              style={{ padding: 9 }}
              onPress={() => setChecked(item.language, { item })}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ padding: 6 }}>
                    <Image
                      source={{
                        uri: item.flag,
                      }}
                      height={50}
                      width={60}
                      style={{ borderRadius: 99 }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 20,
                      fontFamily: fontGotham.medium,
                    }}
                  >
                    {item.language}
                  </Text>
                </View>
                <View>
                  <CheckBox
                    checked={checked === item.language}
                    onPress={() => setChecked(item.language)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{
                      backgroundColor: "white",
                    }}
                    uncheckedColor={"black"}
                    checkedColor={Color.light.main}
                  />
                </View>
              </View>

              <Divider color="black" />
            </TouchableOpacity>
          ))}

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Button
              title="confirm"
              onPress={() => setVisible(!visible)}
              containerStyle={{ width: horizontalScale(95), borderRadius: 5 }}
              buttonStyle={{ backgroundColor: Color.light.main }}
              titleStyle={{
                color: Color.light.black,
                fontFamily: fontGotham.bold,
              }}
            />
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  secondContainer: {
    backgroundColor: Color.light.main,
    height: Dimensions.get("screen").height,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: verticalScale(200),
    width: horizontalScale(200),
  },
  btn: {
    borderColor: Color.light.black,
    borderWidth: 2,
  },
});
export default WelcomeAndroid;
