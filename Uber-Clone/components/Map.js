import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrgin } from '../Slices/navSlice';
const Map = () => {
    const orgin = useSelector(selectOrgin)
  return (
    <MapView
    style={tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
            latitude: orgin.location.lat,
            longitude: orgin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
    >
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