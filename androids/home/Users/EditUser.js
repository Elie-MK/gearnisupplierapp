import { View, Text } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import InputsText from "../../components/InputsText";
import { horizontalScale } from "../../../utilities/Metrics";
import {
  ArrowDown2,
  CloseCircle,
  Profile,
  ProfileAdd,
  ProfileDelete,
  ProfileRemove,
  Shop,
  Sms,
  User,
  UserAdd,
  UserEdit,
} from "iconsax-react-native";
import Inputs from "../../components/Inputs";
import InputsNumber from "../companyProfile/components/InputsNumber";
import ModalCountry from "../../components/ModalCountry";
import Buttons from "../../components/Buttons";
import AlertModal from "../../components/AlertModal";
import AlertBottomSheet from "../../components/AlertBottomSheet";

const EditUser = ({ navigation }) => {
  const defaultFlag = "🇹🇳";
  const defaultCountryCode = "+216";
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [isvisible, setIsVisible] = useState(false);

  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    // setNationality(item.name)
    setFlag(item.flag);
    setVisible(!visible);
  };
  const handleInvite = ()=>{
    setIsVisible(!isvisible)
  }
  const handleDeleteUser = ()=>{
    setIsVisible(!isvisible)
  }
  return (
    <Header title={"Create User"} nav={() => navigation.goBack()}>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: horizontalScale(315),
            }}
          >
            {/* First Name */}
            <InputsText
              padding
              placeholder={"Joe"}
              width={horizontalScale(155)}
              label={"First Name"}
              iconsLeft={<Profile color="black" />}
            />
            {/* Last Name */}
            <InputsText
              padding
              placeholder={"Smith"}
              width={horizontalScale(155)}
              label={"Last Name"}
              iconsLeft={<Profile color="black" />}
            />
          </View>
          {/* Phone Number */}
          <InputsNumber
            label={"Phone Number"}
            flag={flag}
            countryCode={countryCode}
            defaultValue={"123456789"}
            onChangeNumber={(e) => setValue(e)}
            press={() => setVisible(!visible)}
          />
          {/* Email */}
          <InputsText
            placeholder={"Joe"}
            width={horizontalScale(315)}
            label={"Email (optional)"}
            iconsLeft={<Sms color="black" />}
            iconsRight={<CloseCircle color="black" />}
          />
          {/* Search Branch */}
          <InputsText
            placeholder={"Joe"}
            width={horizontalScale(315)}
            label={"Search Branch"}
            iconsLeft={<Shop color="black" />}
            iconsRight={<CloseCircle color="black" />}
          />
          {/* Pick Role */}
          <InputsText
            placeholder={"Joe"}
            width={horizontalScale(315)}
            label={"Pick Role"}
            iconsLeft={<UserEdit color="black" />}
            iconsRight={<ArrowDown2 color="black" />}
          />

          <View style={{ marginTop: 40 }}>
            <View style={{marginTop:20}}>
            <Buttons hide hided handleSubmit={handleDeleteUser} title={"Delete"} />
            </View>
            <View style={{marginTop:20}}>
            <Buttons  handleSubmit={handleInvite} title={"Invite User"} />
            </View>
          </View>
        </View>
        <AlertBottomSheet
          isVisible={isvisible}
          pressBtn={()=>setIsVisible(!isvisible)}
          textbtn={"Delete"}
          title={"User Delete"}
          text={"Are you sure you wante to permanently delete your account and all associated data?"}
          subtext={"This action cannot be undone."}
          icons={<ProfileDelete color="black" size={30} />}
          onPress={handleDeleteUser}
        />
        <ModalCountry
          value={value}
          isVisible={visible}
          hideModal={() => setVisible(!visible)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange(item)}
        />
      </View>
    </Header>
  );
};

export default EditUser;
