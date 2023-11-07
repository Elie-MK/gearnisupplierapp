import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Color from '../../../utilities/Color'
import { horizontalScale } from '../../../utilities/Metrics'
import { Image } from 'react-native'
import { useCustomFonts } from '../../../utilities/Fonts'
import KeybordAvoidHome from '../../components/KeybordAvoidHome'
import Item from './itemsComponent/Item'
import InputsText from '../../components/InputsText'
import { CloseCircle, DiscountShape } from 'iconsax-react-native'
import Buttons from '../../components/Buttons'

const NewBid = ({navigation}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <KeybordAvoidHome title={"New Bid"} nav={()=>navigation.goBack()}>
      <View style={{marginLeft:20, marginRight:20, marginTop:20}}>
        <View style={{alignItems:"center"}}>
            <View style={{backgroundColor:Color.light.graylight, width:horizontalScale(315), borderRadius:4}}>
                <View style={{flexDirection:"row", alignItems:"center", gap:20, padding:15, marginLeft:10, marginRight:10}}>
                <View>
                    <Image source={require("../../../assets/mitsubishi.png")} style={{width:51, height:50}} />
                </View>
                <View>
                    <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Ford-GrandMarquis(2003)</Text>
                    <Text style={{fontSize:12, fontFamily:fontGotham.regular, marginTop:5}}>Chassis Number: 2FMDK3KC7BBA78129 </Text>
                    <Text style={{fontSize:12, fontFamily:fontGotham.regular, marginTop:5}}>Total Items : 2</Text>
                </View>
                </View>
            </View>
        </View>
        <View style={{marginTop:35}}>
            <Text style={{fontSize:16, fontFamily:fontGotham.medium, marginLeft:20}}>Order Details</Text>
            <View>
                <Item />
            </View>
            <Text style={{fontSize:16, fontFamily:fontGotham.medium, marginLeft:20, marginTop:20}}>Billing Summary</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft:20, marginRight:20, marginTop:10}}>
                <Text style={{fontFamily:fontGotham.regular}}>New Bid#:34344</Text>
                <Text style={{fontFamily:fontGotham.regular}}>30 May 2018</Text>
            </View>
            <Text style={{marginLeft:20, marginRight:20, color:Color.light.main, marginTop:10}}>--------------------------------------------------------------------------------</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft:20, marginRight:20, marginTop:10}}>
                <Text style={{fontFamily:fontGotham.regular}}>Calculated Total</Text>
                <Text style={{fontFamily:fontGotham.regular}}>410.0 SR</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft:20, marginRight:20, marginTop:10}}>
                <Text style={{fontFamily:fontGotham.regular}}>Tax Amount 15%</Text>
                <Text style={{fontFamily:fontGotham.regular}}>61.50 SR</Text>
            </View>
            <Text style={{marginLeft:20, marginRight:20, color:Color.light.main, marginTop:10}}>--------------------------------------------------------------------------------</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft:20, marginRight:20, marginTop:10}}>
                <Text style={{fontFamily:fontGotham.medium, fontSize:16}}>Grand Total</Text>
                <Text style={{fontFamily:fontGotham.medium, fontSize:16}}>SAR 471.00</Text>
            </View>
            <View style={{marginTop:20, alignItems:"center", marginBottom:5}}>
            <InputsText borderColor={Color.light.main} label={"I want to submit special price"} width={horizontalScale(315)}  iconsLeft={<DiscountShape color='black' />} iconsRight={<CloseCircle color='black'/>} />

            </View>

            <View style={{marginTop:20, alignItems:"center", marginBottom:20}}>
                <Buttons title={"Submit Quote"} />
            </View>
        </View>
      </View>
    </KeybordAvoidHome>
  )
}

export default NewBid