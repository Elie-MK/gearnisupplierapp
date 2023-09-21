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
import ModalCountry from "../../../components/ModalCountry";
import KeyboardAvoid from "../../../components/KeyboardAvoid";
import {User, CalendarSearch, CloseCircle, Sms, Location, Flag} from 'iconsax-react-native';
import InputsText from "../../../components/InputsText";
import InputCountries from "../../../components/InputCountries";
import Buttons from "../../../components/Buttons";


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
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
         <View style={{marginTop:15}}>
         <Text style={{ fontSize: 32, fontFamily: fontGotham.medium }}>
            Admin{" "}
          </Text>
          <Text style={{ fontSize: 32, fontFamily: fontGotham.medium }}>
            Registration{" "}
          </Text>
         </View>
          <View style={{ marginTop: verticalScale(56), alignItems:"center" }}>
            <View style={{ flexDirection: "row", gap: 10, width:horizontalScale(315) }}>
              {/* First Name */}
             <InputsText placeholder={"Joe"} width={horizontalScale(155)} label={"First Name"} iconsLeft={<User color="black" />} />
              {/* Last Name */}
             <InputsText placeholder={"Smith"} width={horizontalScale(155)} label={"Last Name"} iconsLeft={<User color="black" />} />
             </View>
            {/* Birthday */}
            <InputsText width={horizontalScale(315)} label={"Birthday"} iconsRight={<CloseCircle color="black" />}  iconsLeft={<CalendarSearch color="black" />} />
            {/* Email */}
           <InputsText width={horizontalScale(315)} iconsLeft={<Sms color="black" />} label={"Email"} placeholder={"Email"} />
            {/* Adress */}
           <InputsText width={horizontalScale(315)} iconsLeft={<Location color="black" />} placeholder={"Adress"} label={"Your Adress"} />
            {/* Country */}
            <InputCountries label={"Country Of Residence"} country={namecountry} press={(item)=>onCountryChange(item)} />

            <ModalCountry
              value={value}
              isVisible={visibleModal}
              hideModal={()=>setVisibleModal(!visibleModal)}
              setValue={(text)=>setValue(text)}
              onCountryChange={(item)=>onCountryChange(item)}
            />

            {/* Btn */}
            <View style={{ marginTop: verticalScale(30), alignItems:"center" }}>
              <Buttons title={"Continue"} handleSubmit={()=>navigation.navigate("companyRegistration")} />
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
