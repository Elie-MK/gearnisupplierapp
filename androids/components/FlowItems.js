import { Animated, FlatList, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { horizontalScale, moderateScale } from "../../utilities/Metrics";
import { useRef } from "react";
import { useState } from "react";
import Paginator from "./Paginator";
import { Button } from "@rneui/base";
import Color from "../../utilities/Color";
import { useNavigation } from "@react-navigation/native";
import SvgUri from "react-native-svg-uri";
import slide from "./slide";
import { useCustomFonts } from "../../utilities/Fonts";

const FlowItems = () => {
    const navigation = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0);
  const ScrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);

  const ScrollTo = () => {
    if (currentIndex < slide.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last item");
    }
  };


  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        data={slide}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{width:Dimensions.get('screen').width}}>
            <Text style={{ fontSize: 35, width: horizontalScale(250), fontFamily:fontGotham.medium, fontWeight:"500" }}>
              {item.title}
            </Text>

            <View style={{alignItems:"center", padding:10, marginTop:40}}>
            <Image resizeMode="contain"  source={item.img} style={{width:230, height:220}} />
            </View>
            <View style={{ alignItems: "center", marginTop:34,width: horizontalScale(340),
 }}>
              <Text
                style={{
                  fontSize: moderateScale(23),
                  textAlign: "center",
                  marginTop: 20,
                  fontFamily:fontGotham.regular
                }}
              >
                {item.desc}
              </Text>
            </View>
          </View>
        )}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <View style={{ marginTop: 20 }}>
        {currentIndex === 3 ? (
       <View style={{alignItems:"center"}}>
           <Button
            title="Continue"
            onPress={()=>navigation.navigate('adminRegistration')}
            buttonStyle={{
              backgroundColor: Color.light.main,
              padding: 15,
              marginBottom: 15,
            }}
            containerStyle={{width:315}}
            titleStyle={{ color: Color.light.black, fontSize:moderateScale(20) }}
          />
       </View>
        ) : (
       <View style={{alignItems:"center"}}>
           <Button
            title="Continue"
            onPress={ScrollTo}
            buttonStyle={{
              backgroundColor: Color.light.main,
              padding: 15,
              marginBottom: 15,
            }}
            containerStyle={{width:315}}
            titleStyle={{ color: Color.light.black, fontSize:moderateScale(20)}}
          />
       </View>
        )}
      </View>
      <Paginator data={slide} scrollX={ScrollX} />
    </View>
  );
};

export default FlowItems;

const styles = StyleSheet.create({});
