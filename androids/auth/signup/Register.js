import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Color from "../../../utilities/Color";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utilities/Metrics";
import CountryList from "country-list-with-dial-code-and-flag";
import { useCustomFonts } from "../../../utilities/Fonts";
import ModalCountry from "../../components/ModalCountry";
import ActivityIndicators from "../../components/ActivityIndicator";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import AlertModal from "../../components/AlertModal";
import { SmsTracking } from "iconsax-react-native";
import Axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET, SEND_CODE_URL } from "@env";
import { privateKeys } from "../../../utilities/privateKeys";

const Register = ({ navigation, route }) => {
  const routes = route.name;
  const defaultCountryCode = "+216";
  const defaultCountryName = "🇹🇳";
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [visible, setVisible]=useState(false)

  const [number, setNumber] = useState("")
  const [visibled, setVisibled] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [valided, setValided] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const apiUrl = privateKeys.SEND_CODE_URL;
  const Numbers = countryCode + number;
  const requestData = {
    client_id: privateKeys.CLIENT_ID,
    client_secret: privateKeys.CLIENT_SECRET,
    connection: "sms",
    phone_number: Numbers,
    send: "code",
    authParams: {
      state: "Testing",
    },
  };

  useEffect(() => {
    handleCountry(value);
    if(number.length>=1){
      setIsError(false)
    }
  }, [value, number])
  useEffect(()=>{
    setErrorStatus(false)
  },[valided])

  const datas = CountryList.getAll()
  const handleCountry = (value) => {
    if (value) {
      const data = datas.filter(
        (item) => item.name.indexOf(value) > -1 || item.flag.indexOf(value) > -1
      );
      setFilteredPosts(data);
    } else {
      setFilteredPosts(datas);
    }
  };

  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    setNameCountry(item.flag);
    setVisibleModal(!visibleModal);
  };

const handleActive = ()=>{
  if(!number || number.length < 8){
    setIsError(true) 
  }else{
    setValided(!valided);
    setTimeout(() => {
      setVisibled(!visibled);
      setValided(false);
    }, 1000);
  }
}
  const handleSubmit = async () => {
    if (!number) {
      setIsError(true) 
    } else if (number.length < 8) {
      setIsError(true) 
    } else {
      try {
        setValided(!valided);
        setTimeout(() => {
          setVisibled(!visibled);
          setValided(false);
        }, 1000);
        const response = await Axios.post(apiUrl, requestData);
        if (response.status === 200) {
          navigation.replace("otp", { routes, Numbers  })
        }
        console.log("Server Response :", response.data);
      } catch (error) {
        if(error.message === "Network Error" ){
          setErrorStatus(true)
        }
        setVisibled(false);
        console.error("Erreur lors de la requête :", error)
        
      }
    }
  };
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.secondContainer}>
          <Pressable onPress={() => navigation.navigate("welcome")}>
            <AntDesign
              name="arrowleft"
              size={moderateScale(35)}
              color={Color.light.black}
            />
          </Pressable>
          <View style={{ marginTop: verticalScale(15) }}>
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
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: moderateScale(20),
                    fontFamily: fontGotham.medium,
                  }}
                >
                  WHAT'S YOUR PHONE
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(20),
                    fontFamily: fontGotham.medium,
                  }}
                >
                  NUMBER?
                </Text>
              </View>
            </View>
            <View
              style={{ alignItems: "center", marginTop: verticalScale(56) }}
            >
              <Inputs
                label={"Your mobile Number"}
                countryCode={countryCode}
                Error={isError}
                namecountry={namecountry}
                number={number}
                onPress={() => setVisibleModal(!visibleModal)}
                onChangeText={(e) => setNumber(e)}
              />
              {
                isError && <Text style={{color:"red", fontFamily:fontGotham.book, fontSize:12}}>Enter correcte number</Text>
              }
            </View>
            <View style={styles.btnContainer}>
              {valided ? (
                <ActivityIndicators />
              ) : (
                <Buttons handleSubmit={handleActive} title={"Confirm"} />
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                marginTop: verticalScale(17),
              }}
            >
              <Text
                style={{
                  fontFamily: fontGotham.regular,
                  fontSize: moderateScale(14),
                }}
              >
                Don't have an account ?{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("login")}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: fontGotham.bold,
                  }}
                >
                  Sign In{" "}
                </Text>
              </Pressable>
            </View>
            <View style={{alignItems:"center"}}>
           {
            errorStatus &&  <Text style={{fontFamily:fontGotham.book, fontSize:14, marginTop:15, color:"red"}}>Connection error, check your connection</Text>
           }
            </View>
          </View>
          <View>
            <ModalCountry
              isVisible={visibleModal}
              onCountryChange={(item) => onCountryChange(item)}
              hideModal={() => setVisibleModal(!visibleModal)}
              setValue={(e) => setValue(e)}
              values={value}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <AlertModal
          visible={visibled}
          icons={<SmsTracking color="black" size={34} />}
          btnText={"Close"}
          title={"Code sent"}
          dismis={() => setVisibled(!visibled)}
          text={"We sent you a verification code, an SMS should arrive shortly"}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};
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
    width: horizontalScale(315),
    padding: 8,
    flexDirection: "row",
    borderRadius: 8,
  },
  input2: {
    borderLeftWidth: 1,
    paddingLeft: 20,
    fontSize: 14,
  },
  btnContainer: {
    marginTop: verticalScale(60),
    alignItems: "center",
  },
});

export default Register;
