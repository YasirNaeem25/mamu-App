import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Header from '../../Component/Header'
import { TouchableOpacity } from 'react-native'

function ForgetPasswordValidation() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Forgot Password' />
                <View style={{ marginTop: 24 }}>
                    <Text style={{ paddingTop: 6, textAlign: 'center', fontSize: 32 }}>Check you email</Text>
                    <Text style={{ paddingTop: 10, paddingLeft: 21, color: 'black', fontSize: 16 }}>We sent you an email with instructions to
                        reset your password. <Text style={{ fontWeight: "700" }}>Click Here</Text></Text>
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgetPasswordValidation
