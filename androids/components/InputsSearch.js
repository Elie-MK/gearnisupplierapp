import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import InputsText from "./InputsText";
import { ArrowDown2, SearchNormal1 } from "iconsax-react-native";
import { horizontalScale } from "../../utilities/Metrics";
import { useCustomFonts } from "../../utilities/Fonts";

const InputsSearch = ({ value, handleSearch, icon, search, label, handleUser }) => {
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        {/* Search User */}
        <InputsText
          value={value}
          label={label}
          onChangeText={handleSearch}
          iconsLeft={icon}
          width={horizontalScale(315)}
          iconsRight={<ArrowDown2 color="black" />}
        />
      </View>
      {value && (
        <View style={{ alignItems: "center", marginTop: 2,height: 125,
      }}>
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
                <Text
                  style={{
                    fontSize: 14,
                    padding: 20,
                    fontFamily: fontGotham.regular,
                    color:"black"
                  }}
                >
                  {item?.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default InputsSearch;
