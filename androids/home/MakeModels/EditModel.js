import { View, Text } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { Userdata } from "../../../UserData";
import InputsSearch from "../../components/InputsSearch";
import Buttons from "../../components/Buttons";
import { Car, People, ProfileDelete, Setting2 } from "iconsax-react-native";
import AlertBottomSheet from "../../components/AlertBottomSheet";

const EditModel = ({navigation}) => {
  const [search, setSearch] = useState(Userdata);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const handleSearch = (text) => {
    setValue(text);
    const filtered = search.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearch(filtered);
  };
  const togglePopup = (setOpen, open) => {
    setOpen(!open);
  };

  return (
    <Header title={"Add Makes and Model"} nav={() => navigation.goBack()}>
      <View style={{marginTop:50}}>
        <View style={{ alignItems: "center" }}>
          <InputsSearch
          hidden
            icon={<Car color="black" />}
            handleSearch={handleSearch}
            handleUser={value}
            search={search}
            value={value}
            label={"Select Make"}
          />
          <InputsSearch
          hidden
            icon={<Setting2 color="black" />}
            handleSearch={handleSearch}
            handleUser={value}
            // search={search}
            // value={value}
            label={"Select Model"}
          />
          <View style={{ marginTop: 50 }}>
            <Buttons hide hided title={"Delete"} handleSubmit={() => togglePopup(setShow, show)} />
          </View>
          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <Buttons
              title={"Save"}
              handleSubmit={() => togglePopup(setActive, active)}
            />
          </View>
        </View>
        <AlertBottomSheet
          hide
          icons={<ProfileDelete color="black" size={30} />}
          text={
            "Dear [Gearni], are you sure you want to delete [Make] and all it's associated models"
          }
          textbtn={"Delete"}
          pressBtn={() => togglePopup(setShow, show)}
          onPress={() => togglePopup(setShow, show)}
          isVisible={show}
          title={"Make & Models Delete"}
        />
        <AlertBottomSheet
          hide
          icons={<ProfileDelete color="black" size={30} />}
          text={
            "Dear [Gearni], are you sure you want save edits to Toyota and all it's associated models"
          }
          textbtn={"Confirm"}
          pressBtn={() => togglePopup(setActive, active)}
          onPress={() => togglePopup(setActive, active)}
          isVisible={active}
          title={"Make & Models Updated"}
        />
      </View>
    </Header>
  );
};

export default EditModel;
