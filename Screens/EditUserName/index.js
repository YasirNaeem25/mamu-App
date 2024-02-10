import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'
import WebHandler from '../../Config/AxiosActions/webHandler'
import Prefmanager from '../../Config/AxiosActions/prefManager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Utils from '../../Component/Utils'

const utils = new Utils()
const pref = new Prefmanager()
const webHandler = new WebHandler()
function EditUserName({ navigation, route }) {
    const { username, userid } = route.params;
    const [name, sername] = useState(null)
    const [loading, setloading] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <Header label='Username' />
            <View style={{ padding: 24, display: 'flex', justifyContent: 'center', marginTop: 36, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: "black" }}>
                    Current username:
                </Text>
                <Text style={{
                    fontSize: 20, color: "black", paddingTop: 5,
                }}>
                    {username}
                </Text>
                <View style={{ paddingTop: 20, width: "100%" }}>
                    {/* <Input textFocuscolor='#F5F5F5' label='New username' /> */}
                    <Input value={name} label='New Username' onChange={(text) => { sername(text) }} />
                </View>
                <View style={{ paddingTop: 20, width: "100%" }}>
                    {/* <Input textFocuscolor='#F5F5F5' label='Your Password' /> */}
                </View>
            </View>
            <View style={{ paddingTop: 30, alignSelf: 'center',flex:0.25 }}>
                {!loading && <Button onPress={() => {
                    changeUsername()
                }} color='#23B7C5' label='Change username' />}

                {loading && utils.renderLoadingstate()}
            </View>
        </View>
    )

    function changeUsername() {
        setloading(true)
        if(!name)
        {
            utils.showSnackbar("Error",'Enter user name', "danger")
            setloading(false)
        }
        if (name) {
            let data = { userName: name, userid: userid }
            webHandler.changeusername(data, async (resp) => {
                await AsyncStorage.setItem("@Session:UserName", name.toString());//done
                utils.showSnackbar("Success", resp.message, "success")
                navigation.goBack()
                setloading(false)
            }, (error) => {
                utils.showSnackbar("Error", error, "danger")
                setloading(false)
            })
        }
    }
}

export default EditUserName
