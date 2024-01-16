import React, { useState } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import SearchInput from '../../Component/AuthFeild/SearchInput'

function AddTopPlayList({ navigation }) {
    const [openSearch, setOpenSearch] = useState(false)
    const [Selected, setSelected] = useState(false)
    const [defaultrender, setDefaultrender] = useState(true)

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
            <View style={{ height: 665, backgroundColor: '#F5F5F5' }}>
                <Header label='Create New Event' />
                {openSearch ?

                    <View style={{ width: 360, backgroundColor: 'white', padding: 16 }}>
                        <SearchInput label='Search' onCLose={() => {
                            setOpenSearch(false)
                            setDefaultrender(true)
                        }} textFocuscolor='white' />
                    </View>
                    : null}
                {defaultrender ? <View style={{ padding: 24, }}>
                    <Text style={{ fontSize: 14, color: "#333333", textAlign: 'center' }}>Let’s start building your playlist</Text>
                    <TouchableOpacity onPress={() => {
                        setOpenSearch(true)
                        setDefaultrender(false)
                    }
                    }>
                        <View style={{ height: 50, backgroundColor: 'white', borderRadius: 7, marginTop: 14, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }} >Add to this playlist</Text>
                        </View></TouchableOpacity>
                </View> : null}
                {Selected ? <View style={{ padding: 24 }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Event Name Playlist</Text>
                    <View style={{ paddingTop: 20 }}>
                        <View style={{ height: 50, backgroundColor: 'white', borderRadius: 7, marginTop: 14, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }} >add more</Text>
                        </View>
                    </View>
                </View> : null}

                <ScrollView>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: '#666666' }}>Recommended based on your previous events</Text>
                        {MusicData.map((e, i) => (
                            <TouchableOpacity onPress={() => {
                                setDefaultrender(false)
                                setOpenSearch(false)
                                setSelected(true)
                            }} >
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
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='next' onPress={() => { navigation.navigate('CreatedEvent') }} />
                </View>
            </View>
        </ScrollView >
    )
}

export default AddTopPlayList
