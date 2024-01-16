import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
import Input from '../../Component/AuthFeild/Input'

export default function ForgetPassword({ navigation }) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Forgot Password' />
                <View style={{ paddingLeft: 24, paddingRight: 24 }}>

                    <View style={{ paddingTop: 20, width: "100%" }}>
                        <Input textFocuscolor='white' label='Forgot Password' />
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button label='Reset my password' color='#23B7C5' onPress={() => { navigation.navigate('forgetPasswordValidation') }} />
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View >
        </ScrollView>
    )
}
