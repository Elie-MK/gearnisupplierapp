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
import { verticalScale } from "../../../utilities/Metrics";
import { useState } from "react";
import { Button } from "@rneui/base";
import Alert from "../../components/Alert";
import { useCustomFonts } from "../../../utilities/Fonts";

const Otp = ({ navigation, route }) => {
    const otpRefs = useRef([]);

    const {routes}=route.params

    

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [attempts, setAttempts] = useState(0);
  const [dismis, setDismis] = useState(false);
  const [visible, setVisible] = useState(false);



  const handleSubmit = () => {
    const otpValue = otp.join('')
    setAttempts(1)
    if(routes == "login"){
      navigation.navigate('home')
    }else{
      navigation.navigate('flow')
    }
  };
  const updateTimer = () => {
    if (timer > 0) {
      setTimer(timer - 1);
    } else {
      
      if (attempts === 0) {
        setTimer(30); 
      } else if (attempts === 1) {
        setTimer(30); 
      } else if (attempts === 2) {
        setTimer(3600); 
      }
    }
  };

  useEffect(() => {
    const countdown = setInterval(updateTimer, 1000);

    return () => clearInterval(countdown);
  }, [attempts]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];

    if (text.length === 1) {
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5) {
        otpRefs.current[index + 1].focus();
      }
    } else if (text.length === 0) {
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };
 
  const handleResend = () => {
    if (attempts < 2) {
      setVisible(!visible)
      setAttempts(attempts + 1);
    } else {
      setDismis(!dismis)
      setVisible(!visible)
    }
  };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate('login')}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: Color.light.main, fontSize: 30, fontFamily:fontGotham.medium }}>
            VERIFICATION
          </Text>
          <Text style={{ fontSize: 25,fontFamily:fontGotham.bold }}>
            PLEASE ENTER YOUR VERIFICATION CODE
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 20,
          }}
        >
         
         {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (otpRefs.current[index] = ref)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            keyboardType="numeric"
            textAlign="center"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
        
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{fontFamily:fontGotham.regular}}>An SMS should arrive shortly</Text>
          <Text style={{ marginTop: 20, fontSize: 25, fontFamily:fontGotham.bold }}>
            00:{timer}
          </Text>
        </View>
        <View style={{marginTop:120}}>
          <Button
            title="Verify"
            disabled={dismis}
            onPress={handleSubmit}
            buttonStyle={{ backgroundColor: Color.light.main, padding: 15 }}
            titleStyle={{ color: Color.light.black, fontFamily:fontGotham.bold}}
          />
        </View>

        {
          !dismis?
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginTop: verticalScale(20),
          }}
        >
          <Text style={{fontFamily:fontGotham.regular}}>I haven't received the code.  </Text>
          <Pressable onPress={()=>setVisible(!visible)}>
            <Text style={{ fontFamily:fontGotham.bold }}>Resend </Text>
          </Pressable> 
          
        </View>:   <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginTop: verticalScale(20),
          }}
        >
          <Text style={{fontFamily:fontGotham.regular}}>Encoutering issues ?  </Text>
          <Pressable onPress={handleResend}>
            <Text style={{ fontFamily:fontGotham.bold }}>Contact Support</Text>
          </Pressable> 
          
        </View>
        }
      </View>
      <View>
        <Alert
          visible={visible}
          dismis={() => setVisible(!visible)}
          onPress={handleResend}
          text={"We sent you a verification code an SMS should arrive shortly"}
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
});

export default Otp;
