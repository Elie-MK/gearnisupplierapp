import { View, Text } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import { Dimensions } from 'react-native'
import { horizontalScale } from '../../utilities/Metrics'
import Color from '../../utilities/Color'
import Buttons from './Buttons'

const ModalChooseUpload = ({visible, onGallery, onFile, onCamera, cancelBtn }) => {
  return (
    <Modal transparent={true} visible={visible} >
        <TouchableOpacity activeOpacity={0.9} onPress={cancelBtn}>
            <BlurView  intensity={8}
            tint="dark"
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}>
                <View style={{alignItems:"center", marginTop:400}}>
                  <TouchableOpacity activeOpacity={0.7} onPress={onGallery}>
                        <View style={{width:horizontalScale(315), height:56, backgroundColor:"white", alignItems:"center", justifyContent:"center", borderRadius:8, borderBottomColor:Color.light.main, borderBottomWidth:2, elevation:5}}>
                            <Text>Photo Gallery</Text>
                        </View>
                    </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7} onPress={onFile}>
                        <View style={{width:horizontalScale(315), height:56, backgroundColor:"white", alignItems:"center", justifyContent:"center", borderRadius:8, borderBottomColor:Color.light.main, borderBottomWidth:2, elevation:5}}>
                            <Text>Storage File</Text>
                        </View>
                    </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7} onPress={onCamera}>
                        <View style={{width:horizontalScale(315), height:56, backgroundColor:"white", alignItems:"center", justifyContent:"center", borderRadius:8, elevation:5}}>
                            <Text>Camera</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginTop:30, elevation:5}}>
                        <Buttons title={"Cancel"} handleSubmit={cancelBtn} />
                    </View>
                </View>
            </BlurView>
        </TouchableOpacity>
    </Modal>
  )
}

export default ModalChooseUpload