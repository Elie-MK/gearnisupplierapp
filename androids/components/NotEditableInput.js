import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { horizontalScale } from '../../utilities/Metrics'
import { useCustomFonts } from '../../utilities/Fonts';

const NotEditableInput = ({width,iconsLeft, iconsRight, label, placeholder, editable,defaultValue }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={{ marginTop: 30,  }}>
      <View style={{backgroundColor:"#fff"}}>
    <View
      style={{
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 6,
        borderRadius:5,
        width:horizontalScale(315),
        borderColor:"#dfdfdf"
      }}
    >

      {iconsLeft}
      <TextInput
      
        placeholder={placeholder}
        editable={false}
        defaultValue={defaultValue}
        style={{
          fontSize: 14,
          paddingLeft: 10,
          fontFamily: fontGotham.regular,
          color:"#dfdfdf",
          width: horizontalScale(300),
          height:56,
        }}
      />
      <View style={{marginLeft:width?-50:-25}}>
       {iconsRight}
      </View>
    </View>
    <Text
      style={{
        backgroundColor: '#fff',
        padding: 2,
        position: "absolute",
        marginTop: -12,
        marginLeft: 10,
        fontSize:12,
        color:"#dfdfdf"
      }}
    >
      {label}
    </Text>
  </View>
  </View>
  )
}

export default NotEditableInput