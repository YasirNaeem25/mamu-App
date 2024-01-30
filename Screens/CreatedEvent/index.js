import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import Header from '../../Component/Header'
import Utils from '../../Component/Utils'
import Menupopup from '../ReuseAbleComponent/MenuPop'
import Prefmanager from '../../Config/AxiosActions/prefManager'
import WebHandler from '../../Config/AxiosActions/webHandler'

const webHandler = new WebHandler()
const pref = new Prefmanager()
const myutils = new Utils()

const imageRoute = 'https://mamu-app-2e1cbc92673a.herokuapp.com/songs/'
function CreatedEvent({ navigation, route }) {
    const [userData, setuserData] = useState()
    useEffect(() => {

        pref.getUserSessionData(data => {
           console.log("Data ====>>>",data)
            setuserData(data)
        })
    }, [])
    const { startdate, enddate, eventName, eventimage, eventDesc, songsList,songsData } = route.params;
    console.log("=== Session Data ====", songsData)

    return (
        <ScrollView>
            <View style={{ height: 665, backgroundColor: "#f5f5f5" }}>
                <Header label='Create New Event' />
                {/* ////? */}
                <View style={{ width: 360, backgroundColor: 'white', padding: 16 }}>
                    <View style={{ display: 'flex', padding: 10, alignItems: 'center', gap: 13, flexDirection: 'row' }}>
                        <View>
                            <Image style={{ height: 70, width: 70, borderRadius: 10 }} source={{ uri: eventimage.uri }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: '#666666' }}>{startdate.formattedDateTime}</Text>
                            <Text style={{ fontSize: 20, color: '#666666' }}>{eventName}</Text>
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
                            {eventDesc}
                        </Text>
                        <Text style={{ paddingTop: 24, fontSize: 12, color: "#666666" }}>Event By</Text>
                        <View style={{ display: 'flex', padding: 10, alignItems: 'center', gap: 13, flexDirection: 'row' }}>
                            <View>
                                {userData?.userProfilePic ?
                                    <Image style={{ height: 50, width: 50, borderRadius: 10 }} source={{ uri: userData?.userProfilePic }} />
                                    :
                                    <Image source={require('../../Assests/Music.png')} />

                                }
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: '#666666' }}>{userData?.displayName}</Text>
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
                <View style={{ padding: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        <View><Text style={{ fontSize: 13, color: "black" }}>Event Playlist</Text></View>
                        <View><Text style={{
                            fontSize: 13, color: "#666666",
                            textDecorationLine: 'underline',
                        }}>See all</Text></View>

                    </View>
                    <FlatList
                        style={{ marginTop: 10 }}
                        keyExtractor={(item, index) => index.toString()}
                        // contentContainerStyle={{ flex: myUtils.isEmptyarray(this.state.clientsCheckInData) ? 1 : 0 }}
                        data={songsList}
                        // onRefresh={() => this.handleRefresh()}
                        // refreshing={this.state.refreshing}
                        // onEndReached={() => this.handleLoadMore()}
                        // onEndReachedThreshold={0.2}
                        renderItem={({ item, index }) => { return renderItemView(item) }}
                    // ListEmptyComponent={this.renderEmptyListView()}
                    />
                </View>

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
                    <Button color='#26C5D5' label='Create event' onPress={() => { createEvent() }} />
                </View>
            </View>
        </ScrollView >
    )

    function renderItemView(itemData) {
        return (
            <TouchableOpacity onPress={() => {
                setDefaultrender(false)
                setOpenSearch(false)
                setSelected(true)

                handleAddToPlayList(itemData)
            }} >
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
                        <Image style={{ height: 55, width: 55, borderRadius: 10 }} source={{ uri: imageRoute + itemData.songPhoto }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "black" }}>
                                {itemData.title}
                            </Text>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                <Image source={require('../../Assests/BlueUser.png')} />
                                <Text style={{ fontSize: 12, color: "#666666" }}>
                                    {itemData.userAudio}
                                </Text>
                            </View>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>


                                <Image source={require('../../Assests/NotplayIcon.png')} />
                                <Text style={{ fontSize: 10, color: "#666" }}>
                                    {itemData.AudioTiming}
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
            </TouchableOpacity>

        )
    }
   
    function createEvent() {
        let data = {
            eventName: eventName,
            start_date_time: startdate.formattedDate,
            end_date_time: enddate.formattedDate,
            descriptions: eventDesc,
            songsList: songsData,
            eventOrganizerId: userData.userId,
            file:eventimage
            
        }
        
        webHandler.createEvent(data, (resp) => {
            console.log(resp.message)
            // navigation.navigate('HomeScreen')
        }, (error) => {
            if (error == 'Request failed with status code 400') {
                // myUtils.showSnackbar("Error", "User Not Verified", 'danger')

            }
            console.log(error)
        })
    }

}




export default CreatedEvent
