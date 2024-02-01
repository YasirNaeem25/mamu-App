import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import SearchInput from '../../Component/AuthFeild/SearchInput';
import Button from '../../Component/AuthFeild/Button';
import Menupopup from '../ReuseAbleComponent/MenuPop';
import { SafeAreaView } from 'react-native';

const imageRoute = 'https://mamu-app-2e1cbc92673a.herokuapp.com/event/'
const songimageRoute = 'https://mamu-app-2e1cbc92673a.herokuapp.com/songs/'
function AddEvent({ navigation, route }) {
    const { eventData } = route.params

    console.log("Event Data ====", eventData)
    const [like, setLike] = useState(false)
    const [search, setSearch] = useState(false)

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
        <SafeAreaView style={{flex:1}}>
            <View style={{ backgroundColor: "#F5F5F5",width: '100%' }}>
                <View style={styles.MainBox}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <Image source={require("../../Assests/BackArrow.png")} />
                        <Text style={{ color: 'black', fontSize: 20 }}>{eventData.eventName}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text>999</Text>
                        <Image source={require('../../Assests/Heart.png')} />
                    </View>
                </View>
                {search ? (<View style={{
                    width: 360,

                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3, // Add shadowRadius property
                    elevation: 5, // Add elevation for Android
                    padding: 13, paddingBottom: 7, backgroundColor: 'white'
                }}><SearchInput onCLose={() => setSearch(false)} textFocuscolor='white' label='Search' /></View>) : (<View style={{
                    // width: 360,
                    // height: 160,
                    backgroundColor: 'white',
                    padding: 16,
                    paddingBottom: 6,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3, // Add shadowRadius property
                    elevation: 5, // Add elevation for Android

                }}>
                    <View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: "row", gap: 11 }}>
                            <View>
                                <Image source={require('../../Assests/textPlaceholderImages.png')} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 16, }}>Text Placeholder</Text>
                                    <Text style={{ fontSize: 12, paddingTop: 4 }}>Text Placeholder</Text>

                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => setSearch(true)}>
                                        <View
                                            style={{
                                                width: 40,
                                                height: 40,
                                                marginLeft: 110,
                                                backgroundColor: 'white',
                                                borderRadius: 5,
                                                shadowColor: 'black',
                                                shadowOffset: { width: 0, height: 6 },
                                                shadowOpacity: 0.5,
                                                shadowRadius: 3, // Add shadowRadius property
                                                elevation: 5, // Add elevation for Android
                                                // marginTop: 50, // Add marginTop to see the shadow on Android
                                                display: "flex",
                                                justifyContent: 'center',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image source={require('../../Assests/Search.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ paddingTop: 16, color: "#666666" }}>Current Playing</Text>
                    <View style={{ paddingTop: 8, gap: 11, display: 'flex', flexDirection: 'row' }}>
                        <View>
                            {/* <Image source={require('../../Assests/CurrentSong.png')} /> */}
                            <Image style={{ height: 55, width: 55, borderRadius: 10 }} source={{ uri: songimageRoute + eventData.songsList[0].songCover }} />
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 16, }}>{eventData.songsList[0].songName}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}><Image source={require('../../Assests/PersonFilled.png')} /><Text style={{ fontSize: 12 }}>Text Placeholder</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}><Image source={require('../../Assests/playIcon.png')} /><Text style={{ fontSize: 12 }}>00:45 3:45</Text></View>

                        </View>
                    </View>
                </View>)}
                <ScrollView>
                    <View style={{ padding: 16, flex: 3 }}>
                        <Text style={{ color: "#666666" }}>Song queue</Text>
                        <FlatList
                            style={{}}
                            keyExtractor={(item, index) => index.toString()}
                            data={eventData.songsList}
                            // onRefresh={() => }
                            // refreshing={}
                            // onEndReached={() => }
                            // onEndReachedThreshold={0.2}
                            renderItem={({ item, index }) => { return renderItemView(item) }}
                        // ListEmptyComponent={renderEmptyListView()}
                        />

                    </View>

                </ScrollView>
                <View style={{ position: 'relative',alignSelf:'center'}}>
                    <Button label='Back To Events' onPress={() => { navigation.goBack() }} color='#23B7C5' />
                </View>
            </View >
        </SafeAreaView>

    )

    function renderItemView(itemData) {
        return (

            < View

                style={{
                    // width: 328,
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
                    <Image style={{ height: 55, width: 55, borderRadius: 10 }} source={{ uri: songimageRoute + itemData.songCover }} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, color: "black" }}>
                            {itemData.songName}
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
                        <View style={{ marginLeft: 45, }}>
                            <Menupopup
                                triggerIcon='more-vertical'
                                Menuoptions={[
                                    { name: "Start playlist with this song", icon: "music-video", value: "play" },
                                    {
                                        name: "Remove Song from playlist",
                                        icon: "trash-2", value: "delete"
                                    }
                                ]}
                                Optionstyle={{ fontSize: 10 }}
                            // triggerClick={(value) => handleUnfollowOption(value)} 

                            />
                            {/* <Image width={35} source={require('../../Assests/3Dote.png')} /> */}
                        </View>

                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    MainBox: {
        padding: 10,
        paddingTop: 35,
        backgroundColor: 'white',
        // width: 360,
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems:'center',
        flexDirection: 'row',
        alignItems: "center"
    },
})

export default AddEvent
