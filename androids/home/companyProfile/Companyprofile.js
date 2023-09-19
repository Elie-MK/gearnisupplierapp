import { View, Text } from 'react-native'
import React, { useState } from 'react'
import KeybordAvoidHome from '../../components/KeybordAvoidHome'
import Picturepprofile from '../../components/Picturepprofile'
import { verticalScale } from '../../../utilities/Metrics'
import Inputs from './components/Inputs'
import { CalendarSearch, CloseCircle, Flag, Hashtag, Shop, User, Verify, People, SearchNormal1, Sms, Location } from 'iconsax-react-native'
import { useCustomFonts } from '../../../utilities/Fonts'
import Dropdowns from './components/Dropdowns'
import ModalCountry from '../../components/ModalCountry'
import InputsNumber from './components/InputsNumber'
import InputCountries from './components/InputCountries'
import { Divider } from '@rneui/base'

const Companyprofile = () => {
  const defaultCountryCode = "+216"
  const defaultCountry = "Tunisia"
  const defaultFlag = "🇹🇳"
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [flag, setFlag] = useState(defaultFlag);
  const [country, setCountry]=useState(defaultCountry)
  const [visible, setVisible]=useState(false)
  const [visible2, setVisible2]=useState(false)
  const [value, setValue]=useState('')
  const [value2, setValue2]=useState('')

  const onCountryChange = (item) => {
    setCountryCode(item.dial_code);
    // setNationality(item.name)
    // setCountry(item.name)
    setFlag(item.flag)
    setVisible(!visible);
    };

  const onCountryChange2 = (item) => {
    setCountryCode(item.dial_code);
    setCountry(item.name)
    setFlag(item.flag)
    setVisible(!visible);
    };

  const { fontGotham, fontsLoaded } = useCustomFonts();
  if (!fontsLoaded) {
    return null
  }
  return (
   <KeybordAvoidHome title={"Company Profile"}>
    <View>
    <View style={{alignItems:"center", marginTop:verticalScale(20)}}>
      <Picturepprofile  />
      <View style={{flexDirection:"row", alignItems:"center", gap:4, marginTop:10}}>
      <Text style={{fontFamily:fontGotham.bold}}>Verified</Text>
      <Verify color='blue' />
      </View>
    </View>
    <View style={{alignItems:"center"}}>
   <View>
   <Inputs label={"Company Name *"} iconsLeft={<Shop color='black' />} 
      placeholder={"Input"} editable={false}
      />
   </View>
    <View>
    <Inputs label={"Company Owner Full Name *"} iconsLeft={<User color='black' />} 
      placeholder={"Input"} editable={false}
      />
    </View>
     <View>
     <Inputs label={"Identity Card *"} iconsLeft={<Hashtag color='black' />} 
       defaultValue={"123456698"} iconsRight={<CloseCircle color='black' />}
      />
     </View>
    <View>
    <Inputs label={"Date of Birth *"} iconsLeft={<CalendarSearch color='black' />} 
      defaultValue={"14/12/1920"}  iconsRight={<CloseCircle color='black' />}
      />
    </View>
     <View>
     <Inputs label={"Nationality *"} iconsLeft={<Flag color='black' />} 
      placeholder={"Input"} defaultValue={"Tunisia"} 
      />
     </View>
     <View>
     <Inputs label={"Tax Registration Number *"} iconsLeft={<Hashtag color='black' />} 
      placeholder={"Input"} defaultValue={"123456987/M/A/E/001"}  iconsRight={<CloseCircle color='black' />}
      />
     </View>
   <View>
    <Dropdowns icons={ ()=> <People color="black"
            style={{marginRight:10}}
            />}  label={"Number of Employees"}/>
   </View>
   <View>
    <Dropdowns icons={ ()=> <SearchNormal1 color="black"
            style={{marginRight:10}}
            />}  label={"Industry"} />
   </View>


<View>
  <InputsNumber label={"Phone Number"}  flag={flag} countryCode={countryCode} defaultValue={"123456789"} onChangeNumber={(e)=>setValue(e)} press={()=>setVisible(!visible)} />
</View>
<View>
  <InputsNumber label={"Mobile Number"} flag={flag} countryCode={countryCode} defaultValue={"123456789"} onChangeNumber={(e)=>setValue2(e)} press={()=>setVisible2(!visible2)} />
</View>
<View>
<Inputs label={"Email *"} iconsLeft={<Sms color='black' />} 
      placeholder={"Input"} defaultValue={"name@email.com"}  iconsRight={<CloseCircle color='black' />}
      />
</View>
<View>
  <InputCountries label={"Country of residence *"} country={country} press={()=>setVisible(!visible)} />
</View>
<View>
<Inputs label={"Physical adress *"} iconsLeft={<Location color='black' />} 
       defaultValue={"tunis tunis "}  iconsRight={<CloseCircle color='black' />}
      />
</View>
    </View>
    <Divider color='black' width={2} style={{marginTop:10}} />
    <ModalCountry  value={value}
          isVisible={visible}
          hideModal={() => setVisible(!visible)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange(item)}  />
    <ModalCountry  value={value2}
          isVisible={visible2}
          hideModal={() => setVisible2(!visible2)}
          setValue={(text) => setValue(text)}
          onCountryChange={(item) => onCountryChange2(item)}  />
    </View>
   </KeybordAvoidHome>
  )
}

export default Companyprofile