import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import SearchInput from '../../Component/AuthFeild/SearchInput';
import Button from '../../Component/AuthFeild/Button';
import WebHandler from '../../Config/AxiosActions/webHandler';
import Menupopup from '../ReuseAbleComponent/MenuPop';
import Prefmanager from '../../Config/AxiosActions/prefManager';
const webHandler = new WebHandler()

const pref=new Prefmanager()
function EventList({ navigation }) {
    const [like, setLike] = useState(false)
    const [search, setSearch] = useState(false)
    const [userdata, setuserData] = useState(false)

    const [eventList, seteventList] = useState()
    useEffect(() => {
        webHandler.getEventList((resp) => {
            if (resp) {
                seteventList(resp.event)
            }
            pref.getUserSessionData(data => {
                console.log("Data ====>>>", data)
                setuserData(data)
            })
        }, (error) => {

        })

    }, [])
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
        <View style={{ backgroundColor: "#F5F5F5", height: 712, width: '100%' }}>
            <View style={styles.MainBox}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                    <Image source={require("../../Assests/mamologo.png")} />
                    
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
                width: 360,
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
                                <Text style={{ color: 'black', fontSize: 16, }}>{userdata.userName}</Text>
                                <Text style={{ fontSize: 12, paddingTop: 4 }}>Status</Text>

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

            </View>)}

            <View style={{ padding: 16 ,flex:3}}>
                <Text style={{ color: "#666666" }}>Event List</Text>
                {console.log("Event Data ====",eventList)}
                <FlatList
                    style={{}}
                    keyExtractor={(item, index) => index.toString()}
                    data={eventList}
                    // onRefresh={() => }
                    // refreshing={}
                    // onEndReached={() => }
                    // onEndReachedThreshold={0.2}
                    renderItem={({ item, index }) => { return renderItemView(item) }}
                // ListEmptyComponent={renderEmptyListView()}
                />

            </View>
            <View style={{ flex:0.75 }}>
                <Button label='Create new event' onPress={() => { navigation.navigate('EventCreate') }} color='#23B7C5' />
            </View>
        </View >
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
                        {/* <Image style={{ height: 55, width: 55, borderRadius: 10 }} source={{ uri: imageRoute + itemData.songPhoto }} /> */}
                        <Image source={require('../../Assests/Music.png')} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "black" }}>
                                {itemData.eventName}
                            </Text>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                <Image source={require('../../Assests/Location.png')} />
                                <Text style={{ fontSize: 12, color: "#666666" }}>
                                    {itemData.location}
                                </Text>
                            </View>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>


                                <Image source={require('../../Assests/NotplayIcon.png')} />
                                <Text style={{ fontSize: 10, color: "#666" }}>
                                    Currently Playing   Text Placeholder
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity >
                            <View style={{ marginLeft: 45, }}>
                                <Menupopup
                                    triggerIcon='more-vertical'
                                    Menuoptions={[
                                        { name: "Activate This Event", icon: "play-circle", value: "play" },
                                        { name: "Share Event", icon: "share", value: "play" },
                                        {
                                            name: "Delete Event",
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
        width: 360,
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems:'center',
        flexDirection: 'row',
        alignItems: "center"
    },
})

export default EventList
