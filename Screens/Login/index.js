import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import { TouchableOpacity } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import WebHandler from '../../Config/AxiosActions/webHandler'
import QRCode from 'react-native-qrcode-svg';
const webHandler = new WebHandler()
function Login({ navigation }) {

    const [userEmail, setuserEmail] = useState(null)
    const [password, setpassword] = useState(null)
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Login' />
                <View style={{ padding: 24, }}>
                    <Text style={{ paddingTop: 10, fontSize: 20, color: 'black' }}>Welcome back to Spinder</Text>
                    <View style={{ paddingTop: 20 }}>
                        {/* <Input label='Email or Username' /> */}
                        <Input value={userEmail} label='Email or Username' onChange={(text) => { setuserEmail(text) }} />

                    </View>
                    <View style={{ paddingTop: 20 }}>
                        {/* <Input label='Password' /> */}
                        <Input value={password} label='Password' onChange={(text) => { setpassword(text) }} />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('forgetPassword') }}><Text style={{ fontSize: 12, color: 'black', borderBottomWidth: 1, position: "absolute", borderBottomColor: "black" }}>Forgot password?</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button color='#23B7C5' label='LOG IN' onPress={() => { userLogin() }} />
                    <View style={{ paddingTop: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#666', }}>Don't have an account?</Text>
                        <Text> <TouchableOpacity onPress={() => { navigation.navigate('CreateAcount') }}><Text style={{ color: "black", }}>Let's create one.</Text></TouchableOpacity></Text>
                    </View>
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
                <View style={{alignSelf:'center',marginTop:10}}>
                    <QRCode
                        value={'5580'}
                        size={170}
                    />
                </View>
            </View>
        </ScrollView>

    )

    function userLogin() {

        console.log(userEmail, password)
        if (!userEmail || !password) {
            // Show Snackbar if any field is null

        }
        else {
            let userData = {
                email: userEmail,
                password: password,

            }
            webHandler.UserAccountLogin(userData, (resp) => {
                navigation.navigate('HomeScreen')
                console.log(resp)
                // this.props.navigation.navigate('Verification', {
                //     _trainerId: resp.trainer_id,
                //     _verificationType: "NEW_ACCOUNT"
                // })
            }, (error) => {

            })

        }


    }
}

export default Login
