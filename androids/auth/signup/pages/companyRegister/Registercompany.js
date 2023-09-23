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
import Color from "../../../../../utilities/Color";
import { Platform } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../../utilities/Metrics";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../../utilities/Fonts";
import ModalCountry from "../../../../components/ModalCountry";
import KeyboardAvoid from "../../../../components/KeyboardAvoid";
import { Button, Divider } from "@rneui/base";
import UploadInput from "../../../../components/UploadInput";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { CloseCircle, Flag, Hashtag, Location, ShopAdd } from "iconsax-react-native";
import InputsText from "../../../../components/InputsText";
import Inputs from "../../../../components/Inputs";
import InputCountries from "../../../../components/InputCountries";
import Buttons from "../../../../components/Buttons";

const Registercompany = ({ navigation }) => {
  const defaultCountryCode = "+216"
  const defaultFlag = "🇹🇳"
  const defaultCountryName = "Tunisia";
  const [number, setNumber] = useState("");

  const [open, setOpen] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [namecountry, setNameCountry] = useState(defaultCountryName);
  const [value, setValue] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileName2, setFileName2] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgress2, setUploadProgress2] = useState(0);


  const SERVER_URL = 'URL_DU_SERVEUR'; 

  const pickImage = async (selected, fileNames) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
  
    if (!result.canceled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      selected(selectedAsset.uri);
  
      const uriComponents = selectedAsset.uri.split('/');
      const fileName = uriComponents[uriComponents.length - 1];
      fileNames(fileName);
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
    setOpen(!open);
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
            <AntDesign name="arrowleft" size={30} color={Color.light.black} />
          </Pressable>
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontSize:32, fontFamily: fontGotham.medium }}>
                Company{" "}
              </Text>
              <Text style={{ fontSize:32, fontFamily: fontGotham.medium }}>
                Registration{" "}
              </Text>
            </View>
            <View style={{}} >
              <View style={{alignItems:"center", marginTop:verticalScale(56)}}>
              {/* Comany Name */}
              <InputsText label={"Conpany Name"} width={horizontalScale(315)} placeholder={"Top Gear"} iconsLeft={<ShopAdd color="black" />} />
              {/* Company Phone Number */}
              <View style={{  marginTop: verticalScale(15),}}>
        <Inputs  placeholder={"12345678"} label={"Company Phone Number"} countryCode={countryCode} namecountry={flag} number={number} onChangeText={(e) => setNumber(e)} onPress={()=>setOpen(!open)} />
        </View>
              {/* Comapny Registration Number */}
             <InputsText iconsRight={<CloseCircle color="black" />} label={"Company Registration Number"} width={horizontalScale(315)}  placeholder={"1234567/M/A/E/001"}  iconsLeft={<Hashtag color="black" />} />
              {/* Company Location */}
              <InputsText label={"Company Location"} iconsLeft={<Location color="black" />} placeholder={"Min Street 20 Mars 1956, Bardo"} width={horizontalScale(315)}  />
              {/* Country */}
              <InputCountries country={namecountry} label={"Country"} press={(item)=>onCountryChange(item)} />
              {/* Billing Adress */}
              <InputsText label={"Billing Adress"} width={horizontalScale(315)} iconsLeft={<Location color="black" />} placeholder={"Min Street 20 Mars 1956, Bardo"} />
              </View>
              <Divider color="black" style={{marginTop:verticalScale(30)}} />
              <View style={{alignItems:"center"}}>
   <View>
   <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload Licence file
      </Text>
              <UploadInput selectedImage={selectedImage} uploadProgress={uploadProgress} pickImage={()=>pickImage(setSelectedImage, setFileName)} fileName={fileName} />
              <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload VAT file
      </Text>
              <UploadInput selectedImage={selectedImage2} uploadProgress={uploadProgress2} pickImage={()=>pickImage(setSelectedImage2, setFileName2)} fileName={fileName2} />
   </View>
              <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
             <Buttons title={"Continue"} handleSubmit={()=>navigation.navigate("registrationComplete")} />
            </View>
            </View>

          </View>
        </View>
        </View>
        <ModalCountry
          value={value}
          isVisible={open}
          hideModal={() => setOpen(!open)}
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
