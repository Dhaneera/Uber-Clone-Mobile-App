import { Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API} from '@env'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDestination, setOrgin } from '../Slices/navSlice';

const HomeScreen = () => {
    const navigation=useNavigation();
    const dispatch=useDispatch();

    return (
        <SafeAreaView style={tw` bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{ uri: 'https://links.papareact.com/gzs' }} />
                    <GooglePlacesAutocomplete
                    nearbyPlacesAPI='GooglePlaceSearch'
                    placeholder='Where Form'
                    debounce={400}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_API,
                        language: 'en',
                    }}
                    styles={{
                        container: {
                            flex: 0,
                            width:350,
                        },
                        textInput: {
                            fontSize: 18,
                            fontWeight:800,
                        }
                    }}
                    onPress={(data,details)=>{
                        dispatch(setOrgin({
                            
                        }))
                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    minLength={2}
                    />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen