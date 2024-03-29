import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

function Profile({ navigation }) {
    return (
        <ScrollView>
            <View style={{ width: 360, paddingBottom: 10, backgroundColor: "#F5F5F5", }}>
                <View style={{ paddingTop: 76, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <View style={{ width: 112, height: 112, backgroundColor: "#FABABA", padding: 10, borderRadius: 56, display: 'flex', justifyContent: 'flex-end', alignItems: "center" }}>
                        <TouchableOpacity >
                            <Text>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, paddingTop: 5 }}>Username</Text>
                </View>
                <View style={{ paddingLeft: 16, paddingRight: 16, }}>
                    <Text style={{ paddingTop: 24, color: '#666666', fontSize: 14, paddingBottom: 5 }}>Account</Text>
                    <View style={{
                        width: 328, height: 104, borderRadius: 8, backgroundColor: '#FFFFFF',
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3, // Add shadowRadius property
                        elevation: 5, // Add elevation for Android
                        padding: 8

                    }}>
                        <View style={{
                            display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                            borderBottomColor: '#666666',
                            borderBottomWidth: 1
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Username</Text></View>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate('EditUserNames') }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                        <View>
                                            <Text style={{ fontSize: 14, color: '#666666' }}>Username</Text>
                                        </View>
                                        <View>
                                            <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* <View><View><Text style={{ color: '#666666', fontSize: 14 }}>Username</Text></View><View> <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} /></View></View> */}
                        </View>
                        <View style={{
                            display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                            borderBottomColor: '#666666',
                            borderBottomWidth: 1
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Email</Text></View>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate('EditEmailAdress') }}>
                                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 8 }}>
                                        <View>
                                            <Text style={{ fontSize: 14, color: '#666666' }}>username@something.com</Text>
                                        </View>
                                        <View>
                                            <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{
                            display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                            borderBottomColor: '#666666',
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Password</Text></View>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate('EditPassword') }} >
                                    <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={{ paddingTop: 24, color: "#666666", paddingBottom: 5 }}>Payment and Credits</Text>
                    <View style={{
                        width: 328, height: 104, borderRadius: 8, backgroundColor: '#FFFFFF',
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3, // Add shadowRadius property
                        elevation: 5, // Add elevation for Android
                        padding: 8

                    }}>
                        <View style={{
                            display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                            borderBottomColor: '#666666',
                            borderBottomWidth: 1
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Credit Balance</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>

                                <View>
                                    <TouchableOpacity onPress={() => { navigation.navigate('payment') }}>
                                        <Text style={{ fontSize: 14, color: '#666666' }}>999</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                                </View>
                            </View>
                            {/* <View><View><Text style={{ color: '#666666', fontSize: 14 }}>Username</Text></View><View> <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} /></View></View> */}
                        </View>
                        <View style={{
                            display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                            borderBottomColor: '#666666',
                            borderBottomWidth: 1
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Payment Methods</Text></View>
                            <View>
                                <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                            </View>
                        </View>
                        <View style={{
                            display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                            borderBottomColor: '#666666',
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Payment History</Text></View>
                            <View>
                                <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                            </View>
                        </View>
                    </View>
                    <Text style={{ paddingTop: 24, color: "#666666", paddingBottom: 5 }}>Preferences</Text>
                    <View style={{
                        width: 328, borderRadius: 8, backgroundColor: '#FFFFFF',
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3, // Add shadowRadius property
                        elevation: 5, // Add elevation for Android
                        padding: 8

                    }}>
                        <View style={{
                            display: 'flex', flexDirection: 'row', padding: 3, alignItems: 'center', justifyContent
                                : 'space-between',
                        }}>
                            <View><Text style={{ color: '#666666', fontSize: 14 }}>Credit Balance</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <View>
                                    <Text style={{ fontSize: 14, color: '#666666' }}>999</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} />
                                </View>
                            </View>
                            {/* <View><View><Text style={{ color: '#666666', fontSize: 14 }}>Username</Text></View><View> <Image source={require('../../../Assests/ArrowForwardIosFilled.png')} /></View></View> */}
                        </View>

                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('SwitchAcount') }}>
                        <Text style={{ paddingTop: 24, color: "#1565C0" }}>Switch to Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ paddingTop: 24, color: "#C62828" }}>Delete Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ paddingTop: 24, color: "black" }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
    )
}

export default Profile
