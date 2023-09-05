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
import { horizontalScale, verticalScale } from "../../utilities/Metrics";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import slide from "../../utilities/slide";
import FlowItems from "./FlowItems";

const Flow = () => {
  const { width } = useWindowDimensions();
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
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color={Color.light.black} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("adminRegistration")}>
            <Text>SKIP</Text>
          </Pressable>
        </View>
        <View>
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
