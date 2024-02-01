import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import SearchInput from '../../Component/AuthFeild/SearchInput';
import Button from '../../Component/AuthFeild/Button';
import WebHandler from '../../Config/AxiosActions/webHandler';
import Menupopup from '../ReuseAbleComponent/MenuPop';
import Prefmanager from '../../Config/AxiosActions/prefManager';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';
import { useFocusEffect } from '@react-navigation/native';
import Utils from '../../Component/Utils';

const webHandler = new WebHandler()

const utils = new Utils()

const imageRoute = 'https://mamu-app-2e1cbc92673a.herokuapp.com/event/'
const pref = new Prefmanager()
function EventList({ navigation }) {
    const [like, setLike] = useState(false)
    const [search, setSearch] = useState(false)
    const [userdata, setuserData] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    const [eventList, seteventList] = useState()
    // useEffect(() => {
    //     getEventList()

    // }, [])
    useFocusEffect(
        useCallback(() => {
            // this will call when you enter in screen
            getEventList()
            return () => {
                // this will call exit from screen
            };
        }, [])
    )
    function getEventList() {
        pref.getUserSessionData(data => {
            console.log(" =====", data)
            setuserData(data)
        })
        webHandler.getEventList((resp) => {
            if (resp) {
                seteventList(resp.event)
                setisLoading(false)
            }

        }, (error) => {
            setisLoading(false)
        })

    }
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
                        <View style={{width:'85%' ,flexDirection: "row",gap: 11}}>
                            <View>
                                <Image source={require('../../Assests/textPlaceholderImages.png')} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 16, }}>{userdata.userName}</Text>
                                    <Text style={{ fontSize: 12, paddingTop: 4 }}>Status</Text>

                                </View>

                            </View>
                        </View>
                        <View style={{width:'15%'}}>
                            <TouchableOpacity onPress={() => setSearch(true)}>
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        top:-5,
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

            </View>)}

            <View style={{ padding: 16,flex:0.95 }}>

                <Text style={{ color: "#666666" }}>Event List</Text>
                {isLoading && utils.renderLoadingstate()}
                {!isLoading && <FlatList
                    style={{}}
                    keyExtractor={(item, index) => index.toString()}
                    data={eventList}
                    // onRefresh={() =>{ } }
                    // refreshing={}
                    // onEndReached={() => }
                    // onEndReachedThreshold={0.2}
                    renderItem={({ item, index }) => { return renderItemView(item) }}
                // ListEmptyComponent={renderEmptyListView()}
                />
                }

            </View>
            <View style={{ flex:0.05,alignItems:'center',alignSelf:'center' }}>
                <Button label='Create new event' onPress={() => { navigation.navigate('EventCreate') }} color='#23B7C5' />
            </View>
        </View >
    )
    function renderItemView(itemData) {
        return (

            < TouchableOpacity
                onPress={() => { navigation.navigate('Vote', { eventData: itemData }) }}
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
                    <Image style={{ height: 55, width: 55, borderRadius: 10 }} source={{ uri: imageRoute + itemData.coverPhoto }} />
                    {/* <Image source={require('../../Assests/Music.png')} /> */}
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '75%' }}>
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
                    <TouchableOpacity  >
                        <View >
                            <Menupopup
                                triggerIcon='more-vertical'
                                Menuoptions={[
                                    { name: "Activate This Event", icon: "play-circle", value: "1" },
                                    { name: "Share Event", icon: "share", value: "2" },
                                    {
                                        name: "Delete Event",
                                        icon: "trash-2", value: "3"
                                    }
                                ]}
                                Optionstyle={{ fontSize: 14 }}
                                triggerClick={(option) =>
                                // handleUnfollowOption(value)
                                {
                                    if (option == "1") {
                                        navigation.navigate('addEvent', { eventData: itemData })
                                    } else if (option == "2") {
                                        generateLink(itemData._id)
                                    } else if (option == "3") {
                                        onEventRemove(itemData._id)
                                    }
                                }
                                }

                            />
                            {/* <Image width={35} source={require('../../Assests/3Dote.png')} /> */}
                        </View>

                    </TouchableOpacity>
                </View>
            </TouchableOpacity>


        )
    }

    function onEventRemove(eventId) {

        data = {
            eventId: eventId
        }
        webHandler.removeEvent(data, (resp) => {
            getEventList()
        }, (error) => {

        })
    }
    async function generateLink(eventId) {
        try {
            const link = await dynamicLinks().buildShortLink({
                link: `https://mamuappevent.page.link/naxz?eventid=${eventId}`,
                domainUriPrefix: 'https://mamuappevent.page.link',
                android: {
                    packageName: 'com.mamu',
                },
                ios: {
                    appStoreId: '123456789',
                    bundleId: 'com.mamuevent',
                },
            }, dynamicLinks.ShortLinkType.DEFAULT)
            Share.open({
                message: link,

            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    err && console.log(err);
                });

            // return link
        } catch (error) {
            console.log('Generating Link Error:', error)
        }
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

export default EventList
