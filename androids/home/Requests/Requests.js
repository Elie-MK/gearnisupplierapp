import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { horizontalScale } from '../../../utilities/Metrics'
import { Image } from 'react-native'
import { ArrowCircleRight, ArrowCircleRight2 } from 'iconsax-react-native'
import { TouchableOpacity } from 'react-native'
import { useCustomFonts } from '../../../utilities/Fonts'
import Color from '../../../utilities/Color'

const Requests = ({navigation}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Header title={"My Requests"} nav={()=>navigation.navigate('main')}>
      <View style={{marginLeft:20, marginRight:20, marginTop:50}}>
        <View style={{alignItems:"center"}}>
            <View style={{width:horizontalScale(315), height:80, backgroundColor:Color.light.graylight, borderRadius:4}}>
               <View style={{marginTop:15, marginLeft:15, marginRight:15}}>
               <View style={{flexDirection:"row", alignContent:"center", justifyContent:"space-between"}}>
                    <View  style={{flexDirection:"row", gap:10, alignContent:"center"}}>
                        <Image source={require('../../../assets/mitsubishi.png')} style={{width:56, height:56}} />
                    <View>
                        <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Order#: 34344</Text>
                        <Text style={{fontSize:12, fontFamily:fontGotham.regular, marginTop:5}}>Lancer 2004</Text>
                    </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate("newbid")}>
                        <ArrowCircleRight2 color='black' size={38}/>
                        </TouchableOpacity>
                    </View>
                </View>
               </View>
            </View>
        </View>
      </View>
    </Header>
  )
}

export default Requests