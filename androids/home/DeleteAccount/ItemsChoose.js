import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { CheckBox, Icon } from '@rneui/base'
import Color from '../../../utilities/Color';
import { useCustomFonts } from '../../../utilities/Fonts';
import { TouchableOpacity } from 'react-native';

const ItemsChoose = ({title, check, onPress, select}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection:"row", alignItems:"center"}}>
       <CheckBox
      center
      
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color={Color.light.main}
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color={Color.light.main}
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      checked={check}
      onPress={onPress}
    />
    <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ItemsChoose