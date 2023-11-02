import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Color from "../../../utilities/Color";
import { AntDesign } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utilities/Metrics";
import { useState } from "react";
import { Button } from "@rneui/base";
import Alert from "../../components/AlertModal";
import { useCustomFonts } from "../../../utilities/Fonts";
import { ActivityIndicator } from "react-native-paper";
import Buttons from "../../components/Buttons";
import ActivityIndicators from "../../components/ActivityIndicator";
import AlertModal from "../../components/AlertModal";
import { Lock, SmsTracking } from "iconsax-react-native";
import Axios from "axios";
// import {
//   CLIENT_ID,
//   CLIENT_SECRET,
//   GRANT_TYPE_URL,
//   URL_VALIDATED_CODE,
//   SEND_CODE_URL
// } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { privateKeys } from "../../../utilities/privateKeys";

const Otp = ({ navigation, route }) => {
  const otpRefs = useRef([]);
  const { routes, Numbers } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [time, setTime] = useState({ minutes: 0, secondes: 30 });
  const [attempts, setAttempts] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFocused, setIsFocused] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [dismis, setDismis] = useState(false);
  const [visible, setVisible] = useState(false);
  const [valided, setValided] = useState(false);
  const [visibled, setVisibled] = useState(false);
  const [error, setError]=useState(false)

  const otpCode = otp.join("");
  const urlValitedCode = privateKeys.URL_VALIDATED_CODE;
  const validOtp = {
    grant_type: privateKeys.GRANT_TYPE_URL,
    client_id: privateKeys.CLIENT_ID,
    client_secret: privateKeys.CLIENT_SECRET,
    username: Numbers,
    otp: otpCode,
    realm: "sms",
    audience: "https://gearni-backend-api/",
    scope: "offline_access openid profile email",
  };
  const apiUrl = privateKeys.SEND_CODE_URL;
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

  const resendCode = async () => {
    try{
        const response = await Axios.post(apiUrl, requestData);
        console.log("Server Response :", response.data);
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    }
  
  
   const handleSubmitRegistration = async ()=>{
    setAttempts(1);
    if (routes === "register") {
      if (otpCode.length < 6) {
        setError(true)
      } else {
        try {
          setValided(!valided);
          const response = await Axios.post(urlValitedCode, validOtp);
          if(response.status === 200){
            const dataToStore = {
              value: response.data,
              expirationTime: new Date().getTime() + 24 * 60 * 60 * 1000,
            };            
            await AsyncStorage.setItem("access_token", JSON.stringify(dataToStore)).then(()=>console.log("Data Save Succefully"))
            await AsyncStorage.setItem("refresh_token", response.data.refresh_token).then(()=>console.log("Refresh_Token save Succefully"))
            setTimeout(() => {
              setValided(false);
              navigation.replace("flow", Numbers );
            }, 3000);
          }
          console.log("Server Response :", response.data);
        } catch (error) {
          setValided(false);
          if(error.message === "Network Error" ){
            alert('Connection error, check your connection')
          }else if (error.message === "Request failed with status code 429" ){
            setVisible(true)
            // alert("Your account has been blocked after multiple consecutive login attempts. Retry after 24Hours")
            setDismis(true)
          }
          console.log("Erreur lors de la requête :", error);
        }
      }
    }else{
      console.log("Route not found");
    }
   }
   const instance = Axios.create({
    baseURL: "https://backend.gearni.com/",
    headers:{
      'Api-Key':`${privateKeys.API_KEY}`,
      //  'Authorization':`Bearer ${token}`, 
    }
  });
   const verifyData = {
    "mobileNumber": Numbers
  }
  
  const handleSubmitLogin = async () => {
    setAttempts(1);
    if (routes === "login") {
      if (otpCode.length < 6) {
        setError(true)
      } else {
        try {
          setValided(!valided);
          const responseVerify = await instance.post('auth/login/sendOTP', verifyData)
          // console.log("response ", responseVerify.status);
          if(responseVerify.status === 200){
            try {
              const response = await Axios.post(urlValitedCode, validOtp);
              if(response.status === 200){
                const dataToStore = {
                  value: response.data,
                  expirationTime: new Date().getTime() + 24 * 60 * 60 * 1000,
                };            
                await AsyncStorage.setItem("access_token", JSON.stringify(dataToStore)).then(()=>console.log("Data Save Succefully"))
                await AsyncStorage.setItem("refresh_token", response.data.refresh_token).then(()=>console.log("Refresh_Token save Succefully"))
                setTimeout(() => {
                  setValided(false);
                  navigation.replace("drawer", Numbers );
                }, 3000);
              }
              console.log("Server Response :", response.data);
            } catch (error) {
                setValided(false);
                setError(true)
                if(error.message === "Network Error" ){
                  alert('Connection error, check your connection')
                }else if (error.message === "Request failed with status code 429" ){
                  alert("Your account has been blocked after multiple consecutive login attempts. Retry after 24Hours")
                }
                console.log("Erreur lors de la requête :", error);
              }
              }
        } catch (error) {
          if(error.message === "Request failed with status code 404"){
            setValided(!valided);
            try {
              const response = await Axios.post(urlValitedCode, validOtp);
              if(response.status === 200){
                const dataToStore = {
                  value: response.data,
                  expirationTime: new Date().getTime() + 24 * 60 * 60 * 1000,
                };            
                await AsyncStorage.setItem("access_token", JSON.stringify(dataToStore)).then(()=>console.log("Data Save Succefully"))
                await AsyncStorage.setItem("refresh_token", response.data.refresh_token).then(()=>console.log("Refresh_Token save Succefully"))
                setTimeout(() => {
                  setValided(false);
                  navigation.replace("flow", Numbers );
                }, 3000);
              }
              console.log("Server Response :", response.data);
            } catch (error) {
              setValided(false);
              if(error.message === "Network Error" ){
                alert('Connection error, check your connection')
              }else if (error.message === "Request failed with status code 429" ){
                setVisible(true)
                // alert("Your account has been blocked after multiple consecutive login attempts. Retry after 24Hours")
                setDismis(true)
              }
              console.log("Erreur lors de la requête :", error);
            }
          }
        }
      }
    }else{
      console.log("Route not found");
    }
  };

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];

    if (text.length === 1) {
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5) {
        otpRefs.current[index + 1].focus();
      }
    } else if (text.length === 0) {
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }

    const newIsFocused = [...isFocused];
    newIsFocused[index] = text.length === 1;
    setIsFocused(newIsFocused);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (time.minutes === 0 && time.secondes === 0) {
          if (attempts <= 2) {
            setIsPaused(true);
            setAttempts(attempts + 1);
            
          } else {
            setTime({ minutes: 59, secondes: 59 });
            setDismis(!dismis);
            setVisible(!visible);
          }
        } else {
          setTime((prevTime) => {
            if (prevTime.secondes === 0) {
              return { minutes: prevTime.minutes - 1, secondes: 59 };
            } else {
              return {
                minutes: prevTime.minutes,
                secondes: prevTime.secondes - 1,
              };
            }
          });
        }
      }
   
    }, 1000);
  
    return () => clearInterval(interval);
 
  }, [time, attempts, isPaused]);
  useEffect(()=>{
    if(otpCode.length >= 1){
      setError(false)
    }
  },[otpCode])

  const handleResend = () => {
    if (isPaused) {
      setTime({ minutes: 0, secondes: 30 });
      setAttempts(attempts + 1);
      resendCode()
      setIsPaused(false);
      setVisibled(!visibled);
      
    }
  };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  // console.log(routes);
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate("login")}>
          <AntDesign name="arrowleft" size={35} color={Color.light.black} />
        </Pressable>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text
              style={{
                color: Color.light.main,
                fontSize: 32,
                lineHeight: 38,
                fontFamily: fontGotham.medium,
              }}
            >
              VERIFICATION
            </Text>
            <Text style={{ fontSize: 20, fontFamily: fontGotham.medium }}>
              PLEASE ENTER YOUR
            </Text>
            <Text style={{ fontSize: 20, fontFamily: fontGotham.medium }}>
              VERIFICATION CODE
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: verticalScale(50),
            }}
          >
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (otpRefs.current[index] = ref)}
                editable={!dismis}
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  fontSize: 14,
                  width: 50,
                  height: 50,
                  borderColor: error == true?"red":!dismis
                  ? isFocused[index]
                    ? Color.light.main
                    : "black"
                  : "#dfdfdf",
                }}
                keyboardType="numeric"
                textAlign="center"
                selectionColor={Color.light.main}
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
              />
            ))}
          </View>
          <View style={{ alignItems: "center", marginTop: verticalScale(17) }}>
           {
            error &&  <Text
            style={{
              fontFamily: fontGotham.regular,
              color:"red",
              fontSize: moderateScale(12),
            }}
          >
            Enter a valid code or your code is expire
          </Text>
           }
            <Text
              style={{
                fontFamily: fontGotham.regular,
                fontSize: moderateScale(12),
              }}
            >
              An SMS should arrive shortly
            </Text>
            {dismis ? (
              <Text
                style={{
                  marginTop: verticalScale(15),
                  fontSize: moderateScale(14),
                  textAlign: "center",
                  color: "red",
                  fontFamily: fontGotham.regular,
                }}
              >
                Account has been templorarily locked for 24 houres due to
                suspicious activity
              </Text>
            ) : (
              <Text
                style={{
                  marginTop: verticalScale(15),
                  fontSize: moderateScale(20),
                  fontFamily: fontGotham.bold,
                }}
              >
                {String(time.minutes).padStart(2, "0")}:
                {String(time.secondes).padStart(2, "0")}
              </Text>
            )}
          </View>
          <View style={{ marginTop: verticalScale(60), alignItems: "center" }}>
            {valided ? (
              <ActivityIndicators />
            ) : (
              <Buttons
                disabled={dismis}
                title={"Verify"}
                handleSubmit={routes == "login"? handleSubmitLogin : handleSubmitRegistration }
              />
            )}
          </View>

          {!dismis ? (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                marginTop: verticalScale(20),
              }}
            >
              <Text
                style={{
                  fontFamily: fontGotham.regular,
                  fontSize: moderateScale(14),
                }}
              >
                I haven't received the code.{" "}
              </Text>
              <Pressable onPress={handleResend}>
                <Text
                  style={{
                    fontFamily: fontGotham.bold,
                    fontSize: moderateScale(14),
                  }}
                >
                  Resend{" "}
                </Text>
              </Pressable>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                marginTop: verticalScale(20),
              }}
            >
              <Text
                style={{
                  fontFamily: fontGotham.regular,
                  fontSize: moderateScale(14),
                }}
              >
                Encoutering issues ?{" "}
              </Text>
              <Pressable onPress={() => navigation.replace("contact", Numbers)}>
                <Text
                  style={{
                    fontFamily: fontGotham.bold,
                    fontSize: moderateScale(14),
                  }}
                >
                  Contact Support
                </Text>
              </Pressable>
            </View>
          )}
        </View>
        <View>
          <AlertModal
            visible={visibled}
            btnText={"Close"}
            icons={<SmsTracking color="black" size={34} />}
            title={"Code sent"}
            dismis={() => setVisibled(!visibled)}
            text={
              "We sent you a verification code, an SMS should arrive shortly"
            }
            onPress={() => setVisibled(!visibled)}
          />
          <Alert
            visible={visible}
            icons={<Lock color="black" size={34} />}
            title={"Account Locked"}
            dismis={() => setVisible(!visible)}
            onPress={() => setVisible(!visible)}
            btnText={"Close"}
            text={
              "We're sorry, but your acoount has been temporarily locked for 24 hours. Please feel free to contact our support team."
            }
          />
        </View>
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
    marginTop: verticalScale(24),
    marginRight: 20,
  },
});

export default Otp;
