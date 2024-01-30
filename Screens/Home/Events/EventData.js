import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View, StyleSheet, Image } from 'react-native'
import Button from '../../../Component/AuthFeild/Button'
import OutlineButton from '../../../Component/AuthFeild/OutlineButton'
import Input from '../../../Component/AuthFeild/Input'

function EventData({ navigation }) {
    return (
        <ScrollView>
            <View style={{ width: 350, height: 712, backgroundColor: '#F5F5F5', paddingBottom: 13 }}>
                <View style={styles.MainBox}>

                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18 }}>Share Your Event</Text>
                    </View>
                    <View style={{ display: 'flex', left:-20,top: 10, alignItems: 'center', gap: 13, flexDirection: 'row',alignSelf:'flex-start' }}>
                        <View>
                            {/* <Image style={{ height: 70, width: 70, borderRadius: 10 }} source={{ uri: eventimage.uri }} /> */}
                            {/* <Image source={require('../../Assests/Location.png')} /> */}
                            <Image source={require('../../../Assests/Users.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: '#666666' }}>Friday, 2024,07,20</Text>
                            <Text style={{ fontSize: 20, color: '#666666' }}>Rockey</Text>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../../../Assests/Location.png')} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12, color: '#666666' }}>Hard Rock Cafe Berlin</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 20, width: 312, paddingTop: 32, fontWeight: '500' }}>Share your event as</Text>
                        <View>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 216, height: 216, backgroundColor: 'white', marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../Assests/Scaner.png')} />
                                </View>
                            </View>

                            <View style={{ paddingTop: 23, padding: 15, }} >
                                <OutlineButton onPress={() => { }} label='Scan QR Code ' color='#23B7C5' />
                                <View style={styles.any}>
                                    <View style={{
                                        width: 140,
                                        height: 1,
                                        marginLeft: 20,
                                        backgroundColor: "black"
                                    }}></View>
                                    <View><Text style={{
                                        color: 'black',
                                        fontSize: 15,
                                        marginLeft: 10
                                    }}>or</Text></View>
                                    <View style={{
                                        width: 140,
                                        height: 1,
                                        marginLeft: 10,
                                        backgroundColor: "black"
                                    }} ></View>

                                </View>
                                <View style={{ width: '100%', paddingLeft: 12, paddingTop: 10 }}>
                                    <Input textFocuscolor='#F5F5F5' label='External Link' validationtext="" />
                                </View>
                                <View style={{ width: '100%', paddingTop: 10 }} >
                                    <Button onPress={() => { navigation.navigate('addEvent') }} color='#23B7C5' label='GO TO EVENT' />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    MainBox: {
        padding: 30,
        paddingTop: 35,
        backgroundColor: 'white',
        width: 360,
        display: 'flex',
        justifyContent: 'center',
        // alignItems:'center',
        // flexDirection: 'row',
        alignItems: "center",


    },
    any: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        gap: 5,
    },
})

export default EventData
