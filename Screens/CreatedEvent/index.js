import React, { useState } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import SearchInput from '../../Component/AuthFeild/SearchInput'

function CreatedEvent({ navigation }) {


    const MusicData = [
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },
        {
            title: 'Show Me How To Live',
            userAudio: 'Audioslave',
            AudioTiming: "3:45",
            image: '../../../Assests/Music.png',
        },

    ]
    return (
        <ScrollView>
            <View style={{ height: 665, backgroundColor: "#f5f5f5" }}>
                <Header label='Create New Event' />
                {/* ////? */}
                <View style={{ width: 360, backgroundColor: 'white', padding: 16 }}>
                    <View style={{ display: 'flex', padding: 10, alignItems: 'center', gap: 13, flexDirection: 'row' }}>
                        <View>
                            <Image source={require('../../Assests/Music.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: '#666666' }}>TODAY AT 20:00 4 FEB AT 14:00</Text>
                            <Text style={{ fontSize: 20, color: '#666666' }}>Rock Night ‘00</Text>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../../Assests/Location.png')} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12, color: '#666666' }}>Hard Rock Cafe Berlin</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 24 }}>
                        <Text style={{ fontSize: 12, color: '#666666' }}>Description</Text>
                        <Text style={{ fontSize: 16, color: '#666666' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab...
                        </Text>
                        <Text style={{ paddingTop: 24, fontSize: 12, color: "#666666" }}>Event By</Text>
                        <View style={{ display: 'flex', padding: 10, alignItems: 'center', gap: 13, flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../Assests/Music.png')} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: '#666666' }}>Rock Night ‘00</Text>
                                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <View>
                                        <Image source={require('../../Assests/Location.png')} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12, color: '#666666' }}>Hard Rock Cafe Berlin</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View >

                <ScrollView>
                    <View style={{ padding: 15 }}>
                        <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View><Text style={{ fontSize: 13, color: "black" }}>Event Playlist</Text></View>
                            <View><Text style={{
                                fontSize: 13, color: "#666666",
                                textDecorationLine: 'underline',
                            }}>See all</Text></View>

                        </View>
                        {MusicData.map((e, i) => (
                            <TouchableOpacity
                            >
                                < View
                                    key={i}
                                    style={{
                                        width: 328,
                                        height: 80,
                                        backgroundColor: 'white',
                                        marginTop: 15,
                                        borderRadius: 5,
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 13,
                                        gap: 11
                                    }}>
                                    <View>
                                        <Image source={require('../../Assests/Music.png')} />
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ fontSize: 16, color: "black" }}>
                                                Show Me How To Live
                                            </Text>
                                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                                <Image source={require('../../Assests/BlueUser.png')} />
                                                <Text style={{ fontSize: 12, color: "#666666" }}>
                                                    Audioslave
                                                </Text>
                                            </View>
                                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                                <Image source={require('../../Assests/NotplayIcon.png')} />
                                                <Text style={{ fontSize: 10, color: "#666" }}>
                                                    3:45
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity >
                                            <View style={{ marginLeft: 45 }}>
                                                <Image width={35} source={require('../../Assests/3Dote.png')} />
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View >
            <View style={{
                width: 360, height: 90, backgroundColor: "white",
                position: 'relative', bottom: 0,
            }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='Create event' onPress={() => { }} />
                </View>
            </View>
        </ScrollView >
    )
}

export default CreatedEvent
