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
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../utilities/Color";
import { horizontalScale, verticalScale } from "../utilities/Metrics";
import { Button, CheckBox, Divider } from "@rneui/base";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import ReactNativeModal from "react-native-modal";
import { Flag } from "./components/ModalLanguage";
import { useCustomFonts } from "../utilities/Fonts";
import { BlurView } from "expo-blur";

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
        <View style={{marginTop:90}}>
        <View style={{alignItems:"center"}}>
          <Image 
          resizeMode="contain"
            style={{ width:horizontalScale(260), height:verticalScale(110), top: 106 }}
            source={require("../assets/GearniFull.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started !"
            buttonStyle={styles.btn}
            titleStyle={{
              color: Color.light.black,
              fontSize: 20,
              fontFamily: fontGotham.medium,
            }}
            type="outline"
            onPress={() => navigation.navigate("login")}
          />
        </View>
        <Pressable
          onPress={() => setVisible(!visible)}
       style={{alignItems:"center", marginTop: verticalScale(60),}}
        >
          <View    style={{
            flexDirection: "row",
            gap: 15,
            alignItems:"center",
            
          }}>

          <View>
            <Feather name="globe" size={30} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                fontFamily: fontGotham.medium,
              }}
            >
              {checked}
            </Text>
          </View>
          <View>
            <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
          </View>
          </View>
        </Pressable>
      </View>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        transparent={true}
        style={{ margin: 0 }}
      >
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <BlurView
            intensity={8}
            tint="dark"
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 60,
              }}
            >
              <View
                style={{
                  backgroundColor: Color.light.themeColor,
                  borderRadius: 10,
                  padding: 10,
                  width:320
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
                    style={{ padding: 3 }}
                    onPress={() => setChecked(item.language, { item })}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ padding: 6 }}>
                          <Image
                            source={{
                              uri: item.flag,
                            }}
                            height={30}
                            width={30}
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

                <View style={{ alignItems: "center", marginTop: 20, padding:10 }}>
                  <Button
                    title="confirm"
                    onPress={() => setVisible(!visible)}
                    containerStyle={{ borderRadius: 5 }}
                    buttonStyle={{
                      backgroundColor: Color.light.main,
                      padding:15,
                   
                    }}
                    titleStyle={{
                      color: Color.light.black,
                      fontFamily: fontGotham.bold,
                      fontSize:18,
                      padding:20,
                    }}
                    
                  />
                </View>
              </View>
            </View>
          </BlurView>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  secondContainer: {
    backgroundColor: Color.light.main,
    height: Dimensions.get("screen").height,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: verticalScale(360),
    alignItems:"center"
  },
  btn: {
    borderColor: Color.light.black,
    borderWidth: 2,
    width: 236,
    borderRadius :4,
    padding:20
  },
});
export default WelcomeAndroid;
