import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'

function EditUserName() {
    return (
        <View style={{ width: 360, backgroundColor: "#F5F5F5" }}>
            <Header label='Username' />
            <View style={{ padding: 24, display: 'flex', justifyContent: 'center', marginTop: 36, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: "black" }}>
                    Current username:
                </Text>
                <Text style={{
                    fontSize: 20, color: "black", paddingTop: 5,
                }}>
                    JoshDoe
                </Text>
                <View style={{ paddingTop: 20, width: "100%" }}>
                    <Input textFocuscolor='#F5F5F5' label='New username' />
                </View>
                <View style={{ paddingTop: 20, width: "100%" }}>
                    <Input textFocuscolor='#F5F5F5' label='Your Password' />
                </View>
            </View>
            <View style={{ paddingTop: 30, }}>
                <Button color='#23B7C5' label='Change username' />
            </View>
        </View>
    )
}

export default EditUserName
