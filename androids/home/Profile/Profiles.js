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
  const [visible, setVisible]=useState(false)
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
    setVisible(!visible);
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
        <View style={{ flexDirection: "row", gap: 9, width:horizontalScale(315) }}>
              {/* First Name */}
              <View style={{}}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:5,
                  }}
                >
              <User color='black' />
                  <TextInput
                    defaultValue='Elie'
                    style={{
                      fontSize: moderateScale(14),
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(125),
                      paddingRight:9,
                      padding: 12,
                    }}
                  />
                </View>
                <Text
                  style={{
                    backgroundColor: "white",
                    padding: 2,
                    position: "absolute",
                    marginTop: -12,
                    marginLeft: 10,
                    fontSize:moderateScale(12)
                  }}
                >
                  First Name *
                </Text>
              </View>
              {/* Last Name */}
              <View style={{}}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:5
                  }}
                >
                 <User color='black' />
                  <TextInput
                    defaultValue='MK'
                    style={{
                      fontSize:moderateScale(12),
                      paddingLeft: 10,
                      paddingRight:9,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(125),
                      padding: 12,
                    }}
                  />
                </View>
                <Text
                  style={{
                    backgroundColor: "white",
                    padding: 2,
                    position: "absolute",
                    marginTop: -12,
                    marginLeft: 10,
                    fontSize:moderateScale(12)
                  }}
                >
                  Last Name *
                </Text>
              </View>
            </View>
            <View style={{  marginTop: verticalScale(15),
    borderWidth: 1,
    width:horizontalScale(315),
    flexDirection: "row",
    borderRadius:8}}>
          <TouchableOpacity onPress={()=>setVisible(!visible)} style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 14 }}>
            {flag}
            </Text>
            <Text style={{ fontSize: 14 }}>
           {countryCode}
            </Text>
          </TouchableOpacity>
          <View style={{ padding: 12, width: horizontalScale(150)}}>
            <TextInput
              defaultValue="123654478"
              style={ { fontFamily: fontGotham.medium,   borderLeftWidth: 1,
                paddingLeft: 20,
                fontSize: 14, }}
              onChangeText={(e) => setNumber(e)}
              // value={number}
              // editable={false}
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
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.regular}}>Phone Number</Text>
        </View>
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
         <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
              <CalendarSearch color='black' />
                <TextInput
                  placeholder="mm/dd/yyyy"
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}
                />
                <TouchableOpacity style={{marginLeft:horizontalScale(-60)}}>
                 <CloseCircle color='black' />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Birthday
              </Text>
            </View>
            {/* Email */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
              <Sms color='black' />
                <TextInput
                  placeholder="email"
                  defaultValue='name@email.com'
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}
                />
                <TouchableOpacity style={{marginLeft:horizontalScale(-60)}}>
                 <CloseCircle color='black' />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Email
              </Text>
            </View>
            {/* Job Title */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
              <SearchNormal color='black' />
                <TextInput
                  placeholder="email"
                  defaultValue='Job Title'
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}
                />
                <TouchableOpacity style={{marginLeft:horizontalScale(-60)}}>
                 <CloseCircle color='black' />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Job Title
              </Text>
            </View>
            {/* Role */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
                <TextInput
                  placeholder="email"
                  editable={false}
                  defaultValue='Company Owner'
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}
                />
                <View style={{marginLeft:horizontalScale(-40)}}>
                 <CloseCircle color='black' />
                </View>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Role *
              </Text>
            </View>
          {/* Branch */}
          <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
                <Shop color='black' />
                <TextInput
                  placeholder="email"
                  editable={false}
                  defaultValue='Branch Name'
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}
                />
                <View style={{marginLeft:horizontalScale(-60)}}>
                 <CloseCircle color='black' />
                </View>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Branch *
              </Text>
            </View>
            {/* Identity Card */}
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  width:horizontalScale(315)
                }}
              >
                <Hashtag color='black' />
                <TextInput
                  defaultValue='123456974'
                  style={{
                    fontSize: moderateScale(14),
                    paddingLeft: 10,
                    fontFamily: fontGotham.regular,
                    width: horizontalScale(315),
                    padding: 12,
                  }}

                />
                <View style={{marginLeft:horizontalScale(-60)}}>
                 <CloseCircle color='black' />
                </View>
              </View>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:moderateScale(12)
                }}
              >
                Branch *
              </Text>
            </View>
            {/* Nationality */}
            <View style={{ marginTop: 25 }}>
              <Pressable onPress={()=>setVisible(!visible)}
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  padding:12,
                  justifyContent: "space-between",
                  width:horizontalScale(315)
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Flag color='black' />
                  <Text
                    style={{
                      fontSize:moderateScale(14),
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(140),
                    }}
                  >
                    {nationality}
                  </Text>
                </View>
               <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              </Pressable>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:12
                }}
              >
                Nationality
              </Text>
            </View>
        {/* Country */}
        <View style={{ marginTop: 25 }}>
              <Pressable onPress={()=>setVisible(!visible)}
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 6,
                  borderRadius:5,
                  padding:12,
                  justifyContent: "space-between",
                  width:horizontalScale(315)
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Flag color='black' />
                  <Text
                    style={{
                      fontSize:moderateScale(14),
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(140),
                    }}
                  >
                    {country}
                  </Text>
                </View>
               <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              </Pressable>
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 2,
                  position: "absolute",
                  marginTop: -12,
                  marginLeft: 10,
                  fontSize:12
                }}
              >
                Country
              </Text>
            </View>
        </View>
        <View style={{marginTop:10, alignItems:"center"}}>
        <Divider color='gray' width={2} style={{marginBottom:10, width:350}} />
        </View>
        <View style={{alignItems:"center"}}>
              <Text style={{ fontFamily: fontGotham.bold, fontSize: moderateScale(16), marginTop:30 }}>
        Upload Front Identity Card
      </Text>
              <UploadInput selectedImage={selectedImage} uploadProgress={uploadProgress} pickImage={pickImage} fileName={fileName} />
              <Text style={{ fontFamily: fontGotham.bold, fontSize: moderateScale(16), marginTop:30 }}>
        Upload Back Identity Card
      </Text>
              <UploadInput selectedImage={selectedImage2} uploadProgress={uploadProgress2} pickImage={pickImage2} fileName={fileName2} />
              <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
              <Button
               
                title={"Save"}
                buttonStyle={{ padding: 18, backgroundColor: Color.light.main, borderRadius:8 }}
                titleStyle={{
                  fontSize: moderateScale(16),
                  color: "black",
                  fontFamily: fontGotham.bold,
                }}
                containerStyle={{width:horizontalScale(315)}}
              />
            </View>
            </View>
        </View>
        <ModalCountry  value={value}
          isVisible={visible}
          hideModal={() => setVisible(!visible)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange(item)}  />
          </View>
 </KeybordAvoidHome>
  )
}

export default Profiles