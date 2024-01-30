import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'
import WebHandler from '../../Config/AxiosActions/webHandler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Utils from '../../Component/Utils'

const myUtils=new Utils()
const webHandler = new WebHandler()
function CreateAcount({ route, navigation }) {
    const { userType } = route.params;
    const [userEmail, setuserEmail] = useState(null)
    const [userName, setuserName] = useState(null)
    const [password, setpassword] = useState(null)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: "white", height: 812 }}>
                    <Header label='Signup' />
                    <View style={{
                        paddingLeft: 24,
                        paddingRight: 24
                    }}>
                        <Text style={style.Heading}>Let’s create your account!</Text>
                        <View style={{ paddingTop: 20 }}>
                            <Input value={userEmail} label='Email' onChange={(text) => { setuserEmail(text) }} validationtext='Verification email will be sent on this address.' />

                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Input value={userName} label='Username' onChange={(text) => setuserName(text)} validationtext="Create your unique username." />

                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Input value={password} label='Password' onChange={(text) => { setpassword(text) }} validationtext="Password must be 8+ characters long." />
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Button onPress={() => RegisterUser()} label='Continue' color='#23B7C5' />
                        <View style={{ paddingTop: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, color: '#666', }}>Already have an account?</Text>
                            <Text> <TouchableOpacity onPress={() => {
                                navigation.navigate('loginAcount')

                            }
                            }
                            ><Text style={{ color: "black", }}>login</Text></TouchableOpacity></Text>
                        </View>
                    </View>
                    <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Help Me ?</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
    function RegisterUser() {
        if (!userEmail || !userName || !password) {
            myUtils.showSnackbar("Error","Please fill complete data","none")
        }
        else {
            let userData = {
                userName: userName,
                email: userEmail,
                password: password,
                type: userType,

            }
            webHandler.registerUserAccount(userData, (resp) => {
                if (resp) {
                    navigation.navigate('OtpVerification', {
                        userId: resp.user_data._id,email:null
                    })
                }
            }, (error) => {

            })
        }
    }
}


const style = StyleSheet.create({
    Heading: {
        paddingTop: 32,
        fontSize: 20,
        color: "black"
    }
})
export default CreateAcount
