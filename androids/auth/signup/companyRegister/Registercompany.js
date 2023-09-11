import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Pressable,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Color from "../../../../utilities/Color";
import { Platform } from "react-native";
import { horizontalScale, verticalScale } from "../../../../utilities/Metrics";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../utilities/Fonts";
import ModalCountry from "../../../components/ModalCountry";

const Registercompany = ({navigation}) => {
  const defaultCountryName = "Tunisia";
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);


  const onCountryChange = (item) => {
    setNameCountry(item.name);
    setModal(!modal)
  };


  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
        <View style={{ marginTop: 20 }}>
          <View>
          <Text style={{ fontSize: 25, fontFamily: fontGotham.medium }}>
            Company{" "}
          </Text>
          <Text style={{ fontSize: 25, fontFamily: fontGotham.medium }}>
            Registration{" "}
          </Text>
          </View>
<ScrollView style={{}}>

          <View>
            {/* Comany Name */}
            <View style={{ marginTop: 35 }}>
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
                  source={require("../../../../assets/icons/shop-add.png")}
                />
                <TextInput
                  placeholder="Top Gear"
                  style={{
                    fontSize: 20,
                    paddingLeft: 10,
                    width: 339,
                    fontFamily: fontGotham.regular,
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
                Company Name
              </Text>
            </View>
            {/* Company Phone Number */}
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
                    width: 339,
                    fontFamily: fontGotham.regular,
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
                Comany Phone Number
              </Text>
            </View>
            {/* Comapny Registration Number */}
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
                  source={require("../../../../assets/icons/hashtag.png")}
                />
                <TextInput
                  placeholder="12345/M/A/E/001"
                  style={{
                    fontSize: 20,
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: 339,
                    padding: 12,
                  }}
                />
              </View>
              <Text>Supporting text</Text>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                }}
              >
                Company Registration Number
              </Text>
            </View>
            {/* Company Location */}
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
                  placeholder="Location"
                  style={{
                    fontSize: 20,
                    paddingLeft: 10,
                    width: 339,
                    fontFamily: fontGotham.regular,
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
                Company Location
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
                      width: 339,
                      fontFamily: fontGotham.regular,
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
                Country 
              </Text>
            </View>
            {/* Billing Adress */}
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
                  placeholder="Location"
                  style={{
                    fontSize: 20,
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: 339,
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
                Billing Adress
              </Text>
            </View>
          </View>
</ScrollView>
        </View>
      </View>
      <ModalCountry
              value={value}
              isVisible={visibleModal}
              hideModal={()=>setVisibleModal(!visibleModal)}
              setValue={(text)=>setValue(text)}
              onCountryChange={(item)=>onCountryChange(item)}
            />
    </View>
  );
};

export default Registercompany;

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
