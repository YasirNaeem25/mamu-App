import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import OutlineButton from '../../Component/AuthFeild/OutlineButton'
import SocialButton from '../../Component/AuthFeild/SocialIconButton'
import { useNavigation } from '@react-navigation/native'
// import GoogleAuth from '../../Component/AuthFeild/GoogleAuth'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '40923534712-nsgs2aud99q4115v2m9ofocvlhb7hqb3.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

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
                            <SocialButton onPress={() => { signIn() }} label='Continue with Google' color='black' SocialIcon='Google' />
                            {/* <GoogleAuth /> */}
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


    async function signIn() {
        try {
            await GoogleSignin.hasPlayServices();
            // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            const userInfo = await GoogleSignin.signIn();
            // console.log(userInfo)
            if (userInfo) {
                navigation.navigate('HomeScreen')
            }

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
