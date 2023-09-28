import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Global from '../../../components/Global'
import { MaterialIcons } from '@expo/vector-icons'
import { useCustomFonts } from '../../../../utilities/Fonts'
import Color from '../../../../utilities/Color'
import HeaderHome from '../../../components/HeaderHome'
import InputsText from '../../../components/InputsText'
import { CloseCircle, Location, SearchNormal1, Shop, User, UserSearch, UserTick } from 'iconsax-react-native'
import { horizontalScale } from '../../../../utilities/Metrics'
import NotEditableInput from '../../../components/NotEditableInput'
import { useState } from 'react'
import Dropdowns from '../../companyProfile/components/Dropdowns'
import Buttons from '../../../components/Buttons'
import KeybordAvoidHome from '../../../components/KeybordAvoidHome'
import Header from '../../../components/Header'

const AddBranches = ({navigation}) => {
  const [branchText, setBranchText]=useState('')
  const [adressText, setAdressText]=useState('')


  return (
    <Header   title={"Add Branch"} nav={()=>navigation.goBack()}>
      <View>
        <View style={{marginTop:50, marginLeft:10, marginRight:20, alignItems:"center"}}>
        {/* branch name */}
        <InputsText onChangeText={(e)=>setBranchText(e)} value={branchText}  width={horizontalScale(315)} label={"Branch Name"} iconsLeft={<Shop color='black' />} />
        {/* Adress */}
        <InputsText onChangeText={(e)=>setAdressText(e)} value={adressText} width={horizontalScale(315)} label={"Adress"} iconsLeft={<Location color='black' />} />
        <NotEditableInput width={horizontalScale(315)} label={"Manager Assign"} iconsLeft={<UserTick color='#dfdfdf' />}  iconsRight={<CloseCircle color='#dfdfdf' />}  />
        <InputsText hide width={horizontalScale(315)}  iconsLeft={<User color='black' />} iconsRight={<CloseCircle color='black' />} />
        <InputsText hide width={horizontalScale(315)}  iconsLeft={<User color='black' />} iconsRight={<CloseCircle color='black' />} />
        <InputsText borderColor={Color.light.main} label={"Add User"} width={horizontalScale(315)}  iconsLeft={<UserSearch color='black' />}  />
        <Dropdowns icons={ ()=> <SearchNormal1 color="black"
            style={{marginRight:10}}
            />}  label={"Add User"} />

            <View style={{marginTop:50, marginBottom:50}}>
            <Buttons title={"Add Branch"} />
            </View>
        </View>

      </View>
    </Header>
  )
}

export default AddBranches