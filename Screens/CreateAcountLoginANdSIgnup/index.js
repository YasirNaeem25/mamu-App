import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import OutlineButton from '../../Component/AuthFeild/OutlineButton'
import SocialButton from '../../Component/AuthFeild/SocialIconButton'
import { useNavigation } from '@react-navigation/native'

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { Profile } from "react-native-fbsdk-next";
import WebHandler from '../../Config/AxiosActions/webHandler'

GoogleSignin.configure({
    webClientId: '40923534712-nsgs2aud99q4115v2m9ofocvlhb7hqb3.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER

    iosClientId: '40923534712-is15f3mnn148cmgvmrbjqdkuflsnij52.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

const webHandler = new WebHandler()
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
                            <SocialButton onPress={() => { handleFacebookLogin() }} label='Continue with Facebook' SocialIcon='Facebook' />
                            <SocialButton onPress={() => { signIn() }} label='Continue with Google' SocialIcon='Google' />
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

    function handleFacebookLogin() {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    const currentProfile = Profile.getCurrentProfile().then(
                        function (currentProfile) {
                            if (currentProfile) {
                                console.log("The current logged user is: " +
                                   JSON.stringify( currentProfile))
                                  
                                   let data={
                                    image:currentProfile.imageURL,
                                    name:currentProfile.name,
                                    facebookId:currentProfile.userID
                                   }
                                    webHandler.UserAccountLogin(data,'facebook', (resp) => {

                                        console.log(resp.message)
                                        navigation.navigate('HomeScreen')
                                    }, (error) => {
                                        console.log(error)
                                    })
                                
                            }
                        })
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error)
            }
        )
    }

    async function signIn() {
        try {
            await GoogleSignin.hasPlayServices();
            // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            const userInfo = await GoogleSignin.signIn();
            webHandler.UserAccountLogin(userInfo,'google', (resp) => {

                console.log(resp.message)
                navigation.navigate('HomeScreen')

                // this.props.navigation.navigate('Verification', {
                //     _trainerId: resp.trainer_id,
                //     _verificationType: "NEW_ACCOUNT"
                // })
            }, (error) => {
                if (error == 'Request failed with status code 400') {
                    // myUtils.showSnackbar("Error", "User Not Verified", 'danger')

                }
                console.log(error)
            })
           
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(" user cancelled the login flow")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log("operation (e.g. sign in) is in progress already")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log("play services not available or outdated")
            } else {
                // some other error happened
                // console.log("some other error happened")
            }
        }
    };
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
