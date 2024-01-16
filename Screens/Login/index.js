import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import { TouchableOpacity } from 'react-native'
import Button from '../../Component/AuthFeild/Button'

function Login({ navigation }) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 812 }}>
                <Header label='Login' />
                <View style={{ padding: 24, }}>
                    <Text style={{ paddingTop: 10, fontSize: 20, color: 'black' }}>Welcome back to Spinder</Text>
                    <View style={{ paddingTop: 20 }}>
                        <Input label='Email or Username' />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Input label='Password' />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('forgetPassword') }}><Text style={{ fontSize: 12, color: 'black', borderBottomWidth: 1, position: "absolute", borderBottomColor: "black" }}>Forgot password?</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button color='#23B7C5' label='LOG IN' onPress={() => { navigation.navigate('HomeScreen') }} />
                    <View style={{ paddingTop: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#666', }}>Don't have an account?</Text>
                        <Text> <TouchableOpacity onPress={() => { navigation.navigate('CreateAcount') }}><Text style={{ color: "black", }}>Let's create one.</Text></TouchableOpacity></Text>
                    </View>
                </View>
                <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </View>
        </ScrollView>

    )
}

export default Login
