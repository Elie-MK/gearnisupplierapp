import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Globals from '../../components/Global'
import { useCustomFonts } from '../../../utilities/Fonts';

const Dashboard = () => {
    const { fontGotham, fontsLoaded } = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Globals>
        <View>
            <View>

            </View>
            <View>
                <Text style={{fontSize:20, fontFamily:fontGotham.bold}}>Dashboard</Text>
            </View>
            <View>
                
            </View>
        </View>
    </Globals>
  )
}

export default Dashboard
