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
import { moderateScale, verticalScale } from "../../../utilities/Metrics";
import CountryList from "country-list-with-dial-code-and-flag";
import { useCustomFonts } from "../../../utilities/Fonts";
import Inputs from "../../components/Inputs";
import ModalCountry from "../../components/ModalCountry";
import Buttons from "../../components/Buttons";
import ActivityIndicators from "../../components/ActivityIndicator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { privateKeys } from "../../../utilities/privateKeys";
import Axios from "axios";

const Login = ({ navigation, route }) => {
  const routes = route.name;
  const defaultCountryCode = "+216";
  const defaultCountryName = "🇹🇳";
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [number, setNumber] = useState("");
  const [visible, setVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [valided, setValided] = useState(false);
  const [isError, setIsError] = useState(false);
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
    const regex = /^\+\d{1,4}$/;
    const isValidCode = regex.test(countryCode);

    if (isValidCode === true) {
      setIsValid(isValid);
    } else {
      setIsValid(!isValid);
    }
    handleCountry(value);
    setIsError(false)
  }, [value, number]);


  const datas = CountryList.getAll();
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
    setVisible(!visible);
  };

  const handleSubmit = async () => {
    if (!number || number.length < 8) {
      setIsError(!isError)
    } else {
     try {
      setValided(!valided);
      const response = await Axios.post(apiUrl, requestData)
      if(response.status === 200){
        setTimeout(() => {
          navigation.replace("otp", { routes, Numbers });
          setValided(false);
        }, 1000);
      }
      console.log(response.data);
     } catch (error) {
      setValided(false);
      console.log(error.message);
      if(error.message === "Network Error" ){
        setErrorStatus(true)
        alert('Please verify your Network')
      }else if (error.message === "Request failed with status code 400" ){
        alert('There was a problem sending the code, please try again later')
      }
     }
    }
  };

  const TOKEN = async () => {
    await AsyncStorage.getItem("access_token")
      .then((result) => {
        if (result) {
          const storedData = JSON.parse(result);
          // Vérifiez si la donnée est encore valide
          if (storedData && new Date().getTime() < storedData.expirationTime) {
            console.log("Donnée valide :", storedData.value);
          } else {
            console.log("La donnée a expiré.");
            AsyncStorage.removeItem("access_token")
              .then(() => {
                console.log("Donnée supprimée avec succès.");
              })
              .catch((error) => {
                console.log(
                  "Erreur lors de la suppression de la donnée :",
                  error
                );
              });
          }
        } else {
          console.log("La donnée n'existe pas.");
        }
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération de la donnée :", error);
      });
  };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  // console.log(countryFlag);

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
                Error={isError}
                label={"Your mobile Number"}
                countryCode={countryCode}
                namecountry={namecountry}
                number={number}
                onPress={() => setVisible(!visible)}
                onChangeText={(e) => setNumber(e)}
              />
              {isError && (
                <Text
                  style={{
                    color: "red",
                    fontFamily: fontGotham.book,
                    fontSize: 12,
                  }}
                >
                  Enter correcte number
                </Text>
              )}
            </View>
            <View style={styles.btnContainer}>
              {valided ? (
                <ActivityIndicators />
              ) : (
                <Buttons handleSubmit={handleSubmit} title={"Confirm"} />
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
              <Pressable onPress={() => navigation.navigate("register")}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: fontGotham.bold,
                  }}
                >
                  Sign Up{" "}
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            <ModalCountry
              isVisible={visible}
              onCountryChange={(item) => onCountryChange(item)}
              hideModal={() => setVisible(!visible)}
              setValue={(e) => setValue(e)}
              values={value}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  btnContainer: {
    marginTop: verticalScale(60),
    alignItems: "center",
  },
});
export default Login;
