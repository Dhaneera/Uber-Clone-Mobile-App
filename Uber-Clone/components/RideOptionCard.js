import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const data=[
  {
    id:1,
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn",
  },
  {
    id:2,
    title:"Uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8",
  },
  {
    id:3,
    title:"Uber LUX",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf",
  },
]

const RideOptionCard = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`h-full`}>

        <TouchableOpacity onPress={()=>navigation.navigate('NavigationCard')}
        style={[tw`absolute top-3 left-5 p-3 rounded-full`]}>
          <Icon name='chevron-left' type='fontawsome'/>
        </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>{
        <TouchableOpacity>
          <Image
          style={{
            width:100,
            height:100,
            resizeMode:'contain'
          }}
          source={{uri:image}}
          />
        </TouchableOpacity>
      }}
      />
    </SafeAreaView>
  )
}

export default RideOptionCard