import { View, Text } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { People } from "iconsax-react-native";
import { horizontalScale, moderateScale } from "../../../../utilities/Metrics";
import { useState } from "react";
import { StyleSheet } from "react-native";


const data = [
    { label: '0-10', value: '0-10' },
    { label: '11-50', value: '11-50' },
    { label: '51-100', value: '51-100' },
    { label: '100+', value: '100+' },
  ];


const Dropdowns = ({icons, label}) => {
  const [value, setValue] = useState(null);

//   console.log(value);
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Dropdown
        style={{borderBottomColor: 'gray',
        borderWidth:1, 
        width:horizontalScale(316),
        padding: 10,
        borderRadius:5}}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        dropdownPosition="bottom"
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
          renderLeftIcon={icons}
        />
      </View>
      <Text
        style={{
          backgroundColor: "white",
          padding: 2,
          position: "absolute",
          marginTop: -12,
          marginLeft: 10,
          fontSize: moderateScale(12),
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default Dropdowns;

const styles = StyleSheet.create({
    icon: {
      paddingRight: 5,
    },
    placeholderStyle: {
      fontSize: 14,
    },
    selectedTextStyle: {
      fontSize: 14,
      paddingLeft:20
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 14,
    },
  });