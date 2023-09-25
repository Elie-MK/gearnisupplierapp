import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../utilities/Color'
import { horizontalScale } from '../../utilities/Metrics'
import { DocumentUpload } from 'iconsax-react-native'

const EmptyUploadButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 15,}}>
      <View style={{width:horizontalScale(315), borderWidth:2, height:56, borderColor:Color.light.main, borderRadius:4}}>
        <View style={{flexDirection:"row", alignItems:"center", marginLeft:15, marginTop:9, gap:20}}>
            <DocumentUpload color={Color.light.main} />
           <View>
           <Text style={{color:"#C4C4C4", fontSize:10}}>You can upload High resolution files</Text>
            <Text style={{color:"#C4C4C4", fontSize:10}}>(png, jpg, pdf)</Text>
           </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default EmptyUploadButton