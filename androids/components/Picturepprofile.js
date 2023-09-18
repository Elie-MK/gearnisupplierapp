import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Gallery } from 'iconsax-react-native'
import Color from '../../utilities/Color'
import { useState } from 'react'
import * as ImagePicker from "expo-image-picker"

const Picturepprofile = () => {
    const [galleryPermission, setGalleryPermission]=useState(null)
    const [imageprofile, setImageProfile]=useState(null)

    useEffect(()=>{
      (async ()=>{
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
        setGalleryPermission(galleryStatus.status  === "granted")
      })
    },[])

    const pickImage = async ()=>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[4,3], 
        quality:1
      })
      console.log(result);
      if (!result.canceled) { 
        if (result.assets && result.assets.length > 0) {
          const selectedAsset = result.assets[0];
          setImageProfile(selectedAsset.uri);
        }
      }
    }
if(galleryPermission === false ){
  return alert("no asscess to internal storage")
}

  return (
    <View style={{flex:1}}>
        <View>
       <View style={{width:84, height:84, borderRadius:40, borderWidth:2, borderColor:Color.light.main}}>
     {
      imageprofile?   <Image  style={{borderRadius:40}} width={80} height={80} source={{
        uri: imageprofile
   }} /> :   <Image  width={80} height={80} source={{
    uri:"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
}} />
     }
       </View>
      <View style={{ flexDirection:"row", justifyContent:"center", position:"absolute", marginLeft:70}}>
           <TouchableOpacity onPress={pickImage}>
        <View style={{backgroundColor:Color.light.main, padding:10, borderRadius:22}}>
        <Gallery  color='black' size={20}/>
        </View>
        </TouchableOpacity>
      </View>
        </View>
    </View>
  )
}

export default Picturepprofile