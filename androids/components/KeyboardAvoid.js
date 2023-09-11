import { Dimensions, Platform, StatusBar } from 'react-native'
import { View, Text, Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native'

const KeyboardAvoid = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex:1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom:5}} >

        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoid