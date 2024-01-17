import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import OutlineButton from '../../Component/AuthFeild/OutlineButton'
import SocialButton from '../../Component/AuthFeild/SocialIconButton'
import { useNavigation } from '@react-navigation/native'

function AcountCreateOPtion({ navigation }) {
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
                        <Button onPress={() => { navigation.navigate('loginAcount') }} label='Login' color='#23B7C5' />
                        <OutlineButton onPress={() => { navigation.navigate('loginAndCreateAcountHome') }} label='Create account' color='#E53799' />
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
                </ScrollView>
                <View style={styles.AndHeplmeSection}>
                    <Text style={{ fontSize: 18, color: "white" }}>help me ?</Text>
                </View>
                
            </View >
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    backgrounBox: {
        width: 360,
        backgroundColor: '#055249',
        height: 812,
        // backgroundColor: "conic-gradient(from 136deg at 51.69% 50.74%, #0D1114 54.7453773021698deg, #061917 154.8828399181366deg, #055F52 233.18689584732056deg, #054F46 264.5751357078552deg, #065950 351.2843656539917deg);"
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        position: "relative",
        bottom: 0,

    }
})
export default AcountCreateOPtion
