import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Global from '../../components/Global'
import { MaterialIcons } from '@expo/vector-icons'
import { useCustomFonts } from '../../../utilities/Fonts'
import Color from '../../../utilities/Color'
import HeaderHome from '../../components/HeaderHome'
import InputsText from '../../components/InputsText'
import { CloseCircle, Location, Shop, User, UserTick } from 'iconsax-react-native'
import { horizontalScale } from '../../../utilities/Metrics'
import NotEditableInput from '../../components/NotEditableInput'
import { useState } from 'react'

const AddBranches = ({navigation}) => {
  const [branchText, setBranchText]=useState('')
  const [adressText, setAdressText]=useState('')


  return (
    <HeaderHome title={"Add Branch"} onPress={()=>navigation.goBack()}>
      <View>
        <View style={{marginTop:50, marginLeft:10, marginRight:20, alignItems:"center"}}>
        {/* branch name */}
        <InputsText onChangeText={(e)=>setBranchText(e)} value={branchText}  width={horizontalScale(315)} label={"Branch Name"} iconsLeft={<Shop color='black' />} />
        {/* Adress */}
        <InputsText onChangeText={(e)=>setAdressText(e)} value={adressText} width={horizontalScale(315)} label={"Adress"} iconsLeft={<Location color='black' />} />
        <NotEditableInput width={horizontalScale(315)} label={"Manager Assign"} iconsLeft={<UserTick color='#dfdfdf' />}  iconsRight={<CloseCircle color='#dfdfdf' />}  />
        <InputsText hide width={horizontalScale(315)}  iconsLeft={<User color='black' />} iconsRight={<CloseCircle color='black' />} />
        <InputsText hide width={horizontalScale(315)}  iconsLeft={<User color='black' />} iconsRight={<CloseCircle color='black' />} />
        </View>

      </View>
    </HeaderHome>
  )
}

export default AddBranches