import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {GOOGLE_API} from '@env'
import { setDestination } from '../Slices/navSlice';
import NavFavourite from './NavFavourite';

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
        </SafeAreaView>
    )
}

export default NavigationCard