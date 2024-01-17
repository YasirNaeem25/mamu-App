import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'

function ChangePassword({ navigation }) {
    return (
        <View style={{ width: 360, backgroundColor: "#F5F5F5" }}>
            <Header label='Password' />
            <View style={{ padding: 24, display: 'flex', justifyContent: 'center', marginTop: 36, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: "black" }}>
                    Current address:
                </Text>

                <View style={{ paddingTop: 20, width: "100%" }}>
                    <Input textFocuscolor='#F5F5F5' label='Current password' />
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('forgetPassword')
            }}>
                <Text style={{
                    fontSize: 15, paddingLeft: 24, textDecorationLine: 'underline', color: '#666666', position: 'relative', paddingTop: 15, color: "black", paddingTop: 5,
                }}>
                    Forgot password?
                </Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 24, color: "black", paddingTop: 5, }}>Change passoword</Text></View>
            <View style={{ padding: 24 }}>

                <View style={{ paddingTop: 20, width: "100%" }}>
                    <Input textFocuscolor='#F5F5F5' label='New Password' />
                </View>
                <View style={{ paddingTop: 20, width: "100%" }}>
                    <Input textFocuscolor='#F5F5F5' label='Confirm Password' />
                </View>
            </View>
            <View style={{ paddingTop: 10, }}>
                <Button color='#23B7C5' label='Change Password' />
            </View>
        </View>
    )
}

export default ChangePassword
