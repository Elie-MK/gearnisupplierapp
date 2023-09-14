import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../../../utilities/Color";
import { horizontalScale, moderateScale, verticalScale } from "../../../../utilities/Metrics";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../utilities/Fonts";
import { Button, Input } from "@rneui/base";
import CountryList from "country-list-with-dial-code-and-flag";
import ModalCountry from "../../../components/ModalCountry";
import KeyboardAvoid from "../../../components/KeyboardAvoid";
import SvgUri from "react-native-svg-uri";

const Adminregister = ({ navigation }) => {
  const defaultCountryName = "Tunisia";
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  const onCountryChange = (item) => {
    setNameCountry(item.name)
    setVisibleModal(!visibleModal);
  };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  // console.log(namecountry);
  return (
    <KeyboardAvoid>
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate("register")}>
          <AntDesign name="arrowleft" size={moderateScale(30)} color={Color.light.black} />
        </Pressable>
         <View style={{marginTop:15}}>
         <Text style={{ fontSize: moderateScale(32), fontFamily: fontGotham.medium }}>
            Admin{" "}
          </Text>
          <Text style={{ fontSize: moderateScale(32), fontFamily: fontGotham.medium }}>
            Registration{" "}
          </Text>
         </View>
          <View style={{ marginTop: verticalScale(56), alignItems:"center" }}>
            <View style={{ flexDirection: "row", gap: 9, width:horizontalScale(315) }}>
              {/* First Name */}
              <View style={{}}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:5,
                    
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/frame.png")}
                  />
                  <TextInput
                    placeholder="Joe"
                    style={{
                      fontSize: moderateScale(14),
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(125),
                      paddingRight:9,
                      padding: 12,
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
                    fontSize:moderateScale(12)
                  }}
                >
                  First Name
                </Text>
              </View>
              {/* Last Name */}
              <View style={{}}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:5
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/frame.png")}
                  />
                  <TextInput
                    placeholder="Joe"
                    style={{
                      fontSize:moderateScale(12),
                      paddingLeft: 10,
                      paddingRight:9,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(125),
                      padding: 12,
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
                    fontSize:moderateScale(12)
                  }}
                >
                  Last Name
                </Text>
              </View>
            </View>
            {/* Birthday */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/calendar-search.png")}
                />
                <TextInput
                  placeholder="mm/dd/yyyy"
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}
                />
                <TouchableOpacity style={{marginLeft:horizontalScale(-60)}}>
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/close-circle.png")}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Birthday
              </Text>
            </View>
            {/* Email */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/sms.png")}
                />
                <TextInput
                  placeholder="Email"
                  style={{
                    fontSize:moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(140),
                    padding: 12,
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
                  fontSize:moderateScale(12)
                }}
              >
                Email
              </Text>
            </View>
            {/* Adress */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/location.png")}
                />
                <TextInput
                  placeholder="Adress"
                  style={{
                    fontSize:moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(140),
                    padding: 12,
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
                  fontSize:moderateScale(12)
                }}
              >
                Your Adress
              </Text>
            </View>
            {/* Country */}
            <View style={{ marginTop: 25 }}>
              <Pressable onPress={()=>setVisibleModal(!visibleModal)}
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  padding:12,
                  justifyContent: "space-between",
                  width:horizontalScale(315)
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/flag.png")}
                  />
                  <Text
                    style={{
                      fontSize:moderateScale(14),
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(140),
                    }}
                  >
                    {namecountry}
                  </Text>
                </View>
               <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              </Pressable>
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
                Country of Residence
              </Text>
            </View>

            <ModalCountry
              value={value}
              isVisible={visibleModal}
              hideModal={()=>setVisibleModal(!visibleModal)}
              setValue={(text)=>setValue(text)}
              onCountryChange={(item)=>onCountryChange(item)}
            />

            {/* Btn */}

            <View style={{ marginTop: verticalScale(30), alignItems:"center" }}>
              <Button
                onPress={() => navigation.navigate("companyRegistration")}
                title={"Continue"}
                buttonStyle={{ padding: 18, backgroundColor: Color.light.main, borderRadius:8 }}
                titleStyle={{
                  fontSize: moderateScale(16),
                  color: "black",
                  fontFamily: fontGotham.bold,
                }}
                containerStyle={{width:horizontalScale(315)}}
              />
            </View>
          </View>
      </View>
    </View>
    </KeyboardAvoid>
  );
};

export default Adminregister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height: Dimensions.get("window").height,
  },
  secondContainer: {
    marginLeft: 20,
    marginTop: verticalScale(5),
    marginRight: 20,
  },
});
