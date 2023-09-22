import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Global from '../../components/Global'
import { CalendarSearch, CloseCircle, Flag, HambergerMenu, Hashtag, Notification, SearchNormal, Shop, Sms, User } from 'iconsax-react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../../utilities/Metrics'
import { useCustomFonts } from '../../../utilities/Fonts'
import Picturepprofile from '../../components/Picturepprofile'
import Color from '../../../utilities/Color'
import ModalCountry from '../../components/ModalCountry'
import KeybordAvoidHome from '../../components/KeybordAvoidHome'
import { MaterialIcons } from '@expo/vector-icons'
import { Button, Divider } from '@rneui/base'
import UploadInput from '../../components/UploadInput'
import * as ImagePicker from 'expo-image-picker';
import InputsText from '../../components/InputsText'
import Inputs from '../../components/Inputs'
import NotEditableInput from '../../components/NotEditableInput'
import InputCountries from '../../components/InputCountries'
import Buttons from '../../components/Buttons'


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


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
  
    if (!result.canceled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setSelectedImage(selectedAsset.uri);
  
      const uriComponents = selectedAsset.uri.split('/');
      const fileName = uriComponents[uriComponents.length - 1];
      setFileName(fileName);
    }
  };
  const pickImage2 = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
  
    if (!result.canceled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setSelectedImage2(selectedAsset.uri);
  
      const uriComponents = selectedAsset.uri.split('/');
      const fileName = uriComponents[uriComponents.length - 1];
      setFileName2(fileName);
    }
  };

  
  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    setNationality(item.name)
    setCountry(item.name)
    setFlag(item.flag)
    setVisibleM(!visibleM);
    };
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null
  }
  return (
    <KeybordAvoidHome title={"My Profile"}>
      <View>
        {/* Profile Image */}
        <View style={{marginTop:verticalScale(20), alignItems:"center"}}>
          <Picturepprofile />
        </View>
 {/* Input Text */}
        <View >
        <View style={{marginTop:verticalScale(50), alignItems:"center"}}>
        <View style={{ flexDirection: "row", gap: 5, width:horizontalScale(315) }}>
              {/* First Name */}
             <InputsText placeholder={"Joe"} width={horizontalScale(155)} label={"First Name"} iconsLeft={<User color="black" />} />
              {/* Last Name */}
             <InputsText placeholder={"Smith"} width={horizontalScale(155)} label={"Last Name"} iconsLeft={<User color="black" />} />
             </View>
            <View style={{  marginTop: verticalScale(15),}}>
        <Inputs placeholder={"12345678"} label={"Phone Number"} countryCode={countryCode} number={number} onPress={()=>setVisibleM(!visibleM)} onChangeText={(e) => setNumber(e)} namecountry={flag} />
        </View>
        {/* Mobile Number */}
        <View style={{  marginTop: verticalScale(15),
    borderWidth: 1,
    width:horizontalScale(315),
    flexDirection: "row",
    borderRadius:8, backgroundColor:'#e3e3e3'}}>
          <View  style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 14 }}>
            🇹🇳
            </Text>
            <Text style={{ fontSize: 14 }}>
           +216
            </Text>
          </View>
          <View style={{ padding: 12, width: horizontalScale(150)}}>
            <TextInput
              defaultValue="123654478"
              style={ { fontFamily: fontGotham.medium,   borderLeftWidth: 1,
                paddingLeft: 20,
                fontSize: 14, }}
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
           backgroundColor:'#e3e3e3'
          }}
        >
          <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.regular}}>Mobile  Number</Text>
        </View>
        </View>
         {/* Birthday */}
         <InputsText label={"Birthdate *"} placeholder={"mm/dd/yyyy"} width={horizontalScale(315)} iconsRight={<CloseCircle color='black' />} iconsLeft={<CalendarSearch  color='black'/>} />
            {/* Email */}
            <InputsText label={"Email"} width={horizontalScale(315)} placeholder={"name@email.com"} iconsRight={<CloseCircle color='black' />} iconsLeft={<Sms color='black' />} />
            {/* Job Title */}
           <InputsText label={"Job Title"} placeholder={"Job Title"} width={horizontalScale(315)}iconsRight={<CloseCircle color='black' />}  iconsLeft={<SearchNormal color='black' />} />
            {/* Role */}
            <NotEditableInput placeholder={"Company Owner"} label={"Role *"} iconsRight={<CloseCircle color='black' />}/>
          {/* Branch */}
          <NotEditableInput width iconsLeft={<Shop color='black' />}  label={"Branch *"} placeholder={"Branch Name"} iconsRight={<CloseCircle color='black' />} />
            {/* Identity Card */}
           <InputsText label={"Identity Card"} placeholder={"12345678"} iconsLeft={<Hashtag color='black' />} width={horizontalScale(315)} iconsRight={<CloseCircle color='black' />} />
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
              <UploadInput selectedImage={selectedImage} uploadProgress={uploadProgress} pickImage={pickImage} fileName={fileName} />
              <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload Back Identity Card
      </Text>
              <UploadInput selectedImage={selectedImage2} uploadProgress={uploadProgress2} pickImage={pickImage2} fileName={fileName2} />
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
          </View>
 </KeybordAvoidHome>
  )
}

export default Profiles