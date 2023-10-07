import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import KeybordAvoidHome from "../../components/KeybordAvoidHome";
import Picturepprofile from "../../components/Picturepprofile";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utilities/Metrics";
import Inputs from "./components/Inputs";
import {
  CalendarSearch,
  CloseCircle,
  Flag,
  Hashtag,
  Shop,
  User,
  Verify,
  People,
  SearchNormal1,
  Sms,
  Location,
} from "iconsax-react-native";
import { useCustomFonts } from "../../../utilities/Fonts";
import Dropdowns from "./components/Dropdowns";
import ModalCountry from "../../components/ModalCountry";
import InputsNumber from "./components/InputsNumber";
import * as ImagePicker from "expo-image-picker";
import { Divider } from "@rneui/base";
import UploadInput from "../../components/UploadInput";
import { Button } from "@rneui/themed";
import Color from "../../../utilities/Color";
import InputCountries from "../../components/InputCountries";
import InputsText from "../../components/InputsText";
import Buttons from "../../components/Buttons";
import NotEditableInput from "../../components/NotEditableInput";
import EmptyUploadButton from "../../components/EmptyUploadButton";
import ModalChooseUpload from "../../components/ModalChooseUpload";
import { Camera } from "expo-camera";
import * as DocumentPicker from 'expo-document-picker';


const Companyprofile = ({ navigation }) => {
  const defaultCountryCode = "+216";
  const defaultCountry = "Tunisia";
  const defaultFlag = "🇹🇳";
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [countryCode2, setCountryCode2] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [flag2, setFlag2] = useState(defaultFlag);
  const [country, setCountry] = useState(defaultCountry);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [uploadProgress2, setUploadProgress2] = useState(0);
  const [fileName2, setFileName2] = useState(null);
  const [visibled, setVisibled] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraImg, setCameraImg] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);




  const HandleOpen = () => {
    setVisibled(!visibled);
  };
 

  const pickImage = async (imgSelected, fileNamesSeleted) => {
    setVisibled(!visibled)
    if(visible == false){
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
  
      if (!result.canceled && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        imgSelected(selectedAsset.uri);
  
        const uriComponents = selectedAsset.uri.split("/");
        const fileName = uriComponents[uriComponents.length - 1];
        fileNamesSeleted(fileName);
      }
    }
  };

  const allowedExtensions = ['.pdf', '.jpeg', '.jpg', '.png'];

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled) {
        const uriParts = result.assets[0].uri.split('.');
        const fileExtension = uriParts[uriParts.length - 1].toLowerCase();

        if (allowedExtensions.includes(`.${fileExtension}`)) {
          setSelectedDocument(result);
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

  // console.log("Doc ", selectedDocument );

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
  
// console.log(selectedDocument);
  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    // setNationality(item.name)
    setCountry(item.name);
    setFlag(item.flag);
    setVisible(!visible);
  };

  const onCountryChange2 = (item) => {
    setCountryCode2(item.dial_code);
    setCountry(item.name);
    setFlag2(item.flag);
    setVisible2(!visible2);
  };

  const handleClear = (namesFiles, imagesSelected) => {
    namesFiles(null);
    imagesSelected(null);
  };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeybordAvoidHome nav={() => navigation.goBack()} title={"Company Profile"}>
      <View>
        <View style={{ alignItems: "center", marginTop: verticalScale(20) }}>
          <Picturepprofile />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
            }}
          >
            <Text style={{ fontFamily: fontGotham.medium }}>Verified</Text>
            <Verify color="blue" />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View>
            <NotEditableInput
              width={horizontalScale(315)}
              label={"Company Name *"}
              iconsLeft={<Shop color="#dfdfdf" />}
              placeholder={"Input"}
              editable={false}
            />
          </View>
          <View>
            <NotEditableInput
              width={horizontalScale(315)}
              label={"Company Owner Full Name *"}
              iconsLeft={<User color="#dfdfdf" />}
              placeholder={"Input"}
              editable={false}
            />
          </View>

          <View>
            <InputsText
              width={horizontalScale(315)}
              label={"Tax Registration Number *"}
              iconsLeft={<Hashtag color="black" />}
              placeholder={"Input"}
              defaultValue={"123456987/M/A/E/001"}
            />
          </View>
          <View>
            <Dropdowns
              icons={() => <People color="black" style={{ marginRight: 10 }} />}
              label={"Number of Employees"}
            />
          </View>
          <View>
            <Dropdowns
              icons={() => (
                <SearchNormal1 color="black" style={{ marginRight: 10 }} />
              )}
              label={"Industry"}
            />
          </View>

          <View>
            <InputsNumber
              label={"Phone Number"}
              flag={flag}
              countryCode={countryCode}
              defaultValue={"123456789"}
              onChangeNumber={(e) => setValue(e)}
              press={() => setVisible(!visible)}
            />
          </View>
          <View>
            <InputsNumber
              label={"Mobile Number *"}
              flag={flag2}
              countryCode={countryCode2}
              defaultValue={"123456789"}
              onChangeNumber={(e) => setValue2(e)}
              press={() => setVisible2(!visible2)}
            />
          </View>
          <View>
            <InputsText
              width={horizontalScale(315)}
              label={"Email *"}
              iconsLeft={<Sms color="black" />}
              placeholder={"Input"}
              defaultValue={"name@email.com"}
            />
          </View>
          <View>
            <InputCountries
              label={"Country of residence *"}
              country={country}
              press={(item) => onCountryChange(item)}
            />
          </View>
          <View>
            <InputsText
              width={horizontalScale(315)}
              label={"Physical adress *"}
              iconsLeft={<Location color="black" />}
              defaultValue={"tunis tunisie "}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Divider
            color="black"
            width={2}
            style={{ marginTop: 30, width: horizontalScale(315) }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <View>
            <Text
              style={{
                fontFamily: fontGotham.bold,
                fontSize: 16,
                marginTop: 30,
              }}
            >
              Upload VAT file*
            </Text>
           {fileName | (selectedImage === null) ? (
              <EmptyUploadButton onPress={HandleOpen} />
            ) : (
              <UploadInput
                selectedImage={selectedImage}
                percent={0.1}
                uploadProgress={uploadProgress}
                clear={() => handleClear(setSelectedImage, setFileName)}
                pickImage={()=>pickImage(setSelectedImage, setFileName)}
                fileName={fileName}
              />
            )}
          </View>
          <View>
            <Text
              style={{
                fontFamily: fontGotham.bold,
                fontSize: 16,
                marginTop: 30,
              }}
            >
              Upload License file*
            </Text>
            {fileName2 | (selectedImage2 === null) ? (
              <EmptyUploadButton onPress={()=>HandleOpen(setSelectedImage, setFileName)} />
            ) : (
              <UploadInput
                selectedImage={selectedImage2}
                uploadProgress={uploadProgress2}
                clear={() => handleClear(setSelectedImage2, setFileName2)}
                pickImage={() => pickImage(setSelectedImage2, setFileName2)}
                fileName={fileName2}
              />
            )}
          </View>

          <View
            style={{ marginTop: 30, marginBottom: 20, alignItems: "center" }}
          >
            <Buttons title={"Save"} />
          </View>
        </View>
        {/* <Camera ref={ref=>setCamera(ref)} type={type} /> */}
        <ModalCountry
          value={value}
          isVisible={visible}
          hideModal={() => setVisible(!visible)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange(item)}
        />
        <ModalCountry
          value={value2}
          isVisible={visible2}
          hideModal={() => setVisible2(!visible2)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange2(item)}
        />
        <ModalChooseUpload
          onGallery={()=>pickImage(setSelectedImage, setFileName)}
          onCamera={pickCamera}
          onFile={pickDocument}
          visible={visibled}
          cancelBtn={() => setVisibled(!visibled)}
        />
        {/* <ModalChooseUpload
          onGallery={()=>pickImage(setSelectedImage2, setFileName2)}
          onCamera={pickCamera}
          onFile={pickDocument}
          visible={visibled}
          cancelBtn={() => setVisibled(!visibled)}
        /> */}
  
      </View>
    </KeybordAvoidHome>
  );
};

export default Companyprofile;
