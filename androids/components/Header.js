import { View, Text } from 'react-native'
import React, { Children } from 'react'
import Color from '../../utilities/Color'
import { Dimensions } from 'react-native'
import { StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NotificationBing } from 'iconsax-react-native'
import { useCustomFonts } from '../../utilities/Fonts'
import { MaterialIcons } from '@expo/vector-icons'
import { moderateScale } from '../../utilities/Metrics'
import { useNavigation } from '@react-navigation/native'

const Header = ({nav, title, children}) => {
    const navigation = useNavigation()

    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={{     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Color.light.themeColor,
    height: Dimensions.get("screen").height,}}>

    <View style={{flexDirection:"row", marginLeft:20, marginTop:20, justifyContent:"space-between", marginRight:20}}>
    <TouchableOpacity onPress={nav} ><MaterialIcons name="arrow-back-ios" size={24} color="black" /></TouchableOpacity>   
    <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.medium}}>{title}</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
      <NotificationBing size={30} color='black' />
    </TouchableOpacity>
</View>
<View>{children}</View>
</View>
  )
}

export default Header