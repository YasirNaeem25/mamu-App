import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import SearchInput from '../../Component/AuthFeild/SearchInput'
import WebHandler from '../../Config/AxiosActions/webHandler'
import ApiRoute from '../../Config/Routes/ApiRoute'
import Menupopup from '../ReuseAbleComponent/MenuPop'

const imageRoute = 'https://mamu-app-2e1cbc92673a.herokuapp.com/songs/'

const webHandler = new WebHandler()

function AddTopPlayList({ navigation, route }) {

    const { startdate, enddate, eventName, eventimage, eventDesc,imagePath,location } = route.params;

    console.log("start date ====",startdate)
    const [openSearch, setOpenSearch] = useState(false)
    const [Selected, setSelected] = useState(false)
    const [defaultrender, setDefaultrender] = useState(true)
    const [musicList, setmusicList] = useState([])
    const [musicData, setMusicData] = useState([]);
    const [addToList, setaddToList] = useState([])
    const [songsList, setsongsList] = useState([])

    let groupOptions = [
        { name: "Share", icon: "share", value: "share" },
        {
            name: "Add to Favourites",
            icon: "bookmark", value: "favourite"
        },
    ]

    useEffect(() => {
        webHandler.getSongsList((resp) => {
            if (resp) {
                setmusicList(resp.songs)


                // Transform the API response and set the MusicData state
                const transformedData = resp.songs.map((item, index) => ({
                    ...item,
                    title: 'Show Me How To Live',
                    userAudio: 'Audioslave',
                    AudioTiming: "3:45",
                }));

                setMusicData(transformedData);

            }
        }, (error) => {

        })

    }, [])
    return (
        <View>
            <View style={{  backgroundColor: '#F5F5F5' }}>
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
                    <Text style={{ color: 'black', fontSize: 20 }}>{eventName} Playlist</Text>
                    <View style={{ paddingTop: 20 }}>
                        <View style={{ height: 50, backgroundColor: 'white', borderRadius: 7, marginTop: 14, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }} >add more</Text>
                        </View>
                    </View>
                </View> : null}



                <View style={{ padding: 15 }}>
                    <Text style={{ color: '#666666' }}>Recommended based on your previous events</Text>

                    <FlatList
                        style={{ marginTop: 10 }}
                        keyExtractor={(item, index) => index.toString()}
                        data={musicData}
                        // onRefresh={() => }
                        // refreshing={}
                        // onEndReached={() => }
                        // onEndReachedThreshold={0.2}
                        renderItem={({ item, index }) => { return renderItemView(item) }}
                    // ListEmptyComponent={renderEmptyListView()}
                    />
                </View>

            </View >
            <View style={{
                 height: 90,
                position: 'relative', bottom: 0,alignSelf:'center',marginTop:20
            }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='next' onPress={() => {
                        navigation.navigate('CreatedEvent', {


                            startdate: startdate,
                            enddate: enddate,
                            eventName: eventName,
                            eventimage: eventimage,
                            eventDesc: eventDesc,
                            songsList: addToList,
                            songsData:songsList,
                            imagePath:imagePath,
                            location:location

                        })
                    }} />
                </View>
            </View>
        </View >
    )

    function handleAddToPlayList(data) {
        let songData={
            songName:data.songName,
            songCover:data.songPhoto
        }
        addToList.push(data)
        songsList.push(songData)
    }
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
                                {itemData.songName}
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


}

export default AddTopPlayList
