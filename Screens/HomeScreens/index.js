import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import OutlineButton from '../../Component/AuthFeild/OutlineButton'
import SocialButton from '../../Component/AuthFeild/SocialIconButton'
import { useNavigation } from '@react-navigation/native'

function LoginHome({ navigation }) {
    // let navigate = useNavigation()
    return (
        // <ScrollView style={{flex:1}}>
        <ImageBackground source={require('../../Assests/backgrounimages.jpg')} style={styles.backgrounBox}>
            <ScrollView style={{flex:1}}>
                <View style={{justifyContent:'space-between'}}>

                    <View style={[styles.MainBox,{flex:1}]}>
                        <View>
                            <Image source={require('../../Assests/mamologo.png')} />
                        </View>
                        <View>
                            <Image source={require('../../Assests/Network.png')} />
                        </View>
                    </View>
                    

                    <View style={[styles.inputFeild,{alignSelf:'center',marginTop:'60%'}]}>
                        <Button onPress={() => navigation.navigate('acountcreate')} label='Login' color='#23B7C5' />
                        <OutlineButton onPress={() => { }} label='Create account' color='#E53799' />
                        <View style={styles.any}>
                            <View style={{
                                width: 140,
                                height: 1,
                                marginLeft: 20,
                                backgroundColor: "white"
                            }}></View>
                            <View><Text style={{
                                color: 'white',
                                fontSize: 15,
                                marginLeft: 10
                            }}>or</Text></View>
                            <View style={{
                                width: 140,
                                height: 1,
                                marginLeft: 10,
                                backgroundColor: "white"
                            }} ></View>

                        </View>
                        <View style={styles.socialButton}>
                            <SocialButton onPress={() => { }} label='Continue with Facebook' SocialIcon='Facebook' />
                            <SocialButton onPress={() => { }} label='Continue with Google' SocialIcon='Google' />
                            <SocialButton onPress={() => { }} label='Continue with apple' SocialIcon='Apple' />


                        </View>
                    </View>

                    <View style={[styles.AndHeplmeSection,{flex:0.2,alignSelf:'center'}]}>
                        <Text style={{ fontSize: 18, color: "white" }}>help me ?</Text>
                    </View>
                </View>
            </ScrollView>

        </ImageBackground >
        // </ScrollView>
    )
}
const styles = StyleSheet.create({
    backgrounBox: {
        // width: 360,
        // height: 812,
        flex: 1
    },
    MainBox: {
        padding: 30,
        paddingTop: 35,
        // width: 360,
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems:'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    inputFeild: {
        alignSelf: 'center'
    },
    any: {
        display: 'flex',

        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        gap: 5,
    },
    socialButton: {
        marginTop: 10,
    },
    AndHeplmeSection: {
        width: 360,
        padding: 7,
        // backgroundColor: 'white',
        marginTop: 10,
        display: 'flex',
        position: "relative",
        bottom: 0,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.7)'

    }
})
export default LoginHome
