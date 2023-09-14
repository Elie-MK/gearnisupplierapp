import { StyleSheet, Text, View,Dimensions, StatusBar } from 'react-native'
import React from 'react'
import Color from '../../utilities/Color'
import { verticalScale } from '../../utilities/Metrics'

const Global = ({children}) => {
  return (
    <View style={styles.container}>
    <View style={styles.secondContainer}>
      {children}
        </View>        
    </View>
  )
}

export default Global

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: Color.light.themeColor,
        height: Dimensions.get("screen").height,
      },
      secondContainer: {
        marginLeft: 20,
        marginTop: verticalScale(20),
      },
})