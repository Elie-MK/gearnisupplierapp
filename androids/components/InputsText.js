import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCustomFonts } from '../../utilities/Fonts';
import { horizontalScale } from '../../utilities/Metrics';

const InputsText = ({onPress, color, borderColor,padding,width,iconsLeft,onChangeText,value, hide, iconsRight, label, placeholder, editable,defaultValue }) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={{ marginTop: 30 }}>
    <View
      style={{
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 6,
        borderRadius:5,
        width:width,
        borderColor:borderColor
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
          paddingRight:padding?230:60,
          fontFamily: fontGotham.book,
          width: horizontalScale(300),
          height:56,
          color:color
         
        }}
      />
      <TouchableOpacity onPress={onPress} style={{marginLeft:-50}}>
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