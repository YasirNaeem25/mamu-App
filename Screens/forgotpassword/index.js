import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
import Input from '../../Component/AuthFeild/Input'
import webHandler from '../../Config/AxiosActions/webHandler'
const Handler=new webHandler()

export default function ForgetPassword({ navigation }) {
    const[email,setemail]=useState(null)
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Forgot Password' />
                <View style={{ paddingLeft: 24, paddingRight: 24 }}>

                    <View style={{ paddingTop: 20, width: "100%" }}>
                        <Input value={email} label='Email Address' onChange={(text) => { setemail(text) }} />
                   
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button label='Reset my password' color='#23B7C5' onPress={() => { Verify() }} />
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View >
        </ScrollView>
    )

    function Verify(){
        if (!email) {
            // Show Snackbar if any field is null
         
        }
        else{
            let userData = {
                emailaddress:email ,        
            
            }
            Handler.forgetPassword(userData, (resp) => {
              
                navigation.navigate('OtpVerification')
              
            }, (error) => {
               
            })

        }


    }
}
