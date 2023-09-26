import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { HambergerMenu, NotificationBing } from 'iconsax-react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, verticalScale } from '../../utilities/Metrics'
import { useCustomFonts } from '../../utilities/Fonts'
import Color from '../../utilities/Color'

const HeaderHome = ({children, show, title, onPress}) => {
    const navigation = useNavigation()
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginRight:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate("menu")}>
              <HambergerMenu size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
              <NotificationBing size={30} color='black' />
            </TouchableOpacity>
        </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:show?"center":"space-between", marginTop:20 }}>
            {
                show?null: <TouchableOpacity onPress={onPress} ><MaterialIcons name="arrow-back-ios" size={24} color="black" /></TouchableOpacity>
            }
                <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.medium}}>{title}</Text>
                <View style={{display:show?"none":"flex"}}></View>
            </View>
            <View>{children}</View>
        </View>
    </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: Color.light.themeColor,
        height: Dimensions.get("screen").height,
      },
      secondContainer: {
        marginLeft: 20,
        marginTop: verticalScale(20),
      },
})