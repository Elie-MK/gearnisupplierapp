import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../../../../utilities/Color";
import { horizontalScale, moderateScale, verticalScale } from "../../../../../utilities/Metrics";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../../../../utilities/Fonts";
import ModalCountry from "../../../../components/ModalCountry";
import KeyboardAvoid from "../../../../components/KeyboardAvoid";
import {  Divider } from "@rneui/base";
import UploadInput from "../../../../components/UploadInput";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { Hashtag, Location, ShopAdd } from "iconsax-react-native";
import InputsText from "../../../../components/InputsText";
import Inputs from "../../../../components/Inputs";
import InputCountries from "../../../../components/InputCountries";
import Buttons from "../../../../components/Buttons";
import EmptyUploadButton from "../../../../components/EmptyUploadButton";
import ModalChooseUpload from "../../../../components/ModalChooseUpload";
import { Camera } from "expo-camera";
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { privateKeys } from "../../../../../utilities/privateKeys";

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
  const [modalOpen, setModalOpen]=useState(false)
  const [showOpen, setShowOpen]=useState(false)
  const [modalShow, setModalShow]=useState(false)
  const [modalShow2, setModalShow2]=useState(false)
  // Datas form
const [nameCompany, setNameCompany] = useState("");
const [companyRegisNumber, setCompanyRegisNumber] = useState("");
const [companyLocation, setCompanyLocation] = useState("");
const [billingAdress, setBillingAdress] = useState("");
const [token, setToken] = useState("");



const TOKEN = async ()=> {
  await AsyncStorage.getItem("access_token").then((result) => {
    if (result) {
      const storedData = JSON.parse(result);
        setToken(storedData.value);
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

const instance = axios.create({
  baseURL: "https://backend.gearni.com/",
  headers:{
     'Authorization':`Bearer ${token}`, 
     'Api-Key':`${privateKeys.API_KEY}`,
     'Content-Type':'multipart/form-data',
     'Accept':'application/json'
  }
});



  const pickImage = async (imgSelected, fileNamesSeleted) => {
    if(modalShow == true | showOpen== true){
      setModalShow(false)
      setShowOpen(false)
    }
    if(modalOpen == false){
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
    }
  };

  const allowedExtensions = ['.pdf', '.jpeg', '.jpg', '.png'];

  const pickDocument = async (Img, FileNames) => {
    if(modalShow == true | modalShow2== true){
      setModalShow(false)
      setModalShow2(false)
    }
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled) {
        const uriParts = result.assets[0].uri.split('.');
        const fileExtension = uriParts[uriParts.length - 1].toLowerCase();

        if (allowedExtensions.includes(`.${fileExtension}`)) {
          FileNames(result.assets[0].name);
          Img(fileExtension === "pdf"?require("../../../../../assets/PDFImg.png"):{uri:result.assets[0].uri} )
        
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

  // console.log("Doc ", selectedDocument.assets[0].name );

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

  const uploadFile = async () => {
    if (!selectedImage) {
      alert('Veuillez sélectionner une image avant de téléverser.');
      return;
    }

    const uriParts = selectedImage.split('.');
    const fileType = uriParts[uriParts.length - 1];
    const uriParts2 = selectedImage2.split('.');
    const fileType2 = uriParts2[uriParts2.length - 1];

    const formData = new FormData();
    formData.append('file', {
      uri: selectedImage,
      name: `file.${fileType}`,
      type: `image/${fileType}`,
    });
    formData.append('file', {
      uri: selectedImage2,
      name: `file.${fileType2}`,
      type: `image/${fileType2}`,
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

    const handleClear = (namesFiles, imagesSelected)=>{
      namesFiles(null)
      imagesSelected(null)
    }
      
    
   
    const handleSubmit = async () => {
      if (
        !nameCompany ||
        !number ||
        !companyRegisNumber ||
        !companyLocation ||
        !namecountry ||
        !billingAdress ||
        !selectedImage2 ||
        !selectedImage
      ) {
        alert("Veuillez remplir tous les champs");
        if (number.length < 8) {
          alert("Veuillez entrer un numéro de téléphone correct");
        }
      } else {
        const formData = new FormData();
        const uriParts = selectedImage.uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        const uriParts2 = selectedImage2.uri.split('.');
        const fileType2 = uriParts2[uriParts2.length - 1];
        const image1 = selectedImage.uri;
        const image2 = selectedImage2.uri;
    
        formData.append('commercialLicenceFile', {
          uri: image1,
          name: image1.split("/").pop(),
          type: `image/${fileType}`,
        });
    
        formData.append('vatNumberFile', {
          uri: image2,
          name: image1.split("/").pop(),
          type: `image/${fileType2}`,
        });
    
        const postDatas = formData; 
    
        postDatas.append("name", "Elie");
        postDatas.append("phoneNumber", "+21656373135");
        postDatas.append("taxRegistrationNumber", "5698855");
        postDatas.append("location", "tunisia");
        postDatas.append("country", "Tunis");
        postDatas.append("logo", "string");
        postDatas.append("mobileNumber", "+21656373135");
        postDatas.append("address", "tunisia");
    
        console.log(postDatas);
    
        try {
          const response = await instance.post("company/create", postDatas,
            {
              onUploadProgress: (progressEvent) => {
                const progress = (progressEvent.loaded / progressEvent.total) * 100;
                setUploadProgress(progress);
              },
          });
    
          if (response.status === 201) {
            console.log(response.data);
          } else {
            console.log("Réponse inattendue du serveur:", response);
          }
        } catch (error) {
          console.log("Erreur lors de l'envoi des données", error);
        }
      }
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
              <InputsText value={nameCompany} onChangeText={(n)=>setNameCompany(n)} label={"Conpany Name"} width={horizontalScale(315)} placeholder={"Top Gear"} iconsLeft={<ShopAdd color="black" />} />
              {/* Company Phone Number */}
              <View style={{  marginTop: verticalScale(30),}}>
        <Inputs  placeholder={"12345678"} label={"Company Phone Number"} countryCode={countryCode} namecountry={flag} number={number} onChangeText={(e) => setNumber(e)} onPress={()=>setOpen(!open)} />
        </View>
              {/* Comapny Registration Number */}
             <InputsText value={companyRegisNumber} onChangeText={(c)=>setCompanyRegisNumber(c)}  label={"Company Registration Number"} width={horizontalScale(315)}  placeholder={"1234567/M/A/E/001"}  iconsLeft={<Hashtag color="black" />} />
              {/* Company Location */}
              <InputsText value={companyLocation} onChangeText={(l)=>setCompanyLocation(l)} label={"Company Location"} iconsLeft={<Location color="black" />} placeholder={"Min Street 20 Mars 1956, Bardo"} width={horizontalScale(315)}  />
              {/* Country */}
              <InputCountries country={namecountry} label={"Country"} press={(item)=>onCountryChange(item)} />
              {/* Billing Adress */}
              <InputsText value={billingAdress} onChangeText={(b)=>setBillingAdress(b)} label={"Billing Adress"} width={horizontalScale(315)} iconsLeft={<Location color="black" />} placeholder={"Min Street 20 Mars 1956, Bardo"} />
              </View>
              <Divider color="black" style={{marginTop:verticalScale(30)}} />
              <View style={{alignItems:"center"}}>
   <View>
   <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload Licence file
      </Text>
      {
        fileName|selectedImage === null? <EmptyUploadButton  onPress={()=>setModalShow(!modalShow)} /> : <UploadInput clear={()=>handleClear(setFileName, setSelectedImage)} selectedImage={selectedImage} uploadProgress={uploadProgress} pickImage={()=>pickImage(setSelectedImage, setFileName)} fileName={fileName} />

      }
              <Text style={{ fontFamily: fontGotham.bold, fontSize: 16, marginTop:30 }}>
        Upload VAT file
      </Text>
      {
        fileName2|selectedImage2 ===null? <EmptyUploadButton onPress={()=>setModalShow2(!modalShow2)} />:<UploadInput clear={()=>handleClear(setFileName2, setSelectedImage2)} selectedImage={selectedImage2} uploadProgress={uploadProgress2} pickImage={()=>pickImage(setSelectedImage2, setFileName2)} fileName={fileName2} />

      }
   </View>
              <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
             <Buttons title={"Continue"} handleSubmit={handleSubmit} />
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
            <ModalChooseUpload
          onGallery={()=>pickImage(setSelectedImage, setFileName)}
          onCamera={pickCamera}
          onFile={()=>pickDocument(setSelectedImage, setFileName)}
          visible={modalShow}
          cancelBtn={() => setModalShow(!modalShow)}
        />
            <ModalChooseUpload
          onGallery={()=>pickImage(setSelectedImage2, setFileName2)}
          onCamera={pickCamera}
          onFile={()=>pickDocument(setSelectedImage2, setFileName2)}
          visible={modalShow2}
          cancelBtn={() => setModalShow2(!modalShow2)}
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
