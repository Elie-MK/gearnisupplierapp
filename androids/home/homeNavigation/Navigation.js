import { View, Text, Platform } from 'react-native'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import Menus from '../Dashboard/Menus';
import Notifications from '../Dashboard/Notifications';
import Profiles from '../Profile/Profiles';
import Companyprofile from '../companyProfile/Companyprofile';
import Branches from '../Branches/Branches';
import DrawerNavigation from './DrawerNavigation';
import AddBranches from '../Branches/addBranches/AddBranches';
import UserList from '../Users/UserList';
import CreateUser from '../Users/CreateUser';
import EditBranch from '../Branches/EditBranch/EditBranch';
import EditUser from '../Users/EditUser';
import Requests from '../Requests/Requests';
import NewBid from '../Requests/NewBid';

const Navigation = () => {
    const Stack = createStackNavigator();

  return (
    <>
   {/* Android */}
   {Platform.OS === "android" && (
     
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="main"
      >
          <Stack.Screen name='main'>
            {
              ()=>(
                <DrawerNavigation>
 <Stack.Screen name='dashboard' component={Dashboard} />
        <Stack.Screen name='notifications' component={Notifications} />
       
                </DrawerNavigation>
              )
            }

          </Stack.Screen>
          <Stack.Screen name='profile' component={Profiles} />
        <Stack.Screen name='companyprofile' component={Companyprofile} />
        <Stack.Screen name='listusers' component={UserList} />
        <Stack.Screen name='branches' component={Branches} />
        <Stack.Screen name='createuser' component={CreateUser} />
        <Stack.Screen name='addbranches' component={AddBranches} />
        <Stack.Screen name='editbranch' component={EditBranch} />
        <Stack.Screen name='edituser' component={EditUser} />
        <Stack.Screen name='requests' component={Requests} />
        <Stack.Screen name='newbid' component={NewBid} />
      </Stack.Navigator>
)}


{/* IOS */}
{Platform.OS == "ios" && (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={WelcomeIos} />
    </Stack.Navigator>
)}
</>
  )
}

export default Navigation