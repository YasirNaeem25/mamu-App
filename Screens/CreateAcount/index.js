import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'

function CreateAcount({ navigation }) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Signup' />
                <View style={{
                    paddingLeft: 24,
                    paddingRight: 24
                }}>
                    <Text style={style.Heading}>Let’s create your account!</Text>
                    <View style={{ paddingTop: 20 }}>
                        <Input label='Email' onChange={() => { }} validationtext='Verification email will be sent on this address.' />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Input label='Username' onChange={() => { }} validationtext="Create your unique username." />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Input label='Password' onChange={() => { }} validationtext="Password must be 8+ characters long." />
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button label='Continue' color='#23B7C5' />
                    <View style={{ paddingTop: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#666', }}>Already have an account?</Text>
                        <Text> <TouchableOpacity onPress={() => { navigation.navigate('loginAcount') }}><Text style={{ color: "black", }}>login</Text></TouchableOpacity></Text>
                    </View>
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    Heading: {
        paddingTop: 32,
        fontSize: 20,
        color: "black"
    }
})
export default CreateAcount
