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
import {User, CalendarSearch, CloseCircle, Sms, Location, Flag, Profile} from 'iconsax-react-native';
import InputsText from "../../../../components/InputsText";
import InputCountries from "../../../../components/InputCountries";
import Buttons from "../../../../components/Buttons";
import { horizontalScale, verticalScale } from "../../../../../utilities/Metrics";
import { Platform } from "react-native";
import { postAdminRegistration } from "../../../../../utilities/API";
import { privateKeys } from "../../../../../utilities/privateKeys";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActivityIndicators from "../../../../components/ActivityIndicator";


const Adminregister = ({ navigation, route }) => {
  const Number=route.params
  const defaultCountryName = "Tunisia";
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate]=useState(new Date())
  const [showPicker, setShowPicker]=useState(false)
  const [dateBirth, setDateBirth]=useState('')
  const [email, setEmail]=useState('')
  const [address, setAddress]=useState('')
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [token, setToken]=useState('')
  const [errorMsg, setErrorMsg]=useState('')
  const [errorStatus, setErrorStatus]=useState(false)
  const [actived, setActived]=useState(false)


  const TOKEN = async ()=> {
    await AsyncStorage.getItem("access_token").then((result) => {
      if (result) {
        const storedData = JSON.parse(result);
          setToken(storedData.value.access_token);
      } else {
        console.log('La donnée n\'existe pas.');
      }
    }).catch((error) => {
      console.log('Erreur lors de la récupération de la donnée :', error);
    });
  }
useEffect(()=>{
TOKEN()

},[])
useEffect(()=>{
setErrorStatus(false)
},[email])



  const instance = axios.create({
    baseURL: "https://backend.gearni.com/",
    headers:{
       'Authorization':`Bearer ${token}`, 
       'Api-Key':`${privateKeys.API_KEY}`
    }
  });
  
const handleSubmit = async ()=>{
  if(!address || !namecountry || !dateBirth || !firstName || !lastName || !email){
    alert("Please fill all fields")
  }else{
    try {
      setActived(!actived)
    const Datas = 
      {
        "mobileNumber": Number,
        "address": address,
        "country": namecountry,
        "birthDate": dateBirth,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "jobTitle": "AdminCompany",
        "subAuth0": "string",
        "isProfileSet": true,
        "nationality": namecountry,
      }
      const response = await instance.post("auth/register/verify", Datas);
      if(response.status === 200){
       navigation.replace("companyRegistration")
       console.log(response.data);    
       setActived(!actived)
     }
    } catch (error) {
      setActived(false)
      if (error.message === "Request failed with status code 302") {
        setErrorStatus(true) 
        setErrorMsg("Account already exists with this sub.");
      }else if (error.message === "Request failed with status code 400"){
        setErrorStatus(true) 
        setErrorMsg("Verify your email adress")
      }
      console.log("Datas no posted ", error)
      // navigation.replace(error.message === "Request failed with status code 302" && "login")
    }
  }
}
  
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
             <InputsText value={firstName} onChangeText={(f)=>setFirstName(f)} placeholder={"Joe"}  width={horizontalScale(155)} label={"First Name"} iconsLeft={<Profile color="black" />} />
              {/* Last Name */}
             <InputsText value={lastName} onChangeText={(l)=>setLastName(l)} placeholder={"Smith"} width={horizontalScale(155)} label={"Last Name"} iconsLeft={<Profile color="black" />} />
             </View>
            {/* Birthday */}
            {
              showPicker &&<DateTimePicker maximumDate={new Date()} style={{backgroundColor:"black"}} dateFormat="DD-MM-YYYY" onChange={onChange} positiveButton={{textColor:"black"}}   negativeButton={{textColor:"black"}} mode="date" display="calendar" value={date}  />

            }
            <Pressable onPress={toggleDatePicker}>
            <InputsText color={"black"} value={dateBirth}  editable={false} placeholder={"mm/dd/yyyy"} width={horizontalScale(315)} label={"Birthdate"}  iconsLeft={<CalendarSearch color="black" />} />

            </Pressable>
            {/* Email */}
           <InputsText width={horizontalScale(315)} iconsLeft={<Sms color="black" />} label={"Email"} value={email} onChangeText={(e)=>setEmail(e)} placeholder={"Email"} />
            {/* Adress */}
           <InputsText value={address} onChangeText={(a)=>setAddress(a)} width={horizontalScale(315)} iconsLeft={<Location color="black" />} placeholder={"Adress"} label={"Your Adress"} />
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
              {
                actived?<ActivityIndicators />:

              <Buttons title={"Continue"} handleSubmit={handleSubmit} />
              }
            </View>
            <Text style={{marginTop:15, color:"red"}}>
              {errorStatus && errorMsg}
            </Text>
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
  }
});
