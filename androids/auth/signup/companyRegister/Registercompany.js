import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Color from "../../../../utilities/Color";
import { Platform } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../utilities/Metrics";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../utilities/Fonts";
import ModalCountry from "../../../components/ModalCountry";
import KeyboardAvoid from "../../../components/KeyboardAvoid";
import { Button, Divider } from "@rneui/base";
import UploadInput from "../../../components/UploadInput";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { Flag, Hashtag, Location, ShopAdd } from "iconsax-react-native";

const Registercompany = ({ navigation }) => {
  const defaultCountryCode = "+216"
  const defaultFlag = "🇹🇳"
  const defaultCountryName = "Tunisia";
  const [number, setNumber] = useState("");

  const [visibled, setVisibled] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileName2, setFileName2] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgress2, setUploadProgress2] = useState(0);


  const SERVER_URL = 'URL_DU_SERVEUR'; // Remplacez par l'URL de votre serveur

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

  const uploadFile = async () => {
    if (!selectedImage) {
      alert('Veuillez sélectionner une image avant de téléverser.');
      return;
    }

    const uriParts = selectedImage.split('.');
    const fileType = uriParts[uriParts.length - 1];

    const formData = new FormData();
    formData.append('file', {
      uri: selectedImage,
      name: `file.${fileType}`,
      type: `image/${fileType}`,
    });

    try {
      const response = await axios.post(SERVER_URL, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setUploadProgress(progress);
        },
      });

      // Gérer la réponse du serveur ici
      console.log('Réponse du serveur :', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du fichier :', error);
    }
  };

  const onCountryChange = (item) => {
    setNameCountry(item.name);
    setCountryCode(item.dial_code);
    setFlag(item.flag)
    setVisibleModal(!visibleModal);
    };


  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeyboardAvoid>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={moderateScale(30)} color={Color.light.black} />
          </Pressable>
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontSize:moderateScale(32), fontFamily: fontGotham.medium }}>
                Company{" "}
              </Text>
              <Text style={{ fontSize:moderateScale(32), fontFamily: fontGotham.medium }}>
                Registration{" "}
              </Text>
            </View>
            <View  >
              <View style={{alignItems:"center"}}>
              {/* Comany Name */}
              <View style={{ marginTop: 35 }}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:8,
                    width: horizontalScale(315),
                  }}
                >
                  <ShopAdd  color="black"/>
                  <TextInput
                    placeholder="Top Gear"
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      width: horizontalScale(315),
                      fontFamily: fontGotham.regular,
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
                  Company Name
                </Text>
              </View>
              {/* Company Phone Number */}
              <View style={{  marginTop: verticalScale(15),
    borderWidth: 1,
    width:horizontalScale(315),
    flexDirection: "row",
    borderRadius:8}}>
          <TouchableOpacity onPress={()=>setVisibleModal(!visibleModal)} style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 14 }}>
              {flag}
            </Text>
            <AntDesign name="caretdown" size={14} color="black" />
            <Text style={{ fontSize: 14 }}>
            {countryCode}
            </Text>
          </TouchableOpacity>
          <View style={{ padding: 12, width: horizontalScale(150)}}>
            <TextInput
              style={ { fontFamily: fontGotham.medium,   borderLeftWidth: 1,
                paddingLeft: 20,
                fontSize: 14, }}
              onChangeText={(e) => setNumber(e)}
              value={number}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        <View
          style={{
            position: "absolute",
            marginTop: -11,
            marginLeft: 20,
            width: horizontalScale(130),
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.regular}}>Your mobile Number</Text>
        </View>
        </View>
              {/* Comapny Registration Number */}
              <View style={{ marginTop: 25 }}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:8,
                    width: horizontalScale(315),

                  }}
                >
              
                  <Hashtag color="black" />
                  <TextInput
                    placeholder="12345/M/A/E/001"
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: horizontalScale(315),
                      padding: 12,
                    }}
                  />
                </View>
                {/* <Text>Supporting text</Text> */}
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
                  Company Registration Number
                </Text>
              </View>
              {/* Company Location */}
              <View style={{ marginTop: 25 }}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:8,
                    width: horizontalScale(315),

                  }}
                >
                  <Location color="black" />
                  <TextInput
                    placeholder="Location"
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      width: horizontalScale(315),
                      fontFamily: fontGotham.regular,
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
                    fontSize:12
                  }}
                >
                  Company Location
                </Text>
              </View>
              {/* Country */}
              <View style={{ marginTop: 25 }}>
                <Pressable
                  onPress={() => setVisibleModal(!visibleModal)}
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    justifyContent: "space-between",
                    borderRadius:8,
                    width: horizontalScale(315),
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Flag color="black" />
                    <Text
                      style={{
                        fontSize: 20,
                        paddingLeft: 10,
                        width: horizontalScale(315),
                        fontFamily: fontGotham.regular,
                        padding: 12,
                      }}
                    >
                      {namecountry}
                    </Text>
                  </View>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="black"
                    style={{ marginLeft: -80, padding:5 }}
                  />
                </Pressable>
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
                  Country
                </Text>
              </View>
              {/* Billing Adress */}
              <View style={{ marginTop: 25 }}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 6,
                    borderRadius:8,
                    width: horizontalScale(315),

                  }}
                >
                  <Location color="black" />
                  <TextInput
                    placeholder="Location"
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      fontFamily: fontGotham.regular,
                      width: 339,
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
                  Billing Adress
                </Text>
              </View>
              </View>
              <Divider color="black" style={{marginTop:verticalScale(30)}} />
              <View style={{alignItems:"center"}}>
              <Text style={{ fontFamily: fontGotham.bold, fontSize: moderateScale(16), marginTop:30 }}>
        Upload Licence file
      </Text>
              <UploadInput selectedImage={selectedImage} uploadProgress={uploadProgress} pickImage={pickImage} fileName={fileName} />
              <Text style={{ fontFamily: fontGotham.bold, fontSize: moderateScale(16), marginTop:30 }}>
        Upload VAT file
      </Text>
              <UploadInput selectedImage={selectedImage2} uploadProgress={uploadProgress2} pickImage={pickImage2} fileName={fileName2} />
              <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
              <Button
                onPress={() => navigation.navigate("registrationComplete")}
                title={"Continue"}
                buttonStyle={{ height:60, backgroundColor: Color.light.main, borderRadius:8 }}
                titleStyle={{
                  fontSize: moderateScale(16),
                  color: "black",
                  fontFamily: fontGotham.medium,
                }}
                containerStyle={{width:horizontalScale(315)}}
              />
            </View>
            </View>

          </View>
        </View>
        </View>
        <ModalCountry
          value={value}
          isVisible={visibleModal}
          hideModal={() => setVisibleModal(!visibleModal)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange(item)}
        />
      </View>
    </KeyboardAvoid>
  );
};

export default Registercompany;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.light.themeColor,
    
  },
  secondContainer: {
    marginLeft: 20,
    marginTop: verticalScale(20),
    marginRight: 20,
  },
});
