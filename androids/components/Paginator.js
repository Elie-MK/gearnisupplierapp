import { Animated, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Color from "../../utilities/Color";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange, 
            outputRange:[10,10,10],
            extrapolate:"clamp",
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.3,1,0.3],
            extrapolate:"clamp",

          })
          return (
            <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
          );
        })}
      </View>
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: Color.light.main,
    marginHorizontal: 8,
  },
});
