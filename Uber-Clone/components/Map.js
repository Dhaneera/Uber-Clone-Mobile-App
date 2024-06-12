import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrgin } from '../Slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API} from '@env'

const Map = () => {
    const orgin = useSelector(selectOrgin)
    const destination = useSelector(selectDestination)
  return (
    <MapView
    style={tw`h-full`}
        mapType='mutedStandard'
        initialRegion={{
            latitude: orgin.location.lat,
            longitude: orgin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
    >
        {orgin && destination &&(
            <MapViewDirections
                origin={orgin.description}
                destination={destination.description}
                apikey={GOOGLE_API}
                strokeColor='black'
                strokeWidth={3}
            />
        )}
        {orgin?.location &&(
            <Marker 
             coordinate={{
                latitude: orgin.location.lat,
                longitude: orgin.location.lng,
             }}
             title="Origin"
             description={orgin.description}
             identifier="origin"
            />

        )}
    </MapView>
  )
}

export default Map