import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
import Input from '../../Component/AuthFeild/Input'
import WebHandler from '../../Config/AxiosActions/webHandler'
const webHandler=new WebHandler()

export default function OtpVerification({ route,navigation }) {

    const { userId,email} = route.params;

    const[otpcode,setOtpcode]=useState(null)
    const[password,setpassword]=useState(null)
  
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='OTP Verification' />
                <View style={{ paddingLeft: 24, paddingRight: 24 }}>

                    <View style={{ paddingTop: 20, width: "100%" }}>
                        <Input value={otpcode} label='Enter OTP' onChange={(text) => { setOtpcode(text) }} />
                       
                    </View>
                  
                 {email &&   <View style={{ paddingTop: 20, width: "100%" }}>
                       <Input value={password} label='Password' onChange={(text) => { setpassword(text) }} />
                    </View>}
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button label='Submit' color='#23B7C5' onPress={() => {
                       if(email){passwordVerify()}else{Verify()}  }} />
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View >
        </ScrollView>
    )

    function Verify(){
        if (!otpcode) {
            // Show Snackbar if any field is null   
        }
        else{
            let userData = {
                userId:userId ,
                otpCode: otpcode,        
            
            }
            webHandler.AccountVerifcation(userData, (resp) => {
              
                navigation.navigate('loginAcount')
              
            }, (error) => {
               
            })

        }


    }
    function passwordVerify(){
        if (!otpcode || !password) {
            // Show Snackbar if any field is null   
        }
        else{
            let userData = {
                email:email ,
                otpCode: otpcode, 
                password:password       
            
            }
            webHandler.passworOtpVerification(userData, (resp) => {
              
                navigation.navigate('loginAcount')
              
            }, (error) => {
               
            })

        }


    }
}
