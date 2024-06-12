import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrgin } from '../Slices/navSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import NavigationCard from '../components/NavigationCard';
import RideOptionCard from '../components/RideOptionCard';

const MapScreen = () => {
  const orgin = useSelector(selectOrgin)
  const Stack = createNativeStackNavigator()

  return (
    <View style={tw`h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
        <View style={tw`h-full`}>
          <Stack.Navigator>
            <Stack.Screen name="NavigationCard" component={NavigationCard} options={{ headerShown: false }} />
            <Stack.Screen name="RideOptionCard" component={RideOptionCard} options={{headerShown:false}}/>
          </Stack.Navigator>
        </View>
      </View>
    </View>

  )
}

export default MapScreen