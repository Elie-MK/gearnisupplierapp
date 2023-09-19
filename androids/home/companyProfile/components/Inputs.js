import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale } from '../../../../utilities/Metrics'
import { useCustomFonts } from '../../../../utilities/Fonts';

const Inputs = ({iconsLeft, iconsRight, label, placeholder, editable,defaultValue }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={{ marginTop: 15 }}>
    <View
      style={{
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 6,
        borderRadius:5,
        width:horizontalScale(315)
      }}
    >
    {iconsLeft}
      <TextInput
        placeholder={placeholder}
        editable={editable}
        defaultValue={defaultValue}
        style={{
          fontSize: moderateScale(14),
          paddingLeft: 10,
          fontFamily: fontGotham.regular,
          width: horizontalScale(315),
          padding: 12,
        }}
      />
      <TouchableOpacity style={{marginLeft:horizontalScale(-60)}}>
       {iconsRight}
      </TouchableOpacity>
    </View>
    <Text
      style={{
        backgroundColor: "white",
        padding: 2,
        position: "absolute",
        marginTop: -12,
        marginLeft: 10,
        fontSize:moderateScale(12)
      }}
    >
      {label}
    </Text>
  </View>
  )
}

export default Inputs