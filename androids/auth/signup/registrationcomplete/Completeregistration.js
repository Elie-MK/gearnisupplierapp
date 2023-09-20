import { View, Text, StyleSheet, Dimensions, Platform, Pressable, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../../utilities/Metrics'
import { StatusBar } from 'react-native'
import Color from '../../../../utilities/Color'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useCustomFonts } from '../../../../utilities/Fonts'
import { Button } from'@rneui/base'
import { DocumentText, DocumentText1 } from 'iconsax-react-native'

const Completeregistration = ({navigation}) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
      <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={moderateScale(30)} color={Color.light.black} />
        </Pressable>

        <View style={{marginTop:20}}>
            <Text style={{fontFamily:fontGotham.bold, fontSize:moderateScale(32)}}>Registration</Text>
            <Text style={{fontFamily:fontGotham.bold, fontSize:moderateScale(32)}}>Complete</Text>
        </View>

        <View style={{justifyContent:"center", marginTop:40, flexDirection:"row"}}>
           <View style={{backgroundColor:Color.light.main, padding:15, borderRadius:50}}>
            <DocumentText1 color='black' size={64} />
           </View>
        </View>

        <View style={{alignItems:"center"}}>
        <View style={{marginTop:verticalScale(90), width:horizontalScale(315)}}>
            <View style={{alignItems:"center"}}>
            <View style={{borderWidth:4, borderColor:Color.light.main, width:"90%"}}></View>

            </View>
        <View style={{flexDirection:"row",  justifyContent:"space-between", }}>
            <View style={{marginLeft:15}}>
            <View style={{backgroundColor:Color.light.main, padding:10, borderRadius:22, marginTop:-30 }}>
            <Ionicons name="md-checkmark-sharp" size={30} color="black" />
            </View>
            <View style={{position:"absolute", width:90, marginTop:30, marginLeft:-25 }}>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:moderateScale(10)}}>Filling</Text>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:moderateScale(10)}}>Registration</Text>
            </View>
            </View>
            <View style={{marginLeft:15}}>
            <View style={{backgroundColor:Color.light.main, padding:10, borderRadius:22, marginTop:-30 }}>
            <Ionicons name="md-checkmark-sharp" size={30} color="black" />
            </View>
            <View style={{position:"absolute", width:90, marginTop:30, marginLeft:-25 }}>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:moderateScale(10)}}>Registration</Text>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:moderateScale(10)}}>complete</Text>
            </View>
            </View>
            <View style={{marginLeft:15}}>
            <View style={{backgroundColor:Color.light.main, padding:25, borderRadius:22, marginTop:-30 }}>
            
            </View>
            <View style={{position:"absolute", width:90, marginTop:30, marginLeft:-25 }}>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:moderateScale(10)}}>Account</Text>
                <Text style={{textAlign:"center", fontFamily:fontGotham.bold, fontSize:moderateScale(10)}}>Activation</Text>
            </View>
            </View>
        </View>
        </View>

        </View>
        <View>
        <View style={{marginTop:verticalScale(120), alignItems:"center"}}>
          <Button
            title="Go to Company Profile"
            buttonStyle={{ backgroundColor: Color.light.main,borderRadius:4, height:60}}
            titleStyle={{
              color: Color.light.black,
              fontFamily: fontGotham.bold,
              fontSize:16
            }}
            containerStyle={{width:horizontalScale(315)}}
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
      height: Dimensions.get("window").height,
    },
    secondContainer: {
      marginLeft: 20,
      marginTop: verticalScale(20),
      marginRight: 20,
    },

  });