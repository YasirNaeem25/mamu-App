import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';


export default function GoogleAuth() {
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

    return (
        <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={()=>signIn()}
            // disabled={this.state.isSigninInProgress}
        />
    )

    async function signIn() {
        try {
            await GoogleSignin.hasPlayServices();
            // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            
            const userInfo = await GoogleSignin.signIn();
           console.log(userInfo)
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