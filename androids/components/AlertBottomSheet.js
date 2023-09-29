import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { BottomSheet, Button } from '@rneui/base'
import { BlurView } from 'expo-blur'
import { LogoutCurve } from 'iconsax-react-native'
import Color from '../../utilities/Color'
import { useCustomFonts } from '../../utilities/Fonts'
import { verticalScale } from '../../utilities/Metrics'
import { Modal } from 'react-native'

const AlertBottomSheet = ({isVisible, subtext, icons, title, onPress, text, textbtn, pressBtn, pressValidBtn }) => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Modal animationType='fade'  visible={isVisible} >
          <TouchableOpacity onPress={onPress}>
            <BlurView  intensity={8}
            tint="dark"
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}>
               <View style={{ alignItems: "center", marginTop:200 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "black",
              width: 312,
            }}
          >
            <View style={{ alignItems: "center", marginTop:30, padding:10 }}>
              <View style={{ alignItems: "center", marginTop:-15 }}>
                {icons}
                <Text style={{
                    marginTop: 15,
                    fontSize: 16,
                    fontFamily: fontGotham.medium,
                  }}>{title}</Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontFamily: fontGotham.book,
                    textAlign:"center"
                  }}
                >
                  {text}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: fontGotham.book,
                    textAlign:"center"
                  }}
                >
                  {subtext}
                </Text>
              </View>
  
            </View>
          <View style={{alignItems:"center", marginBottom:15}}>
          <View style={{ alignItems:"center",  marginTop: verticalScale(30), flexDirection:"row", gap:10}}>
              <Button
                title={textbtn}
                onPress={pressValidBtn}
                containerStyle={{ width:116, borderRadius: 4 }}
                buttonStyle={{  backgroundColor: Color.light.main, fontFamily:fontGotham.medium }}
                titleStyle={{ color: Color.light.black, fontSize:14}}
              />
              <Button
              type="outline"
                title="Cancel"
                onPress={pressBtn}
                containerStyle={{ width: 116,  }}
                buttonStyle={{ borderColor:"red", fontFamily:fontGotham.medium,borderRadius: 4 }}
                titleStyle={{ color: "red", fontSize:14, }}
              />
            </View>
          </View>
          </View>
        </View>
            </BlurView>
          </TouchableOpacity>
        </Modal>
  )
}

export default AlertBottomSheet