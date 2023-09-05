import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Color from "../../../utilities/Color";
import { horizontalScale, verticalScale } from "../../../utilities/Metrics";
import { Button, Input } from "@rneui/base";
import Alert from "../../components/Alert";

const Login = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    setVisible(!visible)
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={{ color: Color.light.main, fontSize: 30 }}>HELLO</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="search1" size={24} color={Color.light.black} />
            <TextInput
              style={styles.input}
              onChangeText={(e) => setCode(e)}
              value={code}
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <TextInput
              style={styles.input2}
              onChangeText={(e) => setNumber(e)}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            marginTop: verticalScale(229),
            padding: 2,
            marginLeft: 20,
            width: horizontalScale(125),
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text>Your mobile Number</Text>
        </View>

        <View style={styles.btnContainer}>
          <Button
            title="Confim"
            buttonStyle={{ backgroundColor: Color.light.main, padding: 15 }}
            titleStyle={{ color: Color.light.black, fontWeight: "bold" }}
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
          <Text>Don't have an account ? </Text>
          <Pressable onPress={() => navigation.navigate("register")}>
            <Text style={{ fontWeight: "bold" }}>Sign Up </Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Alert
          visible={visible}
          dismis={() => setVisible(!visible)}
          onPress={() => navigation.navigate("otp")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height:Dimensions.get("screen").height
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
    marginTop: verticalScale(150),
    padding: 12,
    borderWidth: 1,
    flexDirection: "row",
  },
  input: {
    width: 64,
    paddingLeft: 15,
  },
  input2: {
    borderLeftWidth: 1,
    paddingLeft: 20,
  },
  btnContainer: {
    marginTop: verticalScale(90),
  },
});
export default Login;
