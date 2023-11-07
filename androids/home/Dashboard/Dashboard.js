import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Globals from '../../components/Global'
import { useCustomFonts } from '../../../utilities/Fonts';
import { moderateScale, verticalScale } from '../../../utilities/Metrics';
import { HambergerMenu, Notification, NotificationBing } from 'iconsax-react-native';
import Itemshome from '../../components/Itemshome';
import Itemsorders from '../../components/Itemsorders';
import HeaderHome from '../../components/HeaderHome';

const Dashboard = ({navigation}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <HeaderHome title={"Dashboard"} show>
     
       <View>
       <View style={{alignItems:"center", marginTop:verticalScale(20)}}>
          <Image style={{width:68, height:63, marginLeft:30}} source={require("../../../assets/profile.png")} />
        </View>
        <View style={{marginTop:30}}>
          <Itemshome />
        </View>
        <View >
          <Itemsorders />
          <Itemsorders />
          <Itemsorders />
        </View>
       </View>
    </HeaderHome>
  )
}

export default Dashboard
