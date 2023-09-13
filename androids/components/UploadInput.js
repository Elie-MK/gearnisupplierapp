import { View, Text, TouchableOpacity, Image,} from "react-native";
import React, { useState } from "react";
import { useCustomFonts } from "../../utilities/Fonts";
import Color from "../../utilities/Color";
import { ProgressBar } from "react-native-paper";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
const SERVER_URL = 'URL_DU_SERVEUR'; // Remplacez par l'URL de votre serveur

const UploadInput = ({selectedImage, fileName, pickImage, uploadProgress}) => {

// console.log(fileName);
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View >
     
      <View
        style={{
          borderWidth: 3,
          marginTop: 20,
          borderColor: Color.light.main,
          padding: 5,
          borderRadius :8 ,
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
                <ProgressBar  progress={0.5} style={{marginTop:5}} color={Color.light.main} />
              </View>
              <View >
              {uploadProgress > 0 && (
        <Text >{` ${uploadProgress.toFixed(2)}%`}</Text>
      )}
              </View>
            </View>
          </TouchableOpacity>
      {/* <Button title="Téléverser" onPress={uploadFile} /> */}
          <TouchableOpacity style={{marginLeft:-10}}>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/close-circle.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UploadInput;
