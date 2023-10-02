import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../../../../utilities/Color";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../../utilities/Fonts";
import { Button, Input } from "@rneui/base";
import DateTimePicker from "@react-native-community/datetimepicker"
import ModalCountry from "../../../../components/ModalCountry";
import KeyboardAvoid from "../../../../components/KeyboardAvoid";
import {User, CalendarSearch, CloseCircle, Sms, Location, Flag} from 'iconsax-react-native';
import InputsText from "../../../../components/InputsText";
import InputCountries from "../../../../components/InputCountries";
import Buttons from "../../../../components/Buttons";
import { horizontalScale, verticalScale } from "../../../../../utilities/Metrics";
import { Platform } from "react-native";


const Adminregister = ({ navigation }) => {
  const defaultCountryName = "Tunisia";
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate]=useState(new Date())
  const [showPicker, setShowPicker]=useState(false)
  const [dateBirth, setDateBirth]=useState('')

  const onCountryChange = (item) => {
    setNameCountry(item.name)
    setModalOpen(!modalOpen);
  };
const toggleDatePicker = ()=>{
  setShowPicker(!showPicker)
}

const onChange = ({type}, selectedDate)=>{
  if(type== "set"){
    const currentDate = selectedDate
    setDate(currentDate)
    if(Platform.OS == "android"){
      toggleDatePicker()
      setDateBirth(currentDate.toDateString())
    }
  }else{
    toggleDatePicker()
  }
}
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  console.log(dateBirth);
  return (
    <KeyboardAvoid>
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Pressable onPress={() => navigation.navigate("register")}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
         <View style={{marginTop:15}}>
         <Text style={{ fontSize: 32, fontFamily: fontGotham.medium }}>
            Admin{" "}
          </Text>
          <Text style={{ fontSize: 32, fontFamily: fontGotham.medium }}>
            Registration{" "}
          </Text>
         </View>
          <View style={{ marginTop: verticalScale(56), alignItems:"center" }}>
            <View style={{ flexDirection: "row", gap: 5, width:horizontalScale(315) }}>
              {/* First Name */}
             <InputsText placeholder={"Joe"} width={horizontalScale(155)} label={"First Name"} iconsLeft={<User color="black" />} />
              {/* Last Name */}
             <InputsText placeholder={"Smith"} width={horizontalScale(155)} label={"Last Name"} iconsLeft={<User color="black" />} />
             </View>
            {/* Birthday */}
            {
              showPicker &&<DateTimePicker   style={styles.calendar} dateFormat="day month year" onChange={onChange} positiveButton={{textColor:"black"}}   negativeButton={{textColor:"black"}} mode="date" display="calendar" value={date}  />

            }
            <Pressable onPress={toggleDatePicker}>
            <InputsText value={dateBirth}  editable={false} placeholder={"mm/dd/yyyy"} width={horizontalScale(315)} label={"Birthdate"} iconsRight={<CloseCircle color="black" />}  iconsLeft={<CalendarSearch color="black" />} />

            </Pressable>
            {/* Email */}
           <InputsText width={horizontalScale(315)} iconsLeft={<Sms color="black" />} label={"Email"} placeholder={"Email"} />
            {/* Adress */}
           <InputsText width={horizontalScale(315)} iconsLeft={<Location color="black" />} placeholder={"Adress"} label={"Your Adress"} />
            {/*Country */}
            <InputCountries label={"Country Of Residence"} country={namecountry} press={(item)=>onCountryChange(item)} />

            <ModalCountry
              value={value}
              isVisible={modalOpen}
              hideModal={()=>setModalOpen(!modalOpen)}
              setValue={(text)=>setValue(text)}
              onCountryChange={(item)=>onCountryChange(item)}
            />

            {/* Btn */}
            <View style={{ marginTop: verticalScale(30), alignItems:"center" }}>
              <Buttons title={"Continue"} handleSubmit={()=>navigation.navigate("companyRegistration")} />
            </View>
          </View>
      </View>
    </View>
    </KeyboardAvoid>
  );
};

export default Adminregister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height: Dimensions.get("window").height,
  },
  secondContainer: {
    marginLeft: 20,
    marginTop: verticalScale(5),
    marginRight: 20,
  },
  calendar:{
    backgroundColor:"red",
    color:"red"
  }
});
