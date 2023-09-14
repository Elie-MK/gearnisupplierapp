import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import { useCustomFonts } from "../../utilities/Fonts";
import { horizontalScale } from "../../utilities/Metrics";

const ModalCountry = ({
  values,
  isVisible,
  hideModal,
  setValue,
  onCountryChange,
}) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    handleCountry(values);
  }, [values]);

  const datas = CountryList.getAll()
  const handleCountry =  (value) => {
    if (value) {
      const data = datas.filter(
        (item) => item.name.indexOf(value) > -1 || item.flag.indexOf(value) > -1
      );

      setFilteredPosts(data);
    } else {
      setFilteredPosts(datas)
    }
  };
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
// console.log(datas);
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
          <Pressable onPress={hideModal}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </Pressable>
          <TextInput
            style={{
              fontFamily: fontGotham.medium,
              width: horizontalScale(250),
              padding: 5,
              paddingLeft: 15,
              fontSize: 15,
            }}
            onChangeText={setValue}
            value={values}
            placeholder="Enter country name"
          />
        </View>
      </View>
      <View>
        <ScrollView style={{ padding: 15 }}>
          {filteredPosts.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onCountryChange(item)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  padding: 10,
                }}
              >
                <Text>{item.flag}</Text>
                <Text>{item.name}</Text>
              </View>
              <Divider />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalCountry;
