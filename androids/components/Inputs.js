import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useCustomFonts } from '../../utilities/Fonts';
import { horizontalScale, verticalScale } from '../../utilities/Metrics';
import { AntDesign } from '@expo/vector-icons';
import Color from '../../utilities/Color';

const Inputs = ({placeholder,namecountry, Error, countryCode, number, onChangeText, onPress, label}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{    
        borderWidth: 1,
        width:horizontalScale(315),
        flexDirection: "row",
          height:56,
        borderRadius:8, borderColor:isFocused? Color.light.main:Error == true ? "red" : "black"}}>
          <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
            <Text style={{ fontSize: 14 }}>
              {namecountry}
            </Text>
            <Text style={{ fontSize: 14 }}>
            {countryCode}
            </Text>
          </TouchableOpacity>
          <View style={{ padding: 12, width: horizontalScale(150)}}>
            <TextInput
              style={{fontFamily: fontGotham.book,     borderLeftWidth: 1,
                paddingLeft: 20,
                fontSize: 14, }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              onChangeText={onChangeText}
              placeholder={placeholder}
              value={number}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        <View
          style={{
            position: "absolute",
            marginTop: -11,
            marginLeft: 20,
            padding:2,
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.book, color:Error == true ? "red" : "black"}}>{label}</Text>
        </View>
        </View>
  )
}

export default Inputs