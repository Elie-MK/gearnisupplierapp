import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Global from "../../components/Global";
import { HambergerMenu, Notification } from "iconsax-react-native";
import { useCustomFonts } from "../../../utilities/Fonts";
import { moderateScale, verticalScale } from "../../../utilities/Metrics";

const Notifications = ({ navigation }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Global>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("menu")}>
            <HambergerMenu size={30} color="black" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: moderateScale(22),
                fontFamily: fontGotham.medium,
              }}
            >
              Notifications
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("notification")}>
            <Notification size={30} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}  style={{ marginTop: verticalScale(20) }}>
          <Text
            style={{ fontSize: moderateScale(14), fontFamily: fontGotham.bold }}
          >
            Today
          </Text>
          <TouchableOpacity style={{ marginTop: verticalScale(20) }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Notification size={30} color="black" />
              <Text style={{ fontSize: moderateScale(14) }}>Notification</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Global>
  );
};

export default Notifications;
