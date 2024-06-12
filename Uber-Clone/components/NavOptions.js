import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrgin } from '../Slices/navSlice'
import tw from 'twrnc';


const data=[
    {
        id:1,
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen',
    },
    {
        id:2,
        title:'Order Food',
        image:'https://links.papareact.com/28w',
        screen:'EatsScreen',

    }
]


const NavOptions = () => {

    const orgin = useSelector(selectOrgin)
    // const navigation=useNavigation()

    
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity style={tw` p-2 pl-6 pb-8 bg-gray-200 m-2 mt-3 ml-0 w-40 `} >
                <View>
                <Image
                 source={{uri:item.image}}
                 style={{width:120,height:120,resizeMode:'contain'}}/>
                 <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions