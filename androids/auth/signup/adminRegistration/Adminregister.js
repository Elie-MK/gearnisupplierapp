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
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../../../utilities/Color";
import { horizontalScale, verticalScale } from "../../../../utilities/Metrics";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../utilities/Fonts";
import { Button, Input } from "@rneui/base";
import CountryList from "country-list-with-dial-code-and-flag";
import ModalCountry from "../../../components/ModalCountry";

const Adminregister = ({ navigation }) => {
  const defaultCountryName = "Tunisia"
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
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate("register")}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, fontFamily: fontGotham.medium }}>
            Admin{" "}
          </Text>
          <Text style={{ fontSize: 25, fontFamily: fontGotham.medium }}>
            Registration{" "}
          </Text>
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", gap: 9 }}>
              {/* First Name */}
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/frame.png")}
                  />
                  <TextInput
                    placeholder="Joe"
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(136),
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
                  }}
                >
                  First Name
                </Text>
              </View>
              {/* Last Name */}
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/frame.png")}
                  />
                  <TextInput
                    placeholder="Joe"
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(136),
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
                  }}
                >
                  Last Name
                </Text>
              </View>
            </View>
            {/* Birthday */}
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/calendar-search.png")}
                />
                <TextInput
                  placeholder="mm/dd/yyyy"
                  style={{
                    fontSize: 20,
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(280),
                    padding: 12,
                  }}
                />
                <TouchableOpacity>
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
                }}
              >
                Birthday
              </Text>
            </View>
            {/* Email */}
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/sms.png")}
                />
                <TextInput
                  placeholder="Email"
                  style={{
                    fontSize: 20,
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
                }}
              >
                Email
              </Text>
            </View>
            {/* Adress */}
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/icons/location.png")}
                />
                <TextInput
                  placeholder="Adress"
                  style={{
                    fontSize: 20,
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
                }}
              >
                Your Adress
              </Text>
            </View>
            {/* Country */}
            <View style={{ marginTop: 15 }}>
              <Pressable onPress={()=>setVisibleModal(!visibleModal)}
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../../../assets/icons/flag.png")}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(140),
                      padding: 12,
                    }}
                  >
                    {namecountry}
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                  style={{ marginRight: 5 }}
                />
              </Pressable>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
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

            <View style={{ marginTop: 25 }}>
              <Button
                onPress={() => navigation.navigate("companyRegistration")}
                title={"Continue"}
                buttonStyle={{ padding: 18, backgroundColor: Color.light.main }}
                titleStyle={{
                  fontSize: 20,
                  color: "black",
                  fontFamily: fontGotham.bold,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Adminregister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height: Dimensions.get("screen").height,
  },
  secondContainer: {
    marginLeft: 20,
    marginTop: verticalScale(20),
    marginRight: 20,
  },
});
