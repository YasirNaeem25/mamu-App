import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
import Input from '../../Component/AuthFeild/Input'
import WebHandler from '../../Config/AxiosActions/webHandler'
const webHandler = new WebHandler()


import Utils from '../../Component/Utils'

const myUtils = new Utils()
export default function OtpVerification({ route, navigation }) {

    const { userId, email } = route.params;

    const [otpcode, setOtpcode] = useState(null)
    const [password, setpassword] = useState(null)
    const [loading, setloading] = useState(false)

    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='OTP Verification' />
                <View style={{ paddingLeft: 24, paddingRight: 24 }}>

                    <View style={{ paddingTop: 20, width: "100%" }}>
                        <Input value={otpcode} label='Enter OTP' onChange={(text) => { setOtpcode(text) }} />

                    </View>

                    {email && <View style={{ paddingTop: 20, width: "100%" }}>
                        <Input value={password} label='Password' onChange={(text) => { setpassword(text) }} />
                    </View>}
                </View>
                <View style={{ paddingTop: 20 ,alignSelf:'center',flex:0.2}}>
                    {!loading && <Button label='Submit' color='#23B7C5' onPress={() => {
                        if (email) { passwordVerify() } else { Verify() }
                    }} />}
                    {loading && myUtils.renderLoadingstate()}
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View >
        </ScrollView>
    )

    function Verify() {
        setloading(true)
        if (!otpcode) {
            
            myUtils.showSnackbar("Error", "Enter OTP code", "none") 
            setloading(false)
        }
        else {
            let userData = {
                userId: userId,
                otpCode: otpcode,

            }
            webHandler.AccountVerifcation(userData, (resp) => {

                navigation.navigate('loginAcount')
                myUtils.showSnackbar("Success","OTP Code Verified" , "success") 
                setloading(false)

            }, (error) => {
                myUtils.showSnackbar("Error", error, "none") 
                setloading(false)
            })

        }


    }
    function passwordVerify() {
        setloading(true)
        if (!otpcode || !password) { 
            myUtils.showSnackbar("Error","Please fill all complete data", "none") 
            setloading(false)
        }
        else {
            let userData = {
                email: email,
                otpCode: otpcode,
                password: password

            }
            webHandler.passworOtpVerification(userData, (resp) => {
                navigation.navigate('loginAcount')
                setloading(false)

            }, (error) => {
              
                myUtils.showSnackbar("Error", error, "none") 
                setloading(false)

            })

        }


    }
}
