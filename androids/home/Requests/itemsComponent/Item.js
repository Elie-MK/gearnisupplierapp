import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale } from '../../../../utilities/Metrics'
import Color from '../../../../utilities/Color'
import { ArrowRight3 } from 'iconsax-react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useCustomFonts } from '../../../../utilities/Fonts'
import { useState } from 'react'
import { Pressable } from 'react-native'
import { Divider} from '@rneui/base'
import { Switch } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'

const Item = () => {
    const [slide, setSlide]=useState(false)
    const [switsh, setSwitsh]=useState(false)
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={{alignItems:"center", marginTop:25}}>
      <View style={{width:horizontalScale(315), backgroundColor:Color.light.themeColor, elevation:10, height:slide?642:72, marginBottom:slide?30:5, borderRadius:4}}>
           <View style={{marginLeft:25, marginRight:25, marginTop:slide?25:10}}>
        <Pressable onPress={()=>setSlide(!slide)} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
           <View>
                <Text style={{fontSize:14, fontFamily:fontGotham.medium}}>Radiator</Text>
                <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Type : Aftermarket</Text>
            </View>
            <View>
            <AntDesign name="caretright" size={24} color="black" />            
            </View>
           </Pressable>
           <View style={{display:slide?"flex":"none"}}>
                    <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Quantity : 02</Text>
                    <View style={{ height:96, backgroundColor:Color.light.graylight, marginTop:20, borderRadius:4}}></View>
                    <View style={{backgroundColor:Color.light.graylight, marginTop:20, height:56  }}>
                        <View style={{marginLeft:10,  marginRight:10}}>
                          <View style={{flexDirection:"row",  alignItems:"center", justifyContent:"space-between"}}>
                        <View>
                        <Text>Available</Text>
                        </View>
                        <View style={{}}>
                        {
                          slide && <Switch  value={switsh} onValueChange={(value)=>setSwitsh(value)} color={Color.light.main}  />
                        }
                        </View>
                          </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:Color.light.graylight, marginTop:20, height:56  }}>
                        <View style={{marginLeft:10,  marginRight:10, marginTop:15}}>
                          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <Text>Original</Text>
                        <AntDesign name="caretdown" size={15} color="black" />            
                          </View>
                        </View>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20, alignItems:"center"}}>
                      <TouchableOpacity  style={{width:64, height:64, backgroundColor:Color.light.graylight, alignItems:"center", justifyContent:"center", borderRadius:4}}>
                      <Ionicons name="remove-outline" size={24} color="black" />
                      </TouchableOpacity>
                      <View>
                        <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>02</Text>
                      </View>
                      <TouchableOpacity style={{width:64, height:64, backgroundColor:Color.light.graylight, alignItems:"center", justifyContent:"center", borderRadius:4}}>
                      <Ionicons name="add-outline" size={24} color="black" />
                      </TouchableOpacity>
                    </View>


                    <View style={{backgroundColor:Color.light.graylight, marginTop:20, height:56  }}>
                        <View style={{marginLeft:10,  marginRight:10, marginTop:15}}>
                          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <Text style={{fontFamily:fontGotham.regular}}>Unit Price</Text>
                        <Text  style={{fontFamily:fontGotham.medium}}>310.5 SAR</Text>
                        <View></View>
                               
                          </View>
                        </View>
                    </View>
                    <View>
                      <Divider color={Color.light.main} style={{marginTop:20}} />
                      <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:20}}>
                        <Text style={{fontSize:16, fontFamily:fontGotham.medium}}>Item Subtotal</Text>
                        <Text style={{fontSize:16, fontFamily:fontGotham.medium}}>621 SAR</Text>
                      </View>
                    </View>
                </View>
        </View>
      </View>
    </View>
  )
}

export default Item

