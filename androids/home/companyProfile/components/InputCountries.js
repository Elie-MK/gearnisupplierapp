import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useCustomFonts } from '../../../../utilities/Fonts';
import { horizontalScale, moderateScale } from '../../../../utilities/Metrics';
import { MaterialIcons } from '@expo/vector-icons';
import { Flag } from 'iconsax-react-native';

const InputCountries = ({press, country, label, }) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null
    }
  return (
    <View style={{ marginTop: 15 }}>
    <Pressable onPress={press}
      style={{
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 6,
        borderRadius:5,
        padding:12,
        justifyContent: "space-between",
        width:horizontalScale(315)
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Flag color='black' />
        <Text
          style={{
            fontSize:moderateScale(14),
            paddingLeft: 10,
            fontFamily: fontGotham.regular,
            width: horizontalScale(140),
          }}
        >
          {country}
        </Text>
      </View>
     <MaterialIcons
        name="keyboard-arrow-down"
        size={24}
        color="black"
      />
    </Pressable>
    <Text
      style={{
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

export default InputCountries