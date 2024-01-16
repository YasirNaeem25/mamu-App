import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View, StyleSheet, Image } from 'react-native'
import Button from '../../../Component/AuthFeild/Button'
import OutlineButton from '../../../Component/AuthFeild/OutlineButton'
import Input from '../../../Component/AuthFeild/Input'

function Event({ navigation }) {
    return (
        <ScrollView>
            <View style={{ width: 350, height: 712, backgroundColor: '#F5F5F5', paddingBottom: 13 }}>
                <View style={styles.MainBox}>
                    <View>
                        <Image source={require("../../../Assests/mamologo.png")} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text>999</Text>
                        <Image source={require('../../../Assests/Heart.png')} />
                    </View>
                </View>
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 20, width: 312, textAlign: 'center', paddingTop: 32, }}>To enter on en event please enter code or scan QR code - some text.</Text>
                        <View>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 216, height: 216, backgroundColor: 'white', marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../Assests/Scaner.png')} />
                                </View>
                            </View>

                            <View style={{ paddingTop: 23, padding: 15, }} >
                                <OutlineButton onPress={() => { }} label='Scan QR Code ' color='#E53799' />
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
                                    <Input textFocuscolor='#F5F5F5' label='Enter Code Manualy' validationtext="Enter Six Digits code" />
                                </View>
                                <View style={{ width: '100%', paddingTop: 10 }} >
                                    <Button onPress={() => { navigation.navigate('addEvent') }} color='#23B7C5' label='Next' />
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
        justifyContent: 'space-between',
        // alignItems:'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    any: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        gap: 5,
    },
})

export default Event
