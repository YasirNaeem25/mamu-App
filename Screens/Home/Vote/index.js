import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Input from '../../../Component/AuthFeild/Input';
import SearchInput from '../../../Component/AuthFeild/SearchInput';
import Prefmanager from '../../../Config/AxiosActions/prefManager';
import WebHandler from '../../../Config/AxiosActions/webHandler';
import { SafeAreaView } from 'react-native';

const webHandler = new WebHandler()
const pref = new Prefmanager()
const imageRoute = 'https://mamu-app-2e1cbc92673a.herokuapp.com/songs/'
function Vote({ navigation, route }) {
    const [like, setLike] = useState(false)
    const [search, setSearch] = useState(false)

    const [userdata, setuserdata] = useState()

    const eventData = route.params;
    console.log("route.params ====", route.params)


    useEffect(() => {
        pref.getUserSessionData(data => {
            console.log("Vote Data ====", data)
            setuserdata(data)
        })
    }, [])
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ backgroundColor: "#F5F5F5", width: '100%' }}>
                <View style={styles.MainBox}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <Image source={require("../../../Assests/BackArrow.png")} />
                        {eventData && <Text style={{ color: 'black', fontSize: 20 }}>{eventData.eventData.eventName}</Text>}
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text>999</Text>
                        <Image source={require('../../../Assests/Heart.png')} />
                    </View>
                </View>
                {search ? (<View style={{
                    // width: 360,

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
                                <Image  source={require('../../../Assests/textPlaceholderImages.png')} />

                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    {userdata && <Text style={{ color: 'black', fontSize: 16, }}>{userdata.displayName}</Text>}
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
                                            <Image source={require('../../../Assests/Search.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {eventData && <Text style={{ paddingTop: 16, color: "#666666" }}>Current Playing</Text>}
                    {eventData && <View style={{ paddingTop: 8, gap: 11, display: 'flex', flexDirection: 'row' }}>
                        <View>
                            <Image source={require('../../../Assests/CurrentSong.png')} />
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 16, }}>Text Placeholder - Song Example ...</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}><Image source={require('../../../Assests/PersonFilled.png')} /><Text style={{ fontSize: 12 }}>Text Placeholder</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}><Image source={require('../../../Assests/playIcon.png')} /><Text style={{ fontSize: 12 }}>00:45 3:45</Text></View>

                        </View>
                    </View>}
                </View>)}
                <ScrollView>
                    <View style={{ padding: 16 }}>

                        {eventData &&
                            <View >
                                <Text style={{ color: "#666666" }}>Song queue</Text>
                                {console.log(eventData.eventData.songsList)}
                                {eventData.eventData.songsList.map((e, i) => (

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
                                            {/* <Image source={require('../../../Assests/Music.png')} /> */}
                                            <Image style={{ height: 55, width: 55, borderRadius: 10 }} source={{ uri: imageRoute + e.songCover }} />

                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <View>
                                                <Text style={{ fontSize: 16, color: "black" }}>
                                                    {e.songName}
                                                </Text>
                                                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                                    <Image source={require('../../../Assests/BlueUser.png')} />
                                                    <Text style={{ fontSize: 12, color: "#666666" }}>
                                                        Audioslave
                                                    </Text>
                                                </View>
                                                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                                    <Image source={require('../../../Assests/NotplayIcon.png')} />
                                                    <Text style={{ fontSize: 10, color: "#666" }}>
                                                        3:45
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() =>

                                                // like ? setLike(false) : setLike(true)

                                                onLikeSong(e._id)
                                            }

                                            >
                                                {!like ? (<View style={{ marginLeft: 45 }}>
                                                    <Image width={35} source={require('../../../Assests/Hert-ouline.png')} />
                                                    <Text style={{ fontSize: 10, color: '#666666', textAlign: 'center' }}>{e.upVote}</Text>
                                                </View>) : (<View style={{ marginLeft: 45 }}>
                                                    <Image width={35} source={require('../../../Assests/Heart.png')} />
                                                    <Text style={{ fontSize: 10, color: '#666666', textAlign: 'center' }}>{e.upVote}</Text>
                                                </View>
                                                )}

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        }
                        {!eventData &&
                            <View style={{ alignSelf: 'center', marginTop: '50%' }}>

                                <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'center' }}>Please Select Event from Events list for Voting</Text>

                            </View>

                        }
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView>
    )
    function onLikeSong(eventId) {

        console.log(userdata,)

        data = {
            userId: userdata.userId,
            songId: eventId,
            eventId: eventData.eventData._id,
        }
        webHandler.songsLike(data, (resp) => {

            navigation.goBack()
        }, (error) => {

        })
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

export default Vote
