import { View, Text } from 'react-native'
import React from 'react'
import { horizontalScale } from '../../utilities/Metrics'
import { ActivityIndicator } from 'react-native-paper'
import Color from '../../utilities/Color'

const ActivityIndicators = () => {
  return (
    <View style={{width:horizontalScale(315), borderWidth:1, borderRadius:4, padding:15, backgroundColor:"gray", height:60}}>
    <ActivityIndicator animating={true} color={Color.light.main}/>
  </View>
  )
}

export default ActivityIndicators