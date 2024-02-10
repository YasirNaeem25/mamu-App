import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
import Input from '../../Component/AuthFeild/Input'
import webHandler from '../../Config/AxiosActions/webHandler'
import Utils from '../../Component/Utils'
const Handler=new webHandler()
const myUtils=new Utils()

export default function ForgetPassword({ navigation }) {
    const[email,setemail]=useState(null)
    const [loading,setloading]=useState(false)
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Forgot Password' />
                <View style={{ paddingLeft: 24, paddingRight: 24 }}>

                    <View style={{ paddingTop: 20, width: "100%" }}>
                        <Input value={email} label='Email Address' onChange={(text) => { setemail(text) }} />
                   
                    </View>
                </View>
                <View style={{ paddingTop: 20 ,alignSelf:'center',flex:0.2}}>
                   { !loading &&<Button label='Reset my password' color='#23B7C5' onPress={() => { Verify() }} />}

                    {loading && myUtils.renderLoadingstate()}
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View >
        </ScrollView>
    )

    function Verify(){
        setloading(true)
        if (!email) {
            setloading(false)
            myUtils.showSnackbar("Error", "Email is not empty", 'danger')
        }
        else{
            let userData = {
                emailaddress:email ,        
            
            }
            Handler.forgetPassword(userData, (resp) => {
        
                myUtils.showSnackbar("Success", resp.message, 'success')
                navigation.navigate('OtpVerification',{email:email})
               
                setloading(false)
              
            }, (error) => {
                myUtils.showSnackbar("Error", error, 'danger')
                setloading(false)
               
            })

        }


    }
}
