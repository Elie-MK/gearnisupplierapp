import { View, Text } from 'react-native'
import React from 'react'
import { horizontalScale } from '../../utilities/Metrics'
import { ActivityIndicator } from 'react-native-paper'
import Color from '../../utilities/Color'

const ActivityIndicators = () => {
  return (
    <View style={{width:horizontalScale(315), borderRadius:4, backgroundColor:Color.light.main, height:60}}>
    <View style={{backgroundColor:"white", opacity:0.5,  width:horizontalScale(315), height:60}}>
    <ActivityIndicator animating={true} color={Color.light.black} style={{marginTop:15}}/>
    </View>
  </View>
  )
}

export default ActivityIndicators