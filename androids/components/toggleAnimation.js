import { LayoutAnimation } from "react-native";

export const toggleAnimation = {
    duration:700,
    update:{
        duration:700,
        property:LayoutAnimation.Properties.opacity, 
        type:LayoutAnimation.Types.easeInEaseOut
    }, 
    delete:{
        duration:250,
        property:LayoutAnimation.Properties.opacity,
        type:LayoutAnimation.Types.easeInEaseOut
    }
}