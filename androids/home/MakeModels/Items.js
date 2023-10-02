import { View, Text } from 'react-native'
import React from 'react'
import Color from '../../../utilities/Color'
import { horizontalScale } from '../../../utilities/Metrics'
import { Image } from 'react-native'
import { Setting2 } from 'iconsax-react-native'
import { useCustomFonts } from '../../../utilities/Fonts'
import { TouchableOpacity } from 'react-native'

const Items = ({onPress}) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{backgroundColor:Color.light.graylight, borderRadius:4, width:horizontalScale(315), height:80, justifyContent:"center"}}>
     <View style={{flexDirection:"row", justifyContent:"space-between",  alignItems:"center", marginLeft:15, marginRight:15}}>
     <View style={{flexDirection:"row", alignItems:"center", gap:20}}>
        <View>
          <Image style={{width:56, height:56}} source={require('../../../assets/mitsubishi.png')}  />
        </View>
        <View>
          <Text style={{fontFamily:fontGotham.medium}}>Mitsubishi</Text>
          <Text style={{fontFamily:fontGotham.regular, fontSize:12}}>36 Models</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Setting2 color='black' />
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default Items