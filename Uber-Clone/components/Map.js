import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrgin } from '../Slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API} from '@env'

const Map = () => {
    const orgin = useSelector(selectOrgin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

  useEffect(()=>{
    if(!orgin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
        edgePadding:{top:50,right:50,bottom:50,left:50}
    })
  },[])

  return (
    <MapView
    ref={mapRef}
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
        {destination?.location &&(
            <Marker 
             coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
             }}
             title="Destination"
             description={destination.description}
             identifier="destination"
            />

        )}
    </MapView>
  )
}

export default Map