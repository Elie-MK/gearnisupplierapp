import { View, Text, StyleSheet, Dimensions, Platform, Pressable, Image } from 'react-native'
import React from 'react'
import { verticalScale } from '../../../../utilities/Metrics'
import { StatusBar } from 'react-native'
import Color from '../../../../utilities/Color'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useCustomFonts } from '../../../../utilities/Fonts'
import { Button } from '@rneui/base'
import SvgUri from 'react-native-svg-uri'

const Completeregistration = ({navigation}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
      <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Color.light.black} />
        </Pressable>

        <View style={{marginTop:20}}>
            <Text style={{fontFamily:fontGotham.bold, fontSize:32}}>Registration</Text>
            <Text style={{fontFamily:fontGotham.bold, fontSize:32}}>Complete</Text>
        </View>

        <View style={{justifyContent:"center", marginTop:40, flexDirection:"row"}}>
           <View style={{backgroundColor:Color.light.main, padding:30, borderRadius:50}}>
            <Image source={require('../../../../assets/icons/document-text-1.png')} />
           </View>
        </View>

        <View style={{marginTop:90}}>
            <View style={{alignItems:"center"}}>
            <View style={{borderWidth:4, borderColor:Color.light.main, width:"90%"}}></View>

            </View>
        <View style={{flexDirection:"row",  justifyContent:"space-between"}}>
            <View style={{marginLeft:15}}>
            <View style={{backgroundColor:Color.light.main, padding:10, borderRadius:20, marginTop:-30 }}>
            <Ionicons name="md-checkmark-sharp" size={24} color="black" />
            </View>
            <View style={{position:"absolute", width:90, marginTop:20, marginLeft:-25 }}>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:10}}>Filling</Text>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:10}}>Registration</Text>
            </View>
            </View>
            <View style={{marginLeft:15}}>
            <View style={{backgroundColor:Color.light.main, padding:10, borderRadius:20, marginTop:-30 }}>
            <Ionicons name="md-checkmark-sharp" size={24} color="black" />
            </View>
            <View style={{position:"absolute", width:90, marginTop:20, marginLeft:-25 }}>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:10}}>Registration</Text>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:10}}>complete</Text>
            </View>
            </View>
            <View style={{marginLeft:15}}>
            <View style={{backgroundColor:Color.light.main, padding:22, borderRadius:20, marginTop:-30 }}>
            
            </View>
            <View style={{position:"absolute", width:90, marginTop:20, marginLeft:-25 }}>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:10}}>Account</Text>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:10}}>Activation</Text>
            </View>
            </View>
        </View>
        </View>

        <View>
        <View style={{marginTop:120, alignItems:"center"}}>
          <Button
            title="Go to Company Profile"
            buttonStyle={{ backgroundColor: Color.light.main, padding: 15 }}
            titleStyle={{
              color: Color.light.black,
              fontFamily: fontGotham.bold,
              fontSize:16 
            }}
            containerStyle={{width:315}}
            onPress={()=>navigation.navigate('home')}
          />
        </View>
        </View>
      </View>
    </View>
  )
}

export default Completeregistration

const styles = StyleSheet.create({
    container: {
        flex:1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: Color.light.themeColor,
      height: Dimensions.get("screen").height,
    },
    secondContainer: {
      marginLeft: 20,
      marginTop: verticalScale(20),
      marginRight: 20,
    },

  });