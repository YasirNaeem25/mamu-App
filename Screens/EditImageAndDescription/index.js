import React, { useState } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, Alert, Platform, PermissionsAndroid, TouchableOpacity } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import ImagePicker from 'react-native-image-crop-picker';

function EditDescriptionAndImage({ navigation, route }) {

    const { startdate, enddate, eventName } = route.params;
    const [image, setImage] = useState(null)
    const [desc, setDesc] = useState(null)
    let imagee = { "uri": image }
    return (
        <ScrollView>
            <View style={{ height: 665, backgroundColor: '#F5F5F5' }}>
                <Header label='Create New Event' />
                <View style={{ padding: 24 }}>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View><Text style={{ fontSize: 20, color: "black" }}>Event Cover</Text></View>
                        <TouchableOpacity style={{
                            width: 32, height: 32, display: 'flex',
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.5,
                            shadowRadius: 3, // Add shadowRadius property
                            elevation: 5, // Add elevation for Android
                            borderRadius: 5,
                            backgroundColor: "white",
                            justifyContent: 'center', alignItems: 'center'
                        }}
                            onPress={() => handleImagePicker()}
                        >
                            <Image source={require('../../Assests/Edit.png')} />
                        </TouchableOpacity>

                    </View>
                    <Image style={{ borderRadius: 20, width: 312, padding: 15, height: 312, marginTop: 10, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} source={image ? imagee : require('../../Assests/ProfileBackgroundimage.png')}>

                    </Image>
                    <View style={{ paddingTop: 24 }}>
                        <Text style={{ fontSize: 28, color: 'black' }}>Event Description</Text>
                        <Text style={{ fontSize: 12, color: '#666666', paddingTop: 5 }}>Provide more information about your event so that guests know what to expect.</Text>
                        <View style={{ paddingTop: 24 }}>
                            <Input value={desc} label='Add description' onChange={(text) => { setDesc(text) }} textFocuscolor='#F5F5F5' validationtext='' />

                        </View>
                    </View>
                </View>
            </View >
            <View style={{
                width: 360, height: 90, backgroundColor: "white",
                position: 'relative', bottom: 0,
            }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='next' onPress={() => {
                        navigation.navigate('playlist',
                            {

                                startdate: startdate,
                                enddate: enddate,
                                eventName: eventName,
                                eventimage: imagee,
                                eventDesc: desc,

                            }

                        )
                    }} />
                </View>
            </View>
        </ScrollView >
    )
    async function hasAndroidPermission() {

        const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }
    async function handleImagePicker() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }

        Alert.alert(
            'Event Cover', 'Please select option',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Open Camera', onPress: () => {
                        ImagePicker.openCamera({
                            // cropping: true,
                            // width: 312,
                            // height: 312,
                            // includeExif: true,
                            
                        }).then(image => {
                            console.log("image ====>>>",image)
                            let img = { uri: image.path, width: image.width, height: image.height }
                           
                            setImage(img.uri)
                        }).catch(e => alert(e.message));
                    }
                },
                {
                    text: 'Open Gallery', onPress: () => {
                        ImagePicker.openPicker({
                            width: 312,
                            height: 312,
                            cropping: true
                        }).then(image => {
                            let img = { uri: image.path, width: image.width, height: image.height, mime: image.mime }

                            setImage(img.uri)
                        }).catch(reason => { alert(reason.message) });
                    }
                },
            ], { cancelable: true }
        )
    }
}

export default EditDescriptionAndImage
