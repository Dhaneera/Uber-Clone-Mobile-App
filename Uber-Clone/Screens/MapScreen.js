import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrgin } from '../Slices/navSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../components/Map';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const orgin=useSelector(selectOrgin)
  const Stack=createNativeStackNavigator()

  return (
     <View style={tw`h-1/2`}>
      <Map/>
      <View style={tw`1/2`}></View>
     </View>
  )
}

export default MapScreen