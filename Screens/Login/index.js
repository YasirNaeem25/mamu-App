import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import { TouchableOpacity } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import WebHandler from '../../Config/AxiosActions/webHandler'
import Prefmanager from '../../Config/AxiosActions/prefManager'
import Utils from '../../Component/Utils'

const myUtils = new Utils()
const pref = new Prefmanager()
const webHandler = new WebHandler()
function Login({ navigation }) {

    const [userEmail, setuserEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [loading, setloading] = useState(false)
    return (

        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header label='Login' />
            <View style={{ padding: 24 }}>
                <Text style={{ paddingTop: 10, fontSize: 20, color: 'black', alignSelf: 'center' }}>Welcome back to Spinder</Text>
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
            <View style={{ paddingTop: 20, alignSelf: 'center' }}>

                <View style={{ flex: 0.3 }}>
                    {!loading && <Button color='#23B7C5' label='LOG IN' onPress={() => { userLogin() }} />}
                    {loading && myUtils.renderLoadingstate()}
                </View>


                <View style={{ paddingTop: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 13, color: '#666', alignSelf: 'center' }}>Don't have an account?</Text>
                    <Text> <TouchableOpacity onPress={() => { navigation.navigate('CreateAcount') }}><Text style={{ color: "black", }}>Let's create one.</Text></TouchableOpacity></Text>
                </View>
            </View>
            <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Help Me ?</Text>
            </View>

        </View>
    )
    function userLogin() {
        setloading(true)
        if (!userEmail || !password) {
            myUtils.showSnackbar("Error", "Enter Complete Data", 'danger')
            setloading(false)
        }
        else {
            let userData = {
                email: userEmail,
                password: password,

            }
            webHandler.UserAccountLogin(userData, 'normal', (resp) => {
                console.log(resp)
                navigation.navigate('HomeScreen')
                myUtils.showSnackbar("Success", "User login Successfully", 'success')
               
            }, (error) => {
                myUtils.showSnackbar("Error", error, 'danger')
                setloading(false)

            })

        }


    }
}

export default Login
