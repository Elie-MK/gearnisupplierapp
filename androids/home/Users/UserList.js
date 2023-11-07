import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import KeybordAvoidHome from "../../components/KeybordAvoidHome";
import InputsText from "../../components/InputsText";
import {
  ArrowDown,
  ArrowDown2,
  Edit,
  SearchNormal1,
  User,
} from "iconsax-react-native";
import { horizontalScale } from "../../../utilities/Metrics";
import { useState } from "react";
import { Userdata } from "../../../UserData";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { useCustomFonts } from "../../../utilities/Fonts";
import HeaderHome from "../../components/HeaderHome";
import { TouchableOpacity } from "react-native";
import Color from "../../../utilities/Color";
import Buttons from "../../components/Buttons";
import Header from "../../components/Header";

const UserList = ({ navigation }) => {
  // const datasUsers = route.params?.datas;

  const [search, setSearch] = useState(Userdata);
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = (text) => {
    setValue(text);
    const filtered = search.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearch(filtered);
  };
  const handleUser = (item) => {
    if (!users.some((user) => user?.id === item?.id)) {
      setUsers((prev) => [...prev, item]);
    } else {
      alert("The user already exists");
    }
  };
  // useEffect(() => {
  //   setUsers((prev) => prev?.concat(Userdata));
  // }, [navigation]);

  // console.log(users);
  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Header nav={() => navigation.navigate("main")} title={"User List"}>
      <View style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          {/* Search User */}
          <InputsText
            value={value}
            label={"Search User"}
            onChangeText={handleSearch}
            iconsLeft={<SearchNormal1 color="black" />}
            width={horizontalScale(315)}
            iconsRight={<ArrowDown2 color="black" />}
          />
        </View>
        {value && (
          <View style={{ alignItems: "center", marginTop: 2 }}>
            <FlatList
              keyExtractor={(item) => item?.id}
              style={{
                height: 128,
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
                    }}
                  >
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <FlatList
          data={users}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <View
              style={{ alignItems: "center", marginTop: 15, marginBottom: 10 }}
            >
              <View
                style={{
                  width: horizontalScale(315),
                  height: 80,
                  elevation: 5,
                  backgroundColor: Color.light.themeColor,
                }}
              >
                <View
                  style={{
                    marginRight: 15,
                    marginLeft: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 20,
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Image
                        style={{ height: 56, width: 56, borderRadius: 4 }}
                        source={require("../../../assets/emptyprofile.jpg")}
                      />
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <View style={{ flexDirection: "row", gap: 10 }}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: fontGotham.medium,
                              }}
                            >
                              John
                              {/* {item?.fname} */}
                            </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: fontGotham.medium,
                              }}
                            >
                              Doe
                              {/* {item?.lname} */}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={{
                            fontSize: 10,
                            marginLeft: 20,
                            fontFamily: fontGotham.regular,
                          }}
                        >
                          Role Type
                        </Text>
                      </View>
                      <Text
                        style={{ fontSize: 12, fontFamily: fontGotham.regular }}
                      >
                        Branch Name
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("edituser")}
                  >
                    <Edit color="black" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
               <View
              style={{ alignItems: "center", marginTop: 15, marginBottom: 10 }}
            >
              <View
                style={{
                  width: horizontalScale(315),
                  height: 80,
                  elevation: 5,
                  backgroundColor: Color.light.themeColor,
                }}
              >
                <View
                  style={{
                    marginRight: 15,
                    marginLeft: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 20,
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Image
                        style={{ height: 56, width: 56, borderRadius: 4 }}
                        source={require("../../../assets/emptyprofile.jpg")}
                      />
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <View style={{ flexDirection: "row", gap: 10 }}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: fontGotham.medium,
                              }}
                            >
                              John
                              {/* {item?.fname} */}
                            </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: fontGotham.medium,
                              }}
                            >
                              Doe
                              {/* {item?.lname} */}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={{
                            fontSize: 10,
                            marginLeft: 20,
                            fontFamily: fontGotham.regular,
                          }}
                        >
                          Role Type
                        </Text>
                      </View>
                      <Text
                        style={{ fontSize: 12, fontFamily: fontGotham.regular }}
                      >
                        Branch Name
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("edituser")}
                  >
                    <Edit color="black" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={{ marginTop: 10 }}>
            <Buttons
              hide
              title={"Create User"}
              handleSubmit={() => navigation.navigate("createuser")}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Buttons title={"Save"} />
          </View>
        </View>
      </View>
    </Header>
  );
};

export default UserList;
