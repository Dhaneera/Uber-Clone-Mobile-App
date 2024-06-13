import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';


const data = [
    {
        id:'1',
        icon:"home",
        location:"Home",
        destination:"Mount-Lavinia"
    },
    {
        id:'2',
        icon:"briefcase",
        location:"WORK",
        destination:"London Eye,London,UK",
    },
];

const NavFavourite = () => {
 
  return (
   <FlatList 
   data={data} 
   keyExtractor={(item)=>item.id}
   ItemSeparatorComponent={()=>(
    <View style={[tw`bg-gray-200`,{height:0.5}]}/>
   )}
   renderItem={({item:{location,icon,destination}})=>(
    <TouchableOpacity style={tw`flex-row item-center  pt-5`}>
        <Icon
        style={tw`m-4 justify center rounded-full bg-gray-300 p-3`}
        name={icon}
        type='ionicon'
        color='white'
        size={20}/>
        <View style={tw`item-center justify-center`}>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
        </View>
    </TouchableOpacity>
   )}/>
  )
}

export default NavFavourite