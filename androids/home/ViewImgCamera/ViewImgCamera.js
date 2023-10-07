import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Buttons from '../../components/Buttons';
import HeaderHome from '../../components/HeaderHome';

const ViewImgCamera = ({route, navigation}) => {
    console.log()
  return (
    <HeaderHome title={"Upload Image"} onPress={()=>navigation.goBack()} >
       
      <View>
      <View style={{marginTop:120, alignItems:"center", }}>
      <Image  source={{uri:`${route.params.data}`}} style={{width:"70%", height:"80%"}}  />

      </View>
      <View style={{alignItems:"center"}}>
      <Buttons title={"Upload Images"} />
      </View>
      </View>
    </HeaderHome>
  )
}

export default ViewImgCamera