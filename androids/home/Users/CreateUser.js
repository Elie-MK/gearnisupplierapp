import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import InputsText from "../../components/InputsText";
import { horizontalScale } from "../../../utilities/Metrics";
import {
  ArrowDown2,
  CloseCircle,
  Profile,
  ProfileAdd,
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

const CreateUser = ({ navigation }) => {
  const defaultFlag = "🇹🇳";
  const defaultCountryCode = "+216";
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [isvisible, setIsVisible] = useState(false);
  // Datas
  const [fname, setFname]=useState('')
  const [lname, setLname]=useState('')
  const [phoneN, setPhoneN]=useState('')
  const [email, setEmail]=useState('')
  const [branch, setBranch]=useState('')
  const [role, setRole]=useState('')
  const [users, setUsers]=useState([])
  

  const datas = 
    {
      id:Math.floor(Math.random() * 1000000),
      fname,
      lname,
      phone_number:countryCode + phoneN,
      email,
      branch,
      role
    }
  

console.log(users);

  const handleCreateUser = ()=>{
    navigation.replace("listusers", {datas})
    setIsVisible(!isvisible)
  }

  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    // setNationality(item.name)
    setFlag(item.flag);
    setVisible(!visible);
  };
  const handleInvite = ()=>{
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
            value={fname}
            onChangeText={(e)=>setFname(e)}
              padding
              placeholder={"Joe"}
              width={horizontalScale(155)}
              label={"First Name"}
              iconsLeft={<Profile color="black" />}
            />
            {/* Last Name */}
            <InputsText
            value={lname}
            onChangeText={(e)=>setLname(e)}
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
            number={phoneN}
            onChangeNumber={(e) => setPhoneN(e)}
            press={() => setVisible(!visible)}
          />
          {/* Email */}
          <InputsText
          value={email}
          onChangeText={(e)=>setEmail(e)}
            placeholder={"Joe"}
            width={horizontalScale(315)}
            label={"Email (optional)"}
            iconsLeft={<Sms color="black" />}
            
          />
          {/* Search Branch */}
          <InputsText
          value={branch}
          onChangeText={e=>setBranch(e)}
            placeholder={"Joe"}
            width={horizontalScale(315)}
            label={"Search Branch"}
            iconsLeft={<Shop color="black" />}
          />
          {/* Pick Role */}
          <InputsText
          value={role}
          onChangeText={e=>setRole(e)}
            placeholder={"Joe"}
            width={horizontalScale(315)}
            label={"Pick Role"}
            iconsLeft={<UserEdit color="black" />}
            iconsRight={<ArrowDown2 color="black" />}
          />

          <View style={{ marginTop: 40 }}>
            <Buttons handleSubmit={handleInvite} title={"Invite User"} />
          </View>
        </View>
        <AlertModal
          visible={isvisible}
          btnText={"Close"}
          title={"User Created"}
          text={"User account created! Invitation sent to email."}
          subtext={"Check inbox to get started. Thanks for using our app!"}
          icons={<ProfileAdd color="black" size={30} />}
          onPress={handleCreateUser}
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

export default CreateUser;
