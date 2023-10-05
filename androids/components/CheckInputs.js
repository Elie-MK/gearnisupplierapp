import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Userdata } from "../../UserData";
import InputsText from "./InputsText";
import { useState } from "react";
import { ArrowDown2, More, More2 } from "iconsax-react-native";
import { horizontalScale } from "../../utilities/Metrics";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { useCustomFonts } from "../../utilities/Fonts";
import Color from "../../utilities/Color";
import { CheckBox } from "@rneui/base";
import { TextInput } from "react-native";

const CheckInputs = () => {
  const [search, setSearch] = useState(Userdata);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState("");

  const handleSearch = (text) => {
    setValue(text);
    const filtered = search.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearch(filtered);
  };
  const handleUser = (item)=>{
    setChecked(item.name)
  }
  console.log(checked)
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={{}}>
        {/* Search User */}
        <InputsText
          value={value}
          label={"Search User"}
          onChangeText={handleSearch}
          iconsLeft={<More2 color="black" />}
          width={horizontalScale(315)}
          iconsRight={<ArrowDown2 color="black" />}
        />
      </View>
      {
        value && (
            <View style={{ height: 128 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          style={{
            width: horizontalScale(315),
            elevation: 10,
            backgroundColor: "white",
          }}
          data={search}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleUser(item)}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
               iconType="material-community"
               checkedIcon="checkbox-marked"
               uncheckedIcon="checkbox-blank-outline"
               uncheckedColor={Color.light.main}
               checkedColor={Color.light.main}
                  checked={checked === item.name?checked:null}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    padding: 20,
                    fontFamily: fontGotham.regular,
                  }}
                >
                  {item?.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
        )
      }
    
    </View>
  );
};

export default CheckInputs;

const styles = StyleSheet.create({});
