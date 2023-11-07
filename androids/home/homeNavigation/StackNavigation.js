import { View, Text } from "react-native";
import React from "react";
import Profiles from "../Profile/Profiles";
import Companyprofile from "../companyProfile/Companyprofile";
import UserList from "../Users/UserList";
import Branches from "../Branches/Branches";
import CreateUser from "../Users/CreateUser";
import AddBranches from "../Branches/addBranches/AddBranches";
import EditBranch from "../Branches/EditBranch/EditBranch";
import EditUser from "../Users/EditUser";
import Requests from "../Requests/Requests";
import NewBid from "../Requests/NewBid";
import Manages from "../MakeModels/Manages";
import AddMakeModel from "../MakeModels/AddMakeModel";
import EditModel from "../MakeModels/EditModel";
import DeleteProfile from "../DeleteAccount/DeleteProfile";
import DeleteReason from "../DeleteAccount/DeleteReason";
import ReachSupport from "../Report/ReachSupport";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../Dashboard/Dashboard";
import Notifications from "../Dashboard/Notifications";
import ViewImgCamera from "../ViewImgCamera/ViewImgCamera";

const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="main"
    >
      <Stack.Screen name="main" component={Dashboard} />
      <Stack.Screen name="profile" component={Profiles} />
      <Stack.Screen name="companyprofile" component={Companyprofile} />
      <Stack.Screen name="listusers" component={UserList} />
      <Stack.Screen name="branches" component={Branches} />
      <Stack.Screen name="createuser" component={CreateUser} />
      <Stack.Screen name="addbranches" component={AddBranches} />
      <Stack.Screen name="editbranch" component={EditBranch} />
      <Stack.Screen name="edituser" component={EditUser} />
      <Stack.Screen name="requests" component={Requests} />
      <Stack.Screen name="newbid" component={NewBid} />
      <Stack.Screen name="makemodels" component={Manages} />
      <Stack.Screen name="addnewmake" component={AddMakeModel} />
      <Stack.Screen name="editmodel" component={EditModel} />
      <Stack.Screen name="deleteprofile" component={DeleteProfile} />
      <Stack.Screen name="deletereasons" component={DeleteReason} />
      <Stack.Screen name="report" component={ReachSupport} />
      <Stack.Screen name="notification" component={Notifications} />
      <Stack.Screen name="viewimgcamera" component={ViewImgCamera} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
