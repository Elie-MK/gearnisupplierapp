import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Home } from 'iconsax-react-native'

const DrawerContent = (props) => {
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem
       
          label="Profile"
          onPress={() =>navigation.navigate('profile')}
        />
  </DrawerContentScrollView>
  )
}

export default DrawerContent

