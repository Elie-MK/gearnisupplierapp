import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Image
} from "react-native";
import React from "react";
import Color from "../utilities/Color";
import { horizontalScale, verticalScale } from "../utilities/Metrics";
import { Button } from "@rneui/base";

const WelcomeAndroid = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View>
          <View>
            <Image resizeMode="contain" style={{width:horizontalScale(200), marginTop:-20}} source={require("../assets/gear.png")} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Get Started !"
              buttonStyle={styles.btn}
              titleStyle={{ color: Color.light.black, fontSize: 25 }}
              type="outline"
              onPress={()=>navigation.navigate('login')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  secondContainer: {
    backgroundColor: Color.light.main,
    height:Dimensions.get("screen").height,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: verticalScale(200),
    width: horizontalScale(200),
  },
  btn: {
    borderColor: Color.light.black,
  },
});
export default WelcomeAndroid;
