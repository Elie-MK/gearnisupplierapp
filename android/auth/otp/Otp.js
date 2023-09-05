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
import React from "react";
import Color from "../../../utilities/Color";
import { AntDesign } from "@expo/vector-icons";
import { verticalScale } from "../../../utilities/Metrics";
import { useState } from "react";
import { Button } from "@rneui/base";

const Otp = ({ navigation }) => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: Color.light.main, fontSize: 30 }}>
            VERIFICATION
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
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
          <TextInput
            value={otp1}
            onChangeText={(e) => setOtp1(e)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            textAlign="center"
            keyboardType="numeric"
            maxLength={1}
            cursorColor={Color.light.main}
          />
          <TextInput
            value={otp2}
            onChangeText={(e) => setOtp2(e)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            textAlign="center"
            keyboardType="numeric"
            maxLength={1}
            cursorColor={Color.light.main}
          />
          <TextInput
            value={otp3}
            onChangeText={(e) => setOtp3(e)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            textAlign="center"
            keyboardType="numeric"
            maxLength={1}
            cursorColor={Color.light.main}
          />
          <TextInput
            value={otp4}
            onChangeText={(e) => setOtp4(e)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            textAlign="center"
            keyboardType="numeric"
            maxLength={1}
            cursorColor={Color.light.main}
          />
          <TextInput
            value={otp5}
            onChangeText={(e) => setOtp5(e)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            textAlign="center"
            keyboardType="numeric"
            maxLength={1}
            cursorColor={Color.light.main}
          />
          <TextInput
            value={otp6}
            onChangeText={(e) => setOtp6(e)}
            style={{
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            textAlign="center"
            keyboardType="numeric"
            maxLength={1}
            cursorColor={Color.light.main}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>An SMS should arrive shortly</Text>
          <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 25 }}>
            00:30
          </Text>
        </View>
        <View style={{marginTop:120}}>
          <Button
            title="Verify"
            buttonStyle={{ backgroundColor: Color.light.main, padding: 15 }}
            titleStyle={{ color: Color.light.black, fontWeight: "bold" }}
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
          <Text>I haven't received the code.  </Text>
          <Pressable >
            <Text style={{ fontWeight: "bold" }}>Resend </Text>
          </Pressable>
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
    marginTop: verticalScale(20),
    marginRight: 20,
  },
});

export default Otp;
