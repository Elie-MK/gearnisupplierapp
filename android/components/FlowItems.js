import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale } from "../../utilities/Metrics";
import slide from "../../utilities/slide";
import { useRef } from "react";
import { useState } from "react";
import Paginator from "./Paginator";
import { Button } from "@rneui/base";
import Color from "../../utilities/Color";
import { useNavigation } from "@react-navigation/native";

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
          <View>
            <Text style={{ fontSize: 30, width: horizontalScale(250) }}>
              {item.title}
            </Text>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 300,
                  width: horizontalScale(340),
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

      <View style={{ marginTop: 10 }}>
        {currentIndex === 3 ? (
          <Button
            title="Continue"
            onPress={()=>navigation.navigate('adminRegistration')}
            buttonStyle={{
              backgroundColor: Color.light.main,
              padding: 15,
              marginBottom: 15,
            }}
            titleStyle={{ color: Color.light.black, fontWeight: "bold" }}
          />
        ) : (
          <Button
            title="Continue"
            onPress={ScrollTo}
            buttonStyle={{
              backgroundColor: Color.light.main,
              padding: 15,
              marginBottom: 15,
            }}
            titleStyle={{ color: Color.light.black, fontWeight: "bold" }}
          />
        )}
      </View>
      <Paginator data={slide} scrollX={ScrollX} />
    </View>
  );
};

export default FlowItems;

const styles = StyleSheet.create({});
