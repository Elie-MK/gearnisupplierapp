import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacityBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../utilities/Color";
import { horizontalScale, moderateScale, verticalScale } from "../utilities/Metrics";
import { Button, CheckBox, Divider } from "@rneui/base";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import ReactNativeModal from "react-native-modal";
import { Flag } from "./components/ModalLanguage";
import { useCustomFonts } from "../utilities/Fonts";
import { BlurView } from "expo-blur";
import { CloseCircle, CloudChange, DocumentText, Global, InfoCircle, Refresh, Refresh2, RefreshSquare, } from "iconsax-react-native";
import AlertModal from "./components/AlertModal";
import { TouchableHighlight } from "react-native-gesture-handler";

const WelcomeAndroid = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [changes, setChanges]=useState(false)
  const [show, setShow]=useState(false)
  const [splah, setSplah]=useState(false)
  const [checked, setChecked] = useState("English");


  useEffect(()=>{
    setSplah(!splah)
    setTimeout(() => {
      setSplah(false)
    }, 2000);
  },[])
const toggleChange = ()=>{
  setChanges(!changes)
  if(!changes){
    setShow(!show)
  }
}

const iconRotation = changes ? { transform: [{ rotate: '180deg' }] } :  { transform: [{ rotate: '90deg' }] };
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: changes?Color.light.black:Color.light.main,
    height: Dimensions.get("screen").height,
    alignItems: "center",}}>
      {
        !splah?null:(<Image source={require("../assets/GearniFull.png")} resizeMode="contain" style={{width:350, height:350, marginTop:250}}/>)
      }
      {
        splah === false && (
          <View style={{marginTop:90}}>
          <View style={{alignItems:"center"}}>
         {
          changes?<Image 
            style={{ width:335, height:140, top: 106 }}
            source={require("../assets/GearniYellow.png")}
          />:   <Image 
          
            style={{ width:335, height:140, top: 106 }}
            source={require("../assets/GearniFull.png")}
          /> 
         }
          </View>
          <View style={styles.buttonContainer}>
          <View style={{marginBottom:50}}>
            <TouchableOpacity onPress={toggleChange}>
             <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
             <Refresh color={changes?Color.light.main:"black"} style={[iconRotation]} />
              <Text style={{fontSize:20, fontFamily:fontGotham.medium, color:changes?Color.light.main:Color.light.black}}>Switch</Text>
             </View>
            </TouchableOpacity>
          </View>
    
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("login")}>
            <View style={{borderColor:changes?Color.light.main:Color.light.black,
                borderWidth: 2,
                width: 236,
                borderRadius :8,
                padding:20}}>
              <Text style={{ color:changes?Color.light.main:Color.light.black,
                fontSize: 20,
                fontFamily: fontGotham.medium, textAlign:"center"}}>Get Started</Text>
            </View>
            </TouchableOpacity>
          </View>
           
          <Pressable
            onPress={() => setVisible(!visible)}
         style={{alignItems:"center", marginTop: verticalScale(60),}}
          >
            <View    style={{
              flexDirection: "row",
              gap: 10,
              alignItems:"center",
              
            }}>
  
            <View>
              <Global  size={moderateScale(25)} color={changes?Color.light.main:"black"} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fontGotham.medium,
                  color:changes?Color.light.main:"black"
                }}
              >
                {checked}
              </Text>
            </View>
            <View>
              <MaterialIcons name="keyboard-arrow-down" size={moderateScale(30)} color={changes?Color.light.main:"black"} />
            </View>
            </View>
          </Pressable>
        </View>
        )
      }
      <AlertModal onPress={()=>setShow(!show)} dismis={()=>setShow(!show)} visible={show} show icons={<InfoCircle color="black" />} title={"Info"} btnText={"Understood"} text={"This is only for experiemntal usage and not for final product. User Experience Test"} />
      </View>

      {/* Modal */}
      <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        transparent={true}
        style={{ margin: 0 }}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
          <BlurView
            intensity={8}
            tint="dark"
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 60,
              }}
            >
              <View
                style={{
                  backgroundColor: Color.light.themeColor,
                  borderRadius: 10,
                  padding: 10,
                  width:320
                }}
              >
                <Pressable onPress={() => setVisible(!visible)} style={{alignItems:"flex-end"}}>
                  <CloseCircle color="black" size={24}  />
                </Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: fontGotham.regular,
                  }}
                >
                  Select Language
                </Text>
                {Flag.map((item, index) => (
                  <TouchableOpacity
                    style={{ padding: 3 }}
                    onPress={() => setChecked(item.language, { item })}
                    key={index}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ padding: 6 }}>
                          <Image
                            source={{
                              uri: item.flag,
                            }}
                            height={30}
                            width={30}
                            style={{ borderRadius: 99 }}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 20,
                            marginLeft: 20,
                            fontFamily: fontGotham.book,
                          }}
                        >
                          {item.language}
                        </Text>
                      </View>
                      <View>
                        <CheckBox
                          checked={checked === item.language}
                          onPress={() => setChecked(item.language)}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                          containerStyle={{
                            backgroundColor: "white",
                          }}
                          uncheckedColor={"black"}
                          checkedColor={Color.light.main}
                        />
                      </View>
                    </View>

                    <Divider color="black" />
                  </TouchableOpacity>
                ))}

                <View style={{ alignItems: "center", marginTop: 20, padding:10 }}>
                  <Button
                    title="confirm"
                    onPress={() => setVisible(!visible)}
                    containerStyle={{ borderRadius: 5 }}
                    buttonStyle={{
                      backgroundColor: Color.light.main,
                      padding:15,
                   
                    }}
                    titleStyle={{
                      color: Color.light.black,
                      fontFamily: fontGotham.medium,
                      fontSize:18,
                      padding:20,
                    }}
                    
                  />
                </View>
              </View>
            </View>
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: verticalScale(250),
    alignItems:"center"
  },
  btn: {
  
  },
});
export default WelcomeAndroid;
