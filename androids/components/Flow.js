import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Pressable,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Color from "../../utilities/Color";
import { horizontalScale, moderateScale, verticalScale } from "../../utilities/Metrics";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import FlowItems from "./FlowItems";
import { useCustomFonts } from "../../utilities/Fonts";

const Flow = ({navigation, route}) => {
  const routes = route.name
  const { width } = useWindowDimensions();

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.container, width]}>
      <View style={styles.secondContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.navigate('welcome',{routes})}>
            <AntDesign name="arrowleft" size={30} color={Color.light.black} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("adminRegistration")}>
            <Text style={{fontFamily:fontGotham.regular, fontSize:moderateScale(14)}}>SKIP</Text>
          </Pressable>
        </View>
        <View style={{marginTop:30}}>
         <FlowItems />
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
export default Flow;
