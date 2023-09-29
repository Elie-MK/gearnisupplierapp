import {
  HambergerMenu,
  Notification,
  NotificationBing,
} from "iconsax-react-native";
import {
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { moderateScale } from "../../utilities/Metrics";
import { useCustomFonts } from "../../utilities/Fonts";
import Color from "../../utilities/Color";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const KeybordAvoidHome = ({ title, children, size, nav }) => {
  const navigation = useNavigation();
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 5,
        backgroundColor: Color.light.themeColor,
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 20,
          marginLeft: 20,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={nav}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{ fontSize: size ? 22 : 14, fontFamily: fontGotham.medium }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("notification")}>
          <NotificationBing size={25} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeybordAvoidHome;
