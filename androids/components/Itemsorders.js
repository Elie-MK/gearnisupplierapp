import { View, Text } from 'react-native'
import React from 'react'
import Color from '../../utilities/Color'
import { horizontalScale } from '../../utilities/Metrics'

const Itemsorders = () => {
  return (
    <View style={{marginTop:10, alignItems:"center"}}>
      <View style={{backgroundColor:"#FBFBFB", elevation:10, width:horizontalScale(315), flexDirection:"row", gap:10, alignItems:"center", height:80,padding:15, borderRadius:12}}>
        <View style={{backgroundColor:Color.light.main, width:40, height:40, borderRadius:99}}>
        <View style={{alignItems:"center", marginTop:3}}>
        <Text style={{color:Color.light.themeColor, fontSize:20}}>A</Text>

        </View>
        </View>
        <View>
            <Text>New orders Requests</Text>
            <Text>36</Text>
        </View>
      </View>
    </View>
  )
}

export default Itemsorders