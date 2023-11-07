import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Items from './Items'
import Buttons from '../../components/Buttons'

const Manages = ({navigation}) => {
  return (
    <Header title={"Manage Makes and Models"} nav={()=>navigation.navigate("main")}>
      <View style={{marginLeft:20, marginRight:20, marginTop:40, alignItems:"center"}}>
        <Items onPress={()=>navigation.navigate("editmodel")} />

        <View style={{marginTop:50, marginBottom:30}}>
        <Buttons title={"Add New Make"}  handleSubmit={()=>navigation.navigate('addnewmake')}/>
        </View>
      </View>
    </Header>
  )
}

export default Manages