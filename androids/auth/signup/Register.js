import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Color from "../../../utilities/Color";
import { horizontalScale, verticalScale } from "../../../utilities/Metrics";
import { Button, Divider, Input } from "@rneui/base";
import Alert from "../../components/Alert";
import CountryList from "country-list-with-dial-code-and-flag";
import { useCustomFonts } from "../../../utilities/Fonts";

const Register = ({navigation, route}) => {
  const routes = route.name;
  const defaultCountryCode = "+216"
  const defaultCountryName = "🇹🇳"
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [number, setNumber] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const regex = /^\+\d{1,4}$/;
    const isValidCode = regex.test(countryCode);

    if (isValidCode === true) {
      setIsValid(isValid);
    } else {
      setIsValid(!isValid);
    }
    handleCountry(value);
  }, [value]);

  const datas = CountryList.getAll();
  const handleCountry = (value) => {
   if(value){
      const data = datas.filter((item) =>
        (item.name.indexOf(value)> - 1 || item.flag.indexOf(value)>-1))
    
      setFilteredPosts(data);
  
   }else{
    setFilteredPosts(datas)
   }
  };

  const onCountryChange = (item)=>{
    setCountryCode(item.dial_code)
    setNameCountry(item.flag)
    setVisibleModal(!visibleModal)
  }
const handleSubmit = ()=>{
  
    setVisible(!visible)

}

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
     <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate("welcome")}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
        <View style={styles.textContainer}>
          <Text
            style={{
              color: Color.light.main,
              fontSize: 30,
              fontFamily: fontGotham.medium,
            }}
          >
            HELLO
          </Text>
          <Text style={{ fontSize: 30, fontFamily: fontGotham.medium }}>
            WHAT'S YOUR PHONE NUMBER?
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={()=>setVisible(!visible)} style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 20 }}>
              {namecountry}
            </Text>
            <AntDesign name="caretdown" size={15} color="black" />
            <Text style={{ fontSize: 20 }}>
            {countryCode}

            </Text>
          </TouchableOpacity>
          <View style={{ padding: 12, width: horizontalScale(150)}}>
            <TextInput
              style={[styles.input2, { fontFamily: fontGotham.medium }]}
              onChangeText={(e) => setNumber(e)}
              value={number}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            marginTop: 245,
            padding: 2,
            marginLeft: 20,
            width: horizontalScale(140),
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text style={{textAlign:"center"}}>Your mobile Number</Text>
        </View>
       
        <View style={styles.btnContainer}>
          <Button
            title="Confim"
            buttonStyle={{ backgroundColor: Color.light.main, padding: 15 }}
            titleStyle={{
              color: Color.light.black,
              fontFamily: fontGotham.bold,
            }}
            onPress={handleSubmit}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginTop: verticalScale(20),
          }}
        >
          <Text style={{ fontFamily: fontGotham.regular }}>
             have an account ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text style={{ fontWeight: "bold", fontFamily: fontGotham.bold }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    <View>
        <Modal visible={visibleModal} animationType="slide">
          <View style={{ padding: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <Pressable onPress={() => setVisibleModal(!visibleModal)}>
                <MaterialIcons name="cancel" size={24} color="black" />
              </Pressable>
              <TextInput
                style={{
                  fontFamily: fontGotham.medium,
                  width: horizontalScale(250),
                  padding: 5,
                  paddingLeft: 15,
                  fontSize: 15,
                }}
                onChangeText={(newVal) => setValue(newVal)}
                value={value}
                maxLength={10}
                placeholder="Enter country name"
              />
            </View>
          </View>
          <View>
            <ScrollView style={{ padding: 15 }}>
              {filteredPosts.map((item, index) => (
                <TouchableOpacity key={index} onPress={()=>onCountryChange(item)}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      padding: 10,
                    }}
                  >
                    <Text >{item.flag}</Text>
                    <Text>{item.name}</Text>
                    <Text>({item.dial_code})</Text>
                  </View>
                  <Divider />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </View>
    <View>
      <Alert
         visible={visible}
         btnText={"Confirm"}
          dismis={() => setVisible(!visible)}
          text={"We sent you a verification code an SMS should arrive shortly"}
        onPress={() => navigation.navigate("otp", {routes})}
      />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height: Dimensions.get("screen").height,
  },
  secondContainer: {
    marginLeft: 20,
    marginTop: verticalScale(20),
    marginRight: 20,
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  inputContainer: {
    marginTop: 125,
    borderWidth: 1,
    flexDirection: "row",
    gap:10
  },

  input2: {
    borderLeftWidth: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
  btnContainer: {
    marginTop: verticalScale(90),
  },
});

export default Register