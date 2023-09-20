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
import { horizontalScale, moderateScale, verticalScale } from "../../../utilities/Metrics";
import { Button, Divider, Input } from "@rneui/base";
import Alert from "../../components/Alert";
import CountryList from "country-list-with-dial-code-and-flag";
import { useCustomFonts } from "../../../utilities/Fonts";
import { ActivityIndicator } from "react-native-paper";

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
  const [valided, setValided] = useState(false);


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
  if(!number){
    alert("Enter your number")
  }else{
    setValided(!valided)
      setTimeout(() => {
        setVisible(!visible)
        setValided(false)
      }, 3000);
     
  }
}

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
     <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate("welcome")}>
          <AntDesign name="arrowleft" size={moderateScale(35)} color={Color.light.black} />
        </Pressable>
        <View style={{marginTop:verticalScale(15)}}>

        <View style={styles.textContainer}>
          <Text
            style={{
              color: Color.light.main,
              fontSize: moderateScale(32),
              fontFamily: fontGotham.medium,
            }}
          >
            HELLO
          </Text>
         <View style={{marginTop:15}}>
         <Text style={{ fontSize: moderateScale(20), fontFamily: fontGotham.medium }}>
            WHAT'S YOUR PHONE 
          </Text>
          <Text style={{ fontSize: moderateScale(20), fontFamily: fontGotham.medium }}>
             NUMBER?
          </Text>
         </View>
        </View>
        <View style={{alignItems:"center"}}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={()=>setVisible(!visible)} style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 14 }}>
              {namecountry}
            </Text>
            <AntDesign name="caretdown" size={14} color="black" />
            <Text style={{ fontSize: 14 }}>
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
        <View
          style={{
            position: "absolute",
            marginTop: -11,
            marginLeft: 20,
            width: 130,
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.regular}}>Your mobile Number</Text>
        </View>
        </View>
        </View>
        <View style={styles.btnContainer}>
       {
        valided? <View style={{width:315, borderWidth:1, borderRadius:4, padding:15, backgroundColor:"gray"}}>
          <ActivityIndicator animating={true} color={Color.light.main}/>
        </View> :  <Button
        title="Confirm"
        buttonStyle={{ backgroundColor: Color.light.main, height:60 }}
        titleStyle={{
          color: Color.light.black,
          fontFamily: fontGotham.medium,
          fontSize:moderateScale(15)
        }}
        containerStyle={{width:horizontalScale(315), borderRadius:4}}
        onPress={handleSubmit}
      />
       }
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginTop: verticalScale(17),
          }}
        >
          <Text style={{ fontFamily: fontGotham.regular, fontSize:moderateScale(14) }}>
            Don't have an account ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text style={{ fontSize:moderateScale(14), fontFamily: fontGotham.bold }}>
              Sign In{" "}
            </Text>
          </Pressable>
        </View>
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
    marginTop: verticalScale(56),
    borderWidth: 1,
    width:horizontalScale(315),
    padding:8,
    flexDirection: "row",
    borderRadius:8
  },
  input2: {
    borderLeftWidth: 1,
    paddingLeft: 20,
    fontSize: 14,
  },
  btnContainer: {
    marginTop:verticalScale(60),
    alignItems:"center"
  },
});

export default Register