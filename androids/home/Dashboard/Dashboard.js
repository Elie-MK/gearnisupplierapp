import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Globals from '../../components/Global'
import { useCustomFonts } from '../../../utilities/Fonts';
import { moderateScale, verticalScale } from '../../../utilities/Metrics';
import { HambergerMenu, Notification } from 'iconsax-react-native';
import Itemshome from '../../components/Itemshome';
import Itemsorders from '../../components/Itemsorders';

const Dashboard = ({navigation}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Globals>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginRight:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate("menu")}>
              <HambergerMenu size={30} color='black' />
            </TouchableOpacity>
            <View>
                <Text style={{fontSize:moderateScale(22), fontFamily:fontGotham.medium}}>Dashboard</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
              <Notification size={30} color='black' />
            </TouchableOpacity>
        </View>
        <View style={{alignItems:"center", marginTop:verticalScale(50)}}>
          <Image style={{width:68, height:63}} source={require("../../../assets/profile.png")} />
        </View>
        <View style={{marginTop:30}}>
          <Itemshome />
        </View>
        <View style={{marginTop:30}}>
          <Itemsorders />
          <Itemsorders />
          <Itemsorders />
        </View>
    </Globals>
  )
}

export default Dashboard
