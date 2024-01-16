import React from 'react'
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'

function EditDescriptionAndImage({ navigation }) {
    return (
        <ScrollView>
            <View style={{ height: 665, backgroundColor: '#F5F5F5' }}>
                <Header label='Create New Event' />
                <View style={{ padding: 24 }}>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View><Text style={{ fontSize: 20, color: "black" }}>Event Cover</Text></View>
                        <View style={{
                            width: 32, height: 32, display: 'flex',
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.5,
                            shadowRadius: 3, // Add shadowRadius property
                            elevation: 5, // Add elevation for Android
                            borderRadius: 5,
                            backgroundColor: "white",
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../../Assests/Edit.png')} />
                        </View>

                    </View>
                    <ImageBackground style={{ width: 312, padding: 15, height: 312, marginTop: 10, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} source={require('../../Assests/ProfileBackgroundimage.png')}>
                        <View style={{
                            width: 32, height: 32, display: 'flex',
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.5,
                            shadowRadius: 3, // Add shadowRadius property
                            elevation: 5, // Add elevation for Android
                            borderRadius: 5,
                            backgroundColor: "white",
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={require('../../Assests/Edit.png')} />
                        </View>
                    </ImageBackground>
                    <View style={{ paddingTop: 24 }}>
                        <Text style={{ fontSize: 28, color: 'black' }}>Event Description</Text>
                        <Text style={{ fontSize: 12, color: '#666666', paddingTop: 5 }}>Provide more information about your event so that guests know what to expect.</Text>
                        <View style={{ paddingTop: 24 }}>
                            <Input textFocuscolor='#F5F5F5' label='Add description' />
                        </View>
                    </View>
                </View>
            </View >
            <View style={{
                width: 360, height: 90, backgroundColor: "white",
                position: 'relative', bottom: 0,
            }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='next' onPress={() => { navigation.navigate('playlist') }} />
                </View>
            </View>
        </ScrollView >
    )
}

export default EditDescriptionAndImage
