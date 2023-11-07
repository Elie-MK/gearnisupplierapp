import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Global from "../../components/Global";
import { HambergerMenu, Notification } from "iconsax-react-native";
import { useCustomFonts } from "../../../utilities/Fonts";
import { moderateScale, verticalScale } from "../../../utilities/Metrics";
import HeaderHome from "../../components/HeaderHome";

const Notifications = ({ navigation }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <HeaderHome title={"Notifications"} show>
      <View style={{marginLeft:20, marginRight:20}}>
        
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
    </HeaderHome>
  );
};

export default Notifications;
