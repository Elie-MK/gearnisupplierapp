import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import Color from '../../utilities/Color'
import { useCustomFonts } from '../../utilities/Fonts'
import { horizontalScale, moderateScale } from '../../utilities/Metrics'

const Buttons = ({title, handleSubmit}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  
  return (
    <Button
        title={title}
        buttonStyle={{ backgroundColor: Color.light.main, height:60}}
        titleStyle={{
          color: Color.light.black,
          fontFamily: fontGotham.medium,
          fontSize:moderateScale(15)
        }}
        containerStyle={{width:horizontalScale(315), borderRadius:4, }}
        onPress={handleSubmit}
      />
  )
}

export default Buttons