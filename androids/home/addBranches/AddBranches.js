import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Global from '../../components/Global'
import { MaterialIcons } from '@expo/vector-icons'
import { useCustomFonts } from '../../../utilities/Fonts'
import Color from '../../../utilities/Color'

const AddBranches = () => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Global>
      <View>
        {/* Header */}
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={{fontFamily:fontGotham.book, fontSize:14}}>Add Branch</Text>
          </View>
          <View>
          </View>
        </View>

        <View style={{marginTop:50, marginLeft:10, marginRight:20,}}>
          <Text style={{fontFamily:fontGotham.medium, fontSize:16}}>Branch location</Text>
          <View style={{marginTop:17,justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
            <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>145 Balqees, Road, Sanaiya Riyad</Text>
            <TouchableOpacity>
            <Text style={{fontSize:14, fontFamily:fontGotham.regular, color:Color.light.main}}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </Global>
  )
}

export default AddBranches