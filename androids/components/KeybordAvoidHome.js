import { HambergerMenu, Notification } from 'iconsax-react-native'
import { Dimensions, Platform, StatusBar, TouchableOpacity } from 'react-native'
import { View, Text, Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { moderateScale } from '../../utilities/Metrics'
import { useCustomFonts } from '../../utilities/Fonts'
import Color from '../../utilities/Color'
import { useNavigation } from '@react-navigation/native'

const KeybordAvoidHome = ({title, children, size}) => {
  const navigation = useNavigation()
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null
    }
  return (
    <KeyboardAvoidingView style={{flex:1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom:5, backgroundColor:Color.light.themeColor}} >
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginRight:20, marginLeft:20, paddingBottom:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("menu")}>
              <HambergerMenu size={30} color='black' />
            </TouchableOpacity>
            <View>
                <Text style={{fontSize:size?22:14, fontFamily:fontGotham.medium}}>{title}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
              <Notification size={30} color='black' />
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeybordAvoidHome