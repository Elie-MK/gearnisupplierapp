import { View, Text, TouchableOpacity, Image,} from "react-native";
import React, { useState } from "react";
import { useCustomFonts } from "../../utilities/Fonts";
import Color from "../../utilities/Color";
import { ProgressBar } from "react-native-paper";
import { horizontalScale } from "../../utilities/Metrics";
import { CloseCircle } from "iconsax-react-native";
const SERVER_URL = 'URL_DU_SERVEUR'; // Remplacez par l'URL de votre serveur

const UploadInput = ({selectedImage, fileName, percent, pickImage, uploadProgress, clear}) => {

// console.log(fileName);
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View >
     
      <View
        style={{
          borderWidth: 2,
          marginTop: 15,
          borderColor: Color.light.main,
          padding: 5,
          borderRadius :8 ,
          width:horizontalScale(315)
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems:"center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row", alignItems:"center", gap:10 }} onPress={pickImage}>
            <View>
            {selectedImage && (
        <Image  width={40}
        height={40} source={{ uri: selectedImage }}  />
      )}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap:80
              }}
            >
              <View>
                <Text style={{fontSize:10}}>{fileName}</Text>
                <ProgressBar  progress={uploadProgress/1.0} style={{marginTop:5}} color={Color.light.main} />
              </View>
              <View >
              {uploadProgress > 0 && (
        <Text >{` ${uploadProgress.toFixed(2)}%`}</Text>
      )}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:-40, padding:5}} onPress={clear}>
         <CloseCircle color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UploadInput;
