import { Dimensions, Pressable, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import Color from '../../../../utilities/Color'
import { verticalScale } from '../../../../utilities/Metrics'
import { AntDesign } from '@expo/vector-icons'
import CountryList from 'country-list-with-dial-code-and-flag'
import SvgUri from 'react-native-svg-uri'

const Adminregister = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
      <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>
        <View>
          <Text style={{fontSize:25, fontWeight:"600"}}>Admin </Text>
          <Text style={{fontSize:25, fontWeight:"600"}}>Registration </Text>
   
      
        </View>
      </View>
    </View>
  )
}

export default Adminregister

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height: Dimensions.get("screen").height,
  },
  secondContainer: {
    marginLeft: 20,
    marginTop: verticalScale(20),
    marginRight: 20,
  },
})