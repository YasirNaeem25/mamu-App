import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import OutlineButton from '../../Component/AuthFeild/OutlineButton'
import SocialButton from '../../Component/AuthFeild/SocialIconButton'
import { useNavigation } from '@react-navigation/native'

function CreateAcountHOme({ navigation }) {
    // let navigate = useNavigation()
    return (
        <ScrollView>
            <View style={styles.backgrounBox}>
                <ScrollView>
                    <View style={styles.MainBox}>
                        <View>
                            <Image source={require('../../Assests/mamologo.png')} />
                        </View>
                        <View>
                            <Image source={require('../../Assests/Network.png')} />
                        </View>
                    </View>
                    <View style={styles.inputFeild}>
                        <Button onPress={() => navigation.navigate('optionAcount')} label='Login' color='#23B7C5' />
                        <OutlineButton onPress={() => { }} label='Create account' color='#E53799' />
                        <View style={styles.any}>
                            <View style={{
                                width: 140,
                                height: 1,
                                marginLeft: 20,
                                backgroundColor: "black"
                            }}></View>
                            <View><Text style={{
                                color: 'black',
                                fontSize: 15,
                                marginLeft: 10
                            }}>or</Text></View>
                            <View style={{
                                width: 140,
                                height: 1,
                                marginLeft: 10,
                                backgroundColor: "black"
                            }} ></View>

                        </View>
                        <View style={styles.socialButton}>
                            <SocialButton onPress={() => { }} label='Continue with Facebook' color='black' SocialIcon='Facebook' />
                            <SocialButton onPress={() => { }} label='Continue with Google' color='black' SocialIcon='Google' />
                            <SocialButton onPress={() => { }} label='Continue with apple' color='black' SocialIcon='blackApple' />


                        </View>
                    </View>
                </ScrollView>
                <View style={styles.AndHeplmeSection}>
                    <Text style={{ fontSize: 15, color: "black" }}>help me ?</Text>
                </View>
            </View >
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    backgrounBox: {
        width: 360,
        height: 812,
        flexShrink: 0,
    },
    MainBox: {
        padding: 30,
        paddingTop: 35,
        width: 360,
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems:'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    inputFeild: {
        // marginTop: ,
        paddingTop: 240,
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
        height: 65,
        marginTop: 10,
        position: 'relative',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'transparent'

    }
})
export default CreateAcountHOme
