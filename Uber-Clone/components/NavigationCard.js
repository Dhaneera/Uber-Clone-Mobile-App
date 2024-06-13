import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {GOOGLE_API} from '@env'
import { setDestination } from '../Slices/navSlice';
import NavFavourite from './NavFavourite';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCar, faCookieBite } from '@fortawesome/free-solid-svg-icons';

const NavigationCard = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw` flex-1 bg-white`}>
            <Text style={tw`text-center py-5 text-xl`}>Hello Dhaneera 🤗 </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where To'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        returnKeyType={"search"}
                        minLength={2}
                        enablePoweredByContainer={false}
                        onPress={(data, detils = null) => {
                            dispatch(setDestination({
                                location:detils.geometry.location,
                                description:data.description,
                            }))

                            navigation.navigate('RideOptionCard')
                        }}
                        fetchDetails={true}
                        query={{
                            key: GOOGLE_API,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                backgroundColor: 'white',
                                paddingTop: 20,
                                flex: 0,
                            },
                            textInput: {
                                backgroundColor: '#DDDDDF',
                                borderRadius: 0,
                                fontSize: 18,
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0,
                            },
                        }} />
                </View>
                <NavFavourite/>
            </View>
            <View style={tw`justify-evenly flex-row mt-auto border-gray-100 `}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('RideOptionCard')}
                style={tw`flex-row  justify-between bg-black w-24 px-5 py-3 rounded-full m-2  `}>
                    <FontAwesomeIcon  icon={faCar} color='white' size={16} />
                    <Text style={tw`text-white text-center`}>  Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-row justify-between bg-black w-24 px-5 py-3 rounded-full m-2 `}>
                    <FontAwesomeIcon  icon={faCookieBite} color='white' size={16}/>
                    <Text style={tw`text-white text-center`}>  Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigationCard