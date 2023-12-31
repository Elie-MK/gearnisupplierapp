import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import Color from '../../utilities/Color'
import { useCustomFonts } from '../../utilities/Fonts'
import { horizontalScale, moderateScale } from '../../utilities/Metrics'
import { TouchableOpacity } from 'react-native'

const Buttons = ({title, handleSubmit, hide, hided, disabled}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  
  return (

    <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit} disabled={disabled}>
          <View style={{backgroundColor:hide?null:Color.light.main,
          borderColor:hided?"red":Color.light.main, opacity:disabled === true ? 0.4:null,
          borderWidth:2,
              width:horizontalScale(315),
              borderRadius :8,
              height:60, alignItems:"center", justifyContent:"center"}}>
           
           <Text style={{ color:hided?"red":hide?Color.light.main:Color.light.black,
              fontSize: 15,
              fontFamily: fontGotham.medium, textAlign:"center",}}>{title}</Text>
           </View>
          </TouchableOpacity>
    // <Button
    //     title={}
    //     disabled={disabled}
    //     buttonStyle={{ backgroundColor: Color.light.main, height:60}}
    //     titleStyle={{
    //       color: Color.light.black,
    //       fontFamily: fontGotham.medium,
    //       fontSize:moderateScale(15)
    //     }}
    //     containerStyle={{width:horizontalScale(315), borderRadius:4, }}
    //     onPress={handleSubmit}
    //   />
  )
}

export default Buttons