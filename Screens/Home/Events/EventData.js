import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { View, StyleSheet, Image } from 'react-native'
import Button from '../../../Component/AuthFeild/Button'
import OutlineButton from '../../../Component/AuthFeild/OutlineButton'
import Input from '../../../Component/AuthFeild/Input'
import QRCode from 'react-native-qrcode-svg';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';
import AntDesign from 'react-native-vector-icons/AntDesign';


function EventData({ navigation, route }) {
    const { startdate, enddate, eventName, eventimage, eventId, externalLink } = route.params;
    console.log(startdate, enddate, eventName, eventimage, eventId)
    const ref = useRef();
    const [qrImage, setqrImage] = useState()
    useEffect(() => {
        ref.current.capture().then(uri => {
            console.log("do something with ", uri);
            setqrImage(uri)
        });

    }, []);

    function shareLink() {
        Share.open({
            message: externalLink,

        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }
    return (
        <ScrollView>
            <View style={{ width: 350, height: 712, backgroundColor: '#F5F5F5', paddingBottom: 13 }}>
                <View style={styles.MainBox}>

                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18 }}>Share Your Event</Text>
                    </View>
                    <View style={{ display: 'flex', left: -20, top: 10, alignItems: 'center', gap: 13, flexDirection: 'row', alignSelf: 'flex-start' }}>

                        <View>
                            <Image style={{ height: 70, width: 70, borderRadius: 10 }} source={{ uri: eventimage.uri }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: '#666666' }}>{startdate.formattedDateTime}</Text>
                            <Text style={{ fontSize: 20, color: '#666666' }}>{eventName}</Text>
                            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                <View>
                                    <Image source={require('../../../Assests/Location.png')} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12, color: '#666666' }}>Hard Rock Cafe Berlin</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 20, width: 312, paddingTop: 32, fontWeight: '500' }}>Share your event as</Text>
                        <View>
                            <View style={{ alignSelf: 'center', marginTop: 10 }}>
                                <ViewShot ref={ref} options={{ fileName: "QRcode", format: "jpg", quality: 0.9 }}>
                                    <QRCode
                                        value={externalLink}
                                        size={200}
                                    />
                                </ViewShot>
                            </View>

                            <View style={{ paddingTop: 23, padding: 15, }} >
                                <OutlineButton onPress={() => {

                                    Share.open({
                                        message: 'QR Code',
                                        url: qrImage,
                                    })
                                        .then((res) => {
                                            console.log(res);
                                        })
                                        .catch((err) => {
                                            err && console.log(err);
                                        });
                                }} label='Share QR Code ' color='#23B7C5' />
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
                                    {/* <Input editable={false} value={JSON.stringify(externalLink)} label='External Link' onChange={(text) => {  }} /> */}
                                    <Text numberOfLines={2} style={{ borderColor: '#23B7C5', fontSize: 15, fontWeight: '500' }}>

                                        External Link
                                    </Text>
                                    <View style={{ borderColor: '#23B7C5', padding: 5, borderRadius: 5, borderWidth: 0.9, top: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text numberOfLines={2} >
                                            {JSON.stringify(externalLink)}


                                        </Text>
                                        <AntDesign onPress={() => {
                                            shareLink()
                                        }} style={{ padding: 10 }} name={'sharealt'} size={24} color={'#000'} />
                                    </View>

                                </View>
                                <View style={{ width: '100%', paddingTop: 10 }} >
                                    <Button onPress={() => { navigation.navigate('addEvent') }} color='#23B7C5' label='GO TO EVENT' />
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
        justifyContent: 'center',
        // alignItems:'center',
        // flexDirection: 'row',
        alignItems: "center",


    },
    any: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        gap: 5,
    },
})

export default EventData
