import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useRef } from "react";
import KeybordAvoidHome from "../../components/KeybordAvoidHome";
import { horizontalScale, moderateScale, verticalScale } from "../../../utilities/Metrics";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useCustomFonts } from "../../../utilities/Fonts";
import Color from "../../../utilities/Color";
import { Button, Divider } from "@rneui/themed";
import Buttons from "../../components/Buttons";
import * as Animatable from 'react-native-animatable';
import { Pressable } from "react-native";
import { LayoutAnimation } from "react-native";
import { toggleAnimation } from "../../components/toggleAnimation";
import Header from "../../components/Header";


const Branches = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const animationController = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    const config ={
      duration:500, 
      toValue: open ? 0:1,
      useNativeDriver:true
    }
    Animated.timing(animationController, config).start()
    LayoutAnimation.configureNext(toggleAnimation)
    setOpen(!open)
  };

  const arrowTransform = animationController.interpolate({
    inputRange:[0,1],
    outputRange:['180deg', '0deg'],
  })

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Header nav={()=>navigation.goBack()} title={"Branches"}>
      <View
        style={{
          marginLeft: horizontalScale(20),
          marginRight: horizontalScale(20),
          marginTop: horizontalScale(40),
          alignItems:"center"
        }}
      >
        <View    style={{ width: horizontalScale(315), height:!open?115:380, backgroundColor:Color.light.themeColor, padding:10, borderRadius:5, elevation: 5, marginBottom:1 }}>
          <Pressable onPress={toggleDropdown}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: fontGotham.regular,
                  }}
                >
                  Branch 1 - Sanaiya + Riyadh (HQ)
                </Text>
              </View>
              <View>
                <Animated.View  
           style={{transform:[{rotateZ:arrowTransform}]}}
           >
                    <MaterialIcons
                    name='keyboard-arrow-down'
                    size={moderateScale(30)}
                    color={Color.light.main}
                  />
                </Animated.View >
            
              </View>
            </View>
            </Pressable>

            <View>
              <Text style={{fontSize:14, fontFamily:fontGotham.bold}}>Manager</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:13}}>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Nasir Al Qasimi</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('editbranch')}>
              <Animatable.Text animation={!open&&"zoomIn"} duration={1000} style={{fontSize:14, fontFamily:fontGotham.bold, color:!open?'black':"white", display:!open?"flex":"none"}}>Manage</Animatable.Text>
              </TouchableOpacity>
            </View>
            <Animatable.View animation={!open?"fadeInDown":"fadeIn"} duration={3000} style={{marginTop:5, display:!open?"none":"flex"}}>
              <Divider  color={!open?"white":'black'} style={{marginTop:12}} />
             <View style={{marginTop:8}}>
             <View style={{marginTop:10}}>
             <Text style={{fontSize:14, fontFamily:fontGotham.bold, color:!open?"white":'black'}}>User</Text>
              <View style={{marginTop:verticalScale(8)}}>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular, color:!open?"white":'black'}}>Jamal Shah</Text>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular, color:!open?"white":'black'}}>Khalil Reda</Text>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular, color:!open?"white":'black'}}>Moeed Al Moeed</Text>
              </View>
             </View>
              <Divider  color={!open?"white":'black'}  style={{marginTop:12}}/>
              <View>
              <View style={{marginTop:20}}>
              <Text style={{fontSize:14, fontFamily:fontGotham.bold, color:!open?"white":'black'}}>Adress</Text>
              <View style={{marginTop:verticalScale(8), flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
                <View>
                  <Text style={{width:horizontalScale(187), fontSize:moderateScale(14), fontFamily:fontGotham.regular, color:!open?"white":'black'}}>
                    145, Balquees Road, Sanaiya, Riyadh, Saudia Arabia
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={()=>navigation.navigate('editbranch')}>
                  <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.bold, color:!open?"white":'black'}}>Manage</Text>
                  </TouchableOpacity>
                </View>
              </View>
              </View>
              </View>
             </View>
            
            </Animatable.View>
        </View>
          <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
              <Buttons handleSubmit={()=>navigation.navigate('addbranches')}  title={"Add New Branch"} />
            </View>
      </View>
  
    </Header>
  );
};

export default Branches;
