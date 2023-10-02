import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import InputsSearch from '../../components/InputsSearch'
import { Userdata } from '../../../UserData'
import { Car, Setting2 } from 'iconsax-react-native'
import Buttons from '../../components/Buttons'

const AddMakeModel = ({navigation}) => {
    const [search, setSearch] = useState(Userdata);
    const [value, setValue]=useState('')


    const handleSearch = (text) => {
        setValue(text);
        const filtered = search.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setSearch(filtered);
      };

      
  return (
    <Header title={"Add Makes and Model"} nav={()=>navigation.goBack()}>
      <View style={{alignItems:"center"}}>
        <InputsSearch icon={<Car color='black'  />} handleSearch={handleSearch} search={search} value={value} label={"Select Make"} />
        <InputsSearch icon={<Setting2 color='black'  />} handleSearch={handleSearch} search={search} value={value} label={"Select Model"} />
        <View style={{marginTop:50, marginBottom:30}}>
        <Buttons title={"Save"}/>
        </View>
      </View>
    </Header>
  )
}

export default AddMakeModel