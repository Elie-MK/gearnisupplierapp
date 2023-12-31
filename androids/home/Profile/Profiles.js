import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CalendarSearch, CloseCircle, Flag, HambergerMenu, Hashtag, Notification, SearchNormal, Shop, Sms, User } from 'iconsax-react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../../utilities/Metrics'
import { useCustomFonts } from '../../../utilities/Fonts'
import Picturepprofile from '../../components/Picturepprofile'
import ModalCountry from '../../components/ModalCountry'
import KeybordAvoidHome from '../../components/KeybordAvoidHome'
import { Button, Divider } from '@rneui/base'
import UploadInput from '../../components/UploadInput'
import * as ImagePicker from 'expo-image-picker';
import InputsText from '../../components/InputsText'
import Inputs from '../../components/Inputs'
import NotEditableInput from '../../components/NotEditableInput'
import InputCountries from '../../components/InputCountries'
import Buttons from '../../components/Buttons'
import EmptyUploadButton from '../../components/EmptyUploadButton'
import DateTimePicker from "@react-native-community/datetimepicker"
import ModalChooseUpload from '../../components/ModalChooseUpload'
import * as DocumentPicker from 'expo-document-picker';
import { Camera } from "expo-camera";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { privateKeys } from '../../../utilities/privateKeys'
import axios from 'axios'
import { ActivityIndicator } from 'react-native-paper'
import Color from '../../../utilities/Color'
import moment from 'moment/moment'





const Profiles = ({navigation}) => {
  const defaultCountryCode = "+216"
  const defaultCountry = "Tunisia"
  const defaultFlag = "🇹🇳"
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [number, setNumber]=useState('')
  const [value, setValue]=useState('')
  const [nationality, setNationality]=useState(defaultCountry)
  const [country, setCountry]=useState(defaultCountry)
  const [visibleM, setVisibleM]=useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileName2, setFileName2] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgress2, setUploadProgress2] = useState(0);
  const [date, setDate]=useState(new Date())
  const [showPicker, setShowPicker]=useState(false)
  const [openShow, setOpenShow]=useState(false)
  const [showVisibled, setShowVisibled]=useState(false)
  const [dateBirth, setDateBirth]=useState('')
  const [token, setToken]=useState(null)
  const [datas, setDatas]=useState(null)

// Hooks datas 
const [firstName, setFirstName]=useState('')
const [lastName, setLastName]=useState('')
const [phoneNumber, setPhoneNumber]=useState('')
const [email, setEmail]=useState('')
const [jobTitle, setJobTitle]=useState('')
const [role, setRole]=useState('')
const [cin, setCin]=useState('')

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
console.log(token);
  const instance = axios.create({
    baseURL: "https://backend.gearni.com/",
    headers:{
       'Authorization':`Bearer ${token}`, 
       'Api-Key':`${privateKeys.API_KEY}`
    }
  });
  const getDatas = async ()=>{
    try {
      const response = await instance.get("user/currentUser")
      if(response.status === 200){
        const datas = response.data.data
        await AsyncStorage.setItem("myProfileData", JSON.stringify(datas)).then(()=>console.log("Data Save Succefully"))
        console.log(datas)
      }
    } catch (error) {
      console.log("Erreur lors de la recuperation des données ", error);
    }
  }
  useEffect(()=>{
    getDatas()
  },[TOKEN()])

  const dataMyProfile = async ()=> {
    await AsyncStorage.getItem("myProfileData").then((result) => {
      if (result) {
        const storedData = JSON.parse(result);
        setDatas(storedData)
       setFirstName(storedData.firstName)
       setLastName(storedData.lastName)
       const number = storedData.mobileNumber
       setPhoneNumber(number.slice(4))
       setDateBirth(storedData.birthDate)
       setEmail(storedData.email)
       setJobTitle(storedData.jobTitle)
       setRole(storedData.roles)
       setCountry(storedData.nationality)
       setCin(storedData.cin)
      } else {
        console.log('La donnée n\'existe pas.');
      }
    }).catch((error) => {
      console.log('Erreur lors de la récupération de la donnée :', error);
    });
  }
  
  useEffect(()=>{
    dataMyProfile()
  },[])
  



  const pickImage = async (imgSelected, fileNamesSeleted) => {
    if(openShow == true | showVisibled== true){
      setOpenShow(false)
      setShowVisibled(false)
    }
   
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
  
      if (!result.canceled && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        imgSelected({uri:selectedAsset.uri});
  
        const uriComponents = selectedAsset.uri.split("/");
        const fileName = uriComponents[uriComponents.length - 1];
        fileNamesSeleted(fileName);
      }
    
  };
  const allowedExtensions = ['.pdf', '.jpeg', '.jpg', '.png'];
  const pickDocument = async (Img, FileNames) => {
    if(openShow == true | showVisibled== true){
      setOpenShow(false)
      setShowVisibled(false)
    }
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled) {
        const uriParts = result.assets[0].uri.split('.');
        const fileExtension = uriParts[uriParts.length - 1].toLowerCase();

        if (allowedExtensions.includes(`.${fileExtension}`)) {
          FileNames(result.assets[0].name);
          Img(fileExtension === "pdf"?require("../../../assets/PDFImg.png"):{uri:result.assets[0].uri} )
        
        } else {
          console.log('Document format is not supported');
          alert('Document format is not supported')
        }
      } else {
        console.log('Canceling document selection');
      }
    } catch (error) {
      console.error('Error selecting document:', error);
    }
  };


  const pickCamera = async () => {
    try {
      const CameraStatus = await Camera .requestCameraPermissionsAsync()
      setHasCameraPermission(CameraStatus.status === 'granted')
     if (camera){
      const data = await camera.takePictureAsync(null)
      setCameraImg(data.uri)
      navigation.navigate('viewimgcamera', {data:data.uri})
     }
     setType(type === Camera.Constants.Type.back? Camera.Constants.Type.front:Camera.Constants.Type.back)
   
    } catch (error) {
      console.error("Error selecting camera:", error);
    }
  };
  
  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    setNationality(item.name)
    setCountry(item.name)
    setFlag(item.flag)
    setVisibleM(!visibleM);
    };

    const handleClear = (namesFiles, imagesSelected)=>{
      namesFiles(null)
      imagesSelected(null)
    }

    const toggleDatePicker = ()=>{
      setShowPicker(!showPicker)
    }
    
    const onChange = ({type}, selectedDate)=>{
      if(type== "set"){
        const currentDate = selectedDate
        setDate(currentDate)
        if(Platform.OS == "android"){
          toggleDatePicker()
          setDateBirth(moment(currentDate).format('L'))
        }
      }else{
        toggleDatePicker()
      }
    }
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null
  }
  return (
    <KeybordAvoidHome nav={()=>navigation.goBack()} title={"My Profile"}>
      <View>
        {
          datas===null && <ActivityIndicator animating={true} color={Color.light.main} />
        }
        {/* Profile Image */}
        <View style={{marginTop:verticalScale(20), alignItems:"center"}}>
          <Picturepprofile />
        </View>
 {/* Input Text */}
        <View >
        <View style={{marginTop:verticalScale(50), alignItems:"center"}}>
        <View style={{ flexDirection: "row", gap: 5, width:horizontalScale(315) }}>
              {/* First Name */}
             <InputsText padding value={firstName} onChangeText={(f)=>setFirstName(f)}  placeholder={"Joe"} width={horizontalScale(155)} label={"First Name"} iconsLeft={<User color="black" />} />
              {/* Last Name */}
             <InputsText padding value={lastName} placeholder={"Smith"} width={horizontalScale(155)} label={"Last Name"} iconsLeft={<User color="black" />} />
             </View>
            <View style={{  marginTop: verticalScale(30),}}>
        <Inputs  placeholder={"12345678"} label={"Phone Number"} countryCode={countryCode} number={phoneNumber}  onPress={()=>setVisibleM(!visibleM)} onChangeText={(e) => setPhoneNumber(e)} namecountry={flag} />
        </View>
        {/* Mobile Number */}
        <View style={{  marginTop: verticalScale(30),
    borderWidth: 1,
    width:horizontalScale(315),
    flexDirection: "row",
    borderColor:"#dfdfdf",
    borderRadius:8, backgroundColor:'white'}}>
          <View  style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 14,  }}>
            🇹🇳
            </Text>
            <Text style={{ fontSize: 14, color:"#dfdfdf" }}>
           +216
            </Text>
          </View>
          <View style={{ padding: 12, width: horizontalScale(150)}}>
            <TextInput
              defaultValue="123654478"
              style={ { fontFamily: fontGotham.medium,   borderLeftWidth: 1, borderLeftColor:"#dfdfdf",
                paddingLeft: 20,
                color:"#dfdfdf",
                fontSize: 14, }}
                value={phoneNumber}
              editable={false}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        <View
          style={{
            position: "absolute",
            marginTop: -9,
            marginLeft: 20,
            width: horizontalScale(100),
           backgroundColor:'white'
          }}
        >
          <Text style={{textAlign:"center", color:"#dfdfdf", fontSize:12, fontFamily:fontGotham.regular}}>Mobile  Number</Text>
        </View>
        </View>
         {/* Birthday */}
         {
              showPicker &&<DateTimePicker maximumDate={new Date()}  style={{backgroundColor:"red"}} dateFormat="day month year" onChange={onChange} mode="date" display="default" value={date}          />

            }
         <Pressable onPress={toggleDatePicker}>
            <InputsText color={"black"} value={dateBirth}  editable={false} placeholder={"mm/dd/yyyy"} width={horizontalScale(315)} label={"Birthdate"}  iconsLeft={<CalendarSearch color="black" />} />

            </Pressable>            
            {/* Email */}
            <InputsText value={email} onChangeText={(e)=>setEmail(e)} label={"Email"} width={horizontalScale(315)} placeholder={"name@email.com"}  iconsLeft={<Sms color='black' />} />
            {/* Job Title */}
           <InputsText value={jobTitle} onChangeText={(j)=>setJobTitle(j)} label={"Job Title"} placeholder={"Job Title"} width={horizontalScale(315)}  iconsLeft={<SearchNormal color='black' />} />
            {/* Role */}
            <NotEditableInput defaultValue={role}  placeholder={"Company Owner"} label={"Role *"} />
          {/* Branch */}
          <NotEditableInput width iconsLeft={<Shop color='#dfdfdf' />}  label={"Branch *"} placeholder={"Branch Name"}  />
            {/* Identity Card */}
           <InputsText value={cin} onChangeText={(c)=>setCin(c)} label={"Identity Card"} placeholder={"12345678"} iconsLeft={<Hashtag color='black' />} width={horizontalScale(315)}  />
            {/* Nationality */}
            <InputCountries country={country} label={"Nationality"} press={()=>setVisibleM(!visibleM)} />
        {/* Country */}
            <InputCountries country={country} label={"Country"} press={()=>setVisibleM(!visibleM)} />
        </View>


        <View style={{marginTop:25, alignItems:"center",}}>
        <Divider color='gray' width={2} style={{marginBottom:10, width:350}} />
        </View>
        <View style={{alignItems:"center"}}>
              <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload Front Identity Card
      </Text>
      {
        fileName|selectedImage === null ? <EmptyUploadButton onPress={()=>setOpenShow(!openShow)} /> : <UploadInput  clear={()=>handleClear(setSelectedImage, setFileName)}  selectedImage={selectedImage} uploadProgress={uploadProgress} pickImage={()=>pickImage(setSelectedImage, setFileName)} fileName={fileName} />
       }
              <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload Back Identity Card
      </Text>
      {
        fileName2|selectedImage2 === null ? <EmptyUploadButton onPress={()=>setShowVisibled(!showVisibled)} /> : <UploadInput clear={()=>handleClear(setSelectedImage2, setFileName2)} selectedImage={selectedImage2} uploadProgress={uploadProgress2} pickImage={()=>pickImage(setSelectedImage2, setFileName2)} fileName={fileName2} />
      }
              
              <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
                <Buttons title={"Save"} />
            </View>
            </View>
        </View>
        <ModalCountry  value={value}
          isVisible={visibleM}
          hideModal={() => setVisibleM(!visibleM)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange(item)}  />
                <ModalChooseUpload
          onGallery={()=>pickImage(setSelectedImage, setFileName)}
          onCamera={pickCamera}
          onFile={()=>pickDocument(setSelectedImage, setFileName)}
          visible={openShow}
          cancelBtn={() => setOpenShow(!openShow)}
        />
                <ModalChooseUpload
          onGallery={()=>pickImage(setSelectedImage2, setFileName2)}
          onCamera={pickCamera}
          onFile={()=>pickDocument(setSelectedImage2, setFileName2)}
          visible={showVisibled}
          cancelBtn={() => setShowVisibled(!showVisibled)}
        />
          </View>
 </KeybordAvoidHome>
  )
}

export default Profiles