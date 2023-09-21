import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCustomFonts } from '../../utilities/Fonts';
import { horizontalScale, verticalScale } from '../../utilities/Metrics';
import { AntDesign } from '@expo/vector-icons';
import Color from '../../utilities/Color';

const Inputs = ({namecountry, countryCode, number, onChangeText, onPress, label}) => {
    
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{    
        borderWidth: 1,
        width:horizontalScale(315),
        height:56,
        flexDirection: "row",
        borderRadius:8}}>
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
              style={{fontFamily: fontGotham.medium,     borderLeftWidth: 1,
                paddingLeft: 20,
                fontSize: 14, }}
              onChangeText={onChangeText}
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
            height:16,
            backgroundColor: Color.light.themeColor,
          }}
        >
          <Text style={{textAlign:"center", fontSize:12, fontFamily:fontGotham.regular}}>{label}</Text>
        </View>
        </View>
  )
}

export default Inputs