import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale } from '../../utilities/Metrics'
import Color from '../../utilities/Color'
import { useCustomFonts } from '../../utilities/Fonts'
import { People } from 'iconsax-react-native'

const Itemshome = () => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={{marginLeft:15}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}   >
        <View style={{width:130, backgroundColor:Color.light.main, borderRadius:16, padding:16, height:130, shadowColor:"black", elevation:7, marginBottom:20, marginLeft:10}}>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20, fontFamily:fontGotham.bold}}>20</Text>
        <Text style={{fontSize:14, fontFamily:fontGotham.regular, marginTop:5}}>Users</Text>
        <People color='black' size={40} style={{marginTop:10}} />
        </View>
      </View>
        <View style={{width:130, backgroundColor:Color.light.main, borderRadius:16, padding:16, height:130, shadowColor:"black", elevation:7, marginLeft:10}}>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20, fontFamily:fontGotham.bold}}>08</Text>
        <Text style={{fontSize:14, fontFamily:fontGotham.regular, marginTop:5}}>Branches</Text>
        <People color='black' size={40} style={{marginTop:10}} />
        </View>
      </View>
        <View style={{width:130, backgroundColor:Color.light.main, borderRadius:16, padding:16, height:130, shadowColor:"black", elevation:7, marginLeft:10}}>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20, fontFamily:fontGotham.bold}}>6000</Text>
        <Text style={{fontSize:14, fontFamily:fontGotham.regular, marginTop:5}}>Earnings</Text>
        <People color='black' size={40} style={{marginTop:10}} />
        </View>
      </View>
        <View style={{width:130, backgroundColor:Color.light.main, borderRadius:16, padding:16, height:130, shadowColor:"black", elevation:7, marginLeft:10, marginRight:15}}>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20, fontFamily:fontGotham.bold}}>Verified</Text>
        <Text style={{fontSize:14, fontFamily:fontGotham.regular, marginTop:5}}>Status</Text>
        <People color='black' size={40} style={{marginTop:10}} />
        </View>
      </View>
        </ScrollView>
    </View>
  )
}

export default Itemshome

const styles = StyleSheet.create({})