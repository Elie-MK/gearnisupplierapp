import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import KeybordAvoidHome from "../../components/KeybordAvoidHome";
import { horizontalScale, moderateScale, verticalScale } from "../../../utilities/Metrics";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useCustomFonts } from "../../../utilities/Fonts";
import Color from "../../../utilities/Color";
import { Button, Divider } from "@rneui/themed";
import Buttons from "../../components/Buttons";

const Branches = () => {
  const [open, setOpen] = useState(false);
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeybordAvoidHome title={"Branches"}>
      <View
        style={{
          marginLeft: horizontalScale(20),
          marginRight: horizontalScale(20),
          marginTop: horizontalScale(40),
          alignItems:"center"
        }}
      >
          <TouchableOpacity onPress={() => setOpen(!open)}>
        <View style={{ width: horizontalScale(315), height:!open?111:350, backgroundColor:Color.light.themeColor, padding:10, borderRadius:5, elevation: 5, marginBottom:1 }}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <View style={{height:17}}>
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
                {!open ? (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={moderateScale(30)}
                    color={Color.light.main}
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={moderateScale(30)}
                    color={Color.light.main}
                  />
                )}
              </View>
            </View>
            <View>
              <Text style={{fontSize:14, fontFamily:fontGotham.bold}}>Manager</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:13}}>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Nasir Al Qasimi</Text>
              <Text style={{fontSize:14, fontFamily:fontGotham.bold, display:!open?"flex":"none"}}>Manage</Text>
            </View>
            <View style={{marginTop:5, display:!open?"none":"flex"}}>
              <Divider  color="black" style={{marginTop:12}} />
             <View style={{marginTop:8}}>
             <View style={{marginTop:10}}>
             <Text style={{fontSize:14, fontFamily:fontGotham.bold}}>User</Text>
              <View style={{marginTop:verticalScale(8)}}>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Jamal Shah</Text>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Khalil Reda</Text>
              <Text style={{fontSize:14, fontFamily:fontGotham.regular}}>Moeed Al Moeed</Text>
              </View>
             </View>
              <Divider  color="black"  style={{marginTop:12}}/>
              <View>
              <View style={{marginTop:20}}>
              <Text style={{fontSize:14, fontFamily:fontGotham.bold}}>Adress</Text>
              <View style={{marginTop:verticalScale(8), flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
                <View>
                  <Text style={{width:horizontalScale(187), fontSize:moderateScale(14), fontFamily:fontGotham.regular}}>
                    145, Balquees Road, Sanaiya, Riyadh, Saudia Arabia
                  </Text>
                </View>
                <View>
                <Text style={{fontSize:moderateScale(14), fontFamily:fontGotham.bold}}>Manage</Text>
                </View>
              </View>
              </View>
              </View>
             </View>
            
            </View>
        </View>
          </TouchableOpacity>
          <View style={{ marginTop: 30, marginBottom:20, alignItems:"center" }}>
              <Buttons title={"Add New Branch"} />
            </View>
      </View>
    </KeybordAvoidHome>
  );
};

export default Branches;
