import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { horizontalScale, verticalScale } from '../../../../utilities/Metrics'
import { useCustomFonts } from '../../../../utilities/Fonts'
import Color from '../../../../utilities/Color'

const InputsNumber = ({flag, label, countryCode, onChangeNumber, defaultValue, press }) => {

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={{  marginTop: verticalScale(15),
        borderWidth: 1,
        width:horizontalScale(315),
        flexDirection: "row",
        borderRadius:8}}>
              <TouchableOpacity onPress={press} style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
                <Text style={{ fontSize: 14 }}>
                {flag}
                </Text>
                <Text style={{ fontSize: 14 }}>
               {countryCode}
                </Text>
              </TouchableOpacity>
              <View style={{ padding: 12, width: horizontalScale(150)}}>
                <TextInput
                  defaultValue={defaultValue}
                  style={ { fontFamily: fontGotham.medium,   borderLeftWidth: 1,
                    paddingLeft: 20,
                    fontSize: 14, }}
                  onChangeText={onChangeNumber}
                  // value={number}
                  // editable={false}
                  maxLength={10}
                  keyboardType="numeric"
                />
              </View>
            <View
              style={{
                position: "absolute",
                marginTop: -9,
                marginLeft: 20,
                width: horizontalScale(100),
                backgroundColor: Color.light.themeColor,
              }}
            >
              <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.regular}}>{label}</Text>
            </View>
            </View>
  )
}

export default InputsNumber