import { View, Text } from "react-native";
import React from "react";
import KeybordAvoidHome from "../../../components/KeybordAvoidHome";
import InputsText from "../../../components/InputsText";
import {
  CloseCircle,
  Location,
  ShopAdd,
  Trash,
  User,
  UserEdit,
  UserRemove,
  UserTick,
} from "iconsax-react-native";
import { horizontalScale } from "../../../../utilities/Metrics";
import NotEditableInput from "../../../components/NotEditableInput";
import Buttons from "../../../components/Buttons";
import { useState } from "react";
import AlertBottomSheet from "../../../components/AlertBottomSheet";
import Header from "../../../components/Header";

const EditBranch = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [save, setSave] = useState(false);
  const [value, setValue] = useState("Folani");
  const [valueBranch, setValueBranch] = useState("Input");
  return (
    <Header nav={()=>navigation.goBack()} title={"Edit Branch"}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        {/* Branch Name */}
        <InputsText
          label={"Branch Name"}
          iconsLeft={<ShopAdd color="black" />}
          value={valueBranch}
          defaultValue={"Value"}
          width={horizontalScale(315)}
        />
        {/* Adress */}
        <InputsText
          label={"Adress"}
          iconsLeft={<Location color="black" />}
          defaultValue={"Value"}
          width={horizontalScale(315)}
        />
        {/* Manager Assign */}
        <NotEditableInput
          label={"Manager Assign"}
          iconsLeft={<UserTick color="#dfdfdf" />}
          width={horizontalScale(315)}
          iconsRight={<CloseCircle color="#dfdfdf" />}
        />
        <InputsText
          hide
          onPress={()=>setActive(!active)}
          iconsLeft={<User color="black" />}
          value={value}
          defaultValue={"Folani"}
          editable={false}
          iconsRight={<Trash color="red" />}
          width={horizontalScale(315)}
        />
        <InputsText
          hide
          onPress={()=>setActive(!active)}
          iconsLeft={<User color="black" />}
          value={value}
          defaultValue={"Folani"}
          editable={false}
          iconsRight={<Trash color="red" />}
          width={horizontalScale(315)}
        />
        <InputsText
          hide
          onPress={()=>setActive(!active)}
          iconsLeft={<User color="black" />}
          value={value}
          defaultValue={"Folani"}
          editable={false}
          iconsRight={<Trash color="red" />}
          width={horizontalScale(315)}
        />
        <InputsText
          hide
          onPress={()=>setActive(!active)}
          iconsLeft={<User color="black" />}
          value={value}
          defaultValue={"Folani"}
          editable={false}
          iconsRight={<Trash color="red" />}
          width={horizontalScale(315)}
        />
        <View style={{ marginTop: 50 }}>
          <Buttons title={"Save"} handleSubmit={()=>setSave(!save)}/>
        </View>
        <AlertBottomSheet
          isVisible={active}
          onPress={() => setActive(!active)}
          text={`Are you sure to remove ${value} from ${valueBranch}`}
          textbtn={"Confirm"}
          pressBtn={() => setActive(!active)}
          title={"User Remove"}
          icons={<UserRemove color="black" size={30} />}
        />
        <AlertBottomSheet
          isVisible={save}
          onPress={() => setSave(!save)}
          text={`Would you like to save edits maden to ${valueBranch}`}
          textbtn={"Confirm"}
          pressBtn={() => setSave(!save)}
          title={"Save Edits"}
          icons={<UserEdit color="black" size={30} />}
        />
      </View>
    </Header>
  );
};

export default EditBranch;
