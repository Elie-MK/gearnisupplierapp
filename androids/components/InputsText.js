import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCustomFonts } from '../../utilities/Fonts';
import { horizontalScale } from '../../utilities/Metrics';

const InputsText = ({width,iconsLeft,onChangeText,value, hide, iconsRight, label, placeholder, editable,defaultValue }) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
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
        width:width
      }}
    >

      {iconsLeft}
      <TextInput
        placeholder={placeholder}
        editable={editable}
        onChangeText={onChangeText}
        value={value}
        defaultValue={defaultValue}
        style={{
          fontSize: 14,
          paddingLeft: 10,
          fontFamily: fontGotham.regular,
          width: 315,
          height:56,
        }}
      />
      <TouchableOpacity style={{marginLeft:15}}>
       {iconsRight}
      </TouchableOpacity>
    </View>
    <Text
      style={{
        display:hide?"none":"flex",
        backgroundColor: "white",
        padding: 2,
        position: "absolute",
        marginTop: -12,
        marginLeft: 10,
        fontSize:12
      }}
    >
      {label}
    </Text>
  </View>
  )
}

export default InputsText