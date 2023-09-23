import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from '../../utilities/Metrics'
import { useCustomFonts } from '../../utilities/Fonts';

const MenuItems = ({touchable,onPress, title,items, icons }) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <TouchableOpacity style={{backgroundColor:touchable===items?"#FFFBF0":null, height:56, width:351}}  onPress={onPress}>
    <View style={{flexDirection:"row", alignItems:"center", gap:10, marginTop:10, marginLeft:12}}>
    {icons}
    <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>{title}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default MenuItems