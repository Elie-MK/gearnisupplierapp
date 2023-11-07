import { View, Text } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../utilities/Metrics'
import { TextInput } from 'react-native'
import { useCustomFonts } from '../../utilities/Fonts'

const NumberNotEditable = () => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null
    }
  return ( 
    <View style={{  marginTop: verticalScale(30),
        borderWidth: 1,
        width:horizontalScale(315),
        flexDirection: "row",
        borderColor:"#dfdfdf",
        borderRadius:8, backgroundColor:'white'}}>
              <View  style={{ flexDirection: "row", alignItems: "center", paddingLeft:10, gap:5, justifyContent:"center" }}>
                <Text style={{ fontSize: 14,  }}>
                🇹🇳
                </Text>
                <Text style={{ fontSize: 14, color:"#dfdfdf" }}>
               +216
                </Text>
              </View>
              <View style={{ width: horizontalScale(150)}}>
                <TextInput
                  defaultValue="123654478"
                  style={ { fontFamily: fontGotham.medium,   borderLeftWidth: 1, borderLeftColor:"#dfdfdf",
                    paddingLeft: 20,
                    color:"#dfdfdf",
                    fontSize: 14,  height:56, }}
                  editable={false}
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
               backgroundColor:'white'
              }}
            >
              <Text style={{textAlign:"center", color:"#dfdfdf", fontSize:12, fontFamily:fontGotham.regular}}>Mobile  Number</Text>
            </View>
            </View>
  )
}

export default NumberNotEditable