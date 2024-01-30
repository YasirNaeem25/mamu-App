import AsyncStorage from "@react-native-async-storage/async-storage"

const USER_ID_KEY = "@Session:UserId"
const USER_NAME_KEY = "@Session:UserName"
const USER_DISPLAY_NAME_KEY = "@Session:UserDisplayName"
const USER_EMAIL_KEY = "@Session:UserEmail"
const USER_CONATCT_NO_KEY = "@Session:UserContactNo"
const USER_PROFILE_PIC_KEY = "@Session:UserProfilePic"
const USER_LOGIN_TYPE_KEY = "@Session:UserLoginType"
const USER_SESSION_TOKEN_KEY = "@Session:UserToken"
const IS_LOGIN_KEY = "@Session:IsUserLogin"
const IS_FIRSTTIME_PROFILE_LOADED_KEY = "@Session:IsFirtsTimeLoaded"
const IS_OLD_PASSWORD_EXIST_KEY = "@Session:IsOldPasswordExist"

const USER_PROFIE_INFO_KEY = "@General:UserProfileInfo"
const USER_GENERAL_SETTINGS_KEY = "@General:UserGeneralSettings"
const USER_GENERAL_WIDGETS_KEY = "@General:UserWidgets"
const DUMMY_WORKOUT_TEMPS_KEY = "@General:DummyWorkoutTemps"
const REMINDERS_DATA_KEY = "General@Reminders"

const USER_SOCIAL_ID_TOKEN = "@Session:SocialidToken"
const SOCIAL_SERVER_AUTH_CODE = "@Session:SocialserverAuthCode"
const SOCIAL_ID= "@Session:SocialID"



export default class Prefmanager {

    async createNewUserSession(userData, token) {
        try {
            await AsyncStorage.setItem(USER_ID_KEY, userData._id.toString());//done
            await AsyncStorage.setItem(USER_NAME_KEY, userData.user_name.toString());//done
            await AsyncStorage.setItem(USER_DISPLAY_NAME_KEY, userData.name.toString());//done

            await AsyncStorage.setItem(USER_EMAIL_KEY, userData.email.toString());//done


            await AsyncStorage.setItem(USER_PROFILE_PIC_KEY, userData.profile ? userData?.profile.toString() : "[]");

            await AsyncStorage.setItem(USER_SESSION_TOKEN_KEY, token.toString());

            await AsyncStorage.setItem(USER_LOGIN_TYPE_KEY, userData.role.toString());

            await AsyncStorage.setItem(SOCIAL_SERVER_AUTH_CODE, "[]");
            await AsyncStorage.setItem(USER_SOCIAL_ID_TOKEN, "[]");
        } catch (ex) {
            console.warn(ex.message)
        }
    }
    async socialUserSession(socialData, userData, token) {
        try {
            await AsyncStorage.setItem(USER_ID_KEY, userData._id.toString());//done
            await AsyncStorage.setItem(USER_NAME_KEY, userData.name.toString());//done
            await AsyncStorage.setItem(USER_DISPLAY_NAME_KEY, userData.name.toString());//done

            await AsyncStorage.setItem(USER_EMAIL_KEY, socialData.user.email.toString());//done


            await AsyncStorage.setItem(USER_PROFILE_PIC_KEY, socialData.user.photo.toString());

            await AsyncStorage.setItem(USER_SESSION_TOKEN_KEY, token.toString());

            await AsyncStorage.setItem(USER_LOGIN_TYPE_KEY, userData?.role ? userData?.role.toString() : "[]");
          
            // await AsyncStorage.setItem(SOCIAL_SERVER_AUTH_CODE, socialData.serverAuthCode.toString());
            // await AsyncStorage.setItem(USER_SOCIAL_ID_TOKEN, socialData.idToken.toString());
            // await AsyncStorage.setItem(SOCIAL_ID, userData.google_key.toString());
            

        } catch (ex) {
            console.warn(ex.message)
        }
    }
    async socialfacebookUserSession(socialData, userData, token) {
     
        try {
            await AsyncStorage.setItem(USER_ID_KEY, userData._id.toString());//done
            await AsyncStorage.setItem(USER_NAME_KEY, userData.name.toString());//done
            await AsyncStorage.setItem(USER_DISPLAY_NAME_KEY, userData.name.toString());//done

            await AsyncStorage.setItem(USER_EMAIL_KEY, socialData.user.email.toString());//done


            await AsyncStorage.setItem(USER_PROFILE_PIC_KEY, socialData.user.photo.toString());

            await AsyncStorage.setItem(USER_SESSION_TOKEN_KEY, token.toString());

            await AsyncStorage.setItem(USER_LOGIN_TYPE_KEY, userData?.role ? userData?.role.toString() : "[]");
          
            // await AsyncStorage.setItem(SOCIAL_ID, userData.facebook_key.toString());

        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async getUserSessionData(onResult) {
        try {
            // const isUserLogin = await AsyncStorage.getItem(IS_LOGIN_KEY);
            const id = await AsyncStorage.getItem(USER_ID_KEY);
            const un = await AsyncStorage.getItem(USER_NAME_KEY);
            const dn = await AsyncStorage.getItem(USER_DISPLAY_NAME_KEY);
            const em = await AsyncStorage.getItem(USER_EMAIL_KEY);
            const pic = await AsyncStorage.getItem(USER_PROFILE_PIC_KEY);
            const token = await AsyncStorage.getItem(USER_SESSION_TOKEN_KEY);
            const type = await AsyncStorage.getItem(USER_LOGIN_TYPE_KEY);

            // const serverAuth = await AsyncStorage.getItem(SOCIAL_SERVER_AUTH_CODE);
            // const socialidToken = await AsyncStorage.getItem(USER_SOCIAL_ID_TOKEN);
            // const SOCIAL_ID = await AsyncStorage.getItem(SOCIAL_ID);

            
            let data = {
                userId: id,
                userName: un,
                displayName: dn,
                email: em,
                userProfilePic: pic,

                loginType: type,
                sessionToken: token,

                // serverAuth: serverAuth,
                // socialidToken: socialidToken,
                SocialId:SOCIAL_ID
            }
            onResult(data)


            // if (isUserLogin && isUserLogin == 'true') {
            //     let data = {
            //         userId: id,
            //         userName: un,
            //         displayName: dn,
            //         email: em,
            //         userProfilePic: pic,

            //         loginType: type,
            //         sessionToken: token
            //     }
            //     onResult(data)
            // } else {
            //     onResult(null)
            // }

        } catch (ex) {
            onResult(null)
            console.warn(ex.message)
        }
    }

    async updateUserDisplayName(name) {
        try {
            await AsyncStorage.setItem(USER_DISPLAY_NAME_KEY, name);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async updateUserProfilePic(picPath) {
        try {
            await AsyncStorage.setItem(USER_PROFILE_PIC_KEY, picPath);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async updateMyActiveWidgets(widgets) {
        try {
            await AsyncStorage.setItem(USER_GENERAL_WIDGETS_KEY, widgets);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async destroyUserSession() {
        try {
            await AsyncStorage.multiRemove([
                USER_ID_KEY, USER_NAME_KEY, USER_PROFILE_PIC_KEY, USER_SESSION_TOKEN_KEY,
                IS_LOGIN_KEY, USER_PROFIE_INFO_KEY, USER_GENERAL_SETTINGS_KEY, USER_DISPLAY_NAME_KEY,
                USER_CONATCT_NO_KEY
            ])
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async isUserLoggedIn(onResult) {
        try {
            const val = await AsyncStorage.getItem(IS_LOGIN_KEY);
            if (val != undefined && val == 'true') {
                onResult(true)
            } else {
                onResult(false)
            }
        } catch (ex) {
            onResult(false)
            console.warn(ex.message)
        }
    }

    async updateUserLoginStatus(isLoggedIn) {
        try {
            await AsyncStorage.setItem(IS_LOGIN_KEY, isLoggedIn.toString());
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async isFirstTimeLoaded(onResult) {
        try {
            const val = await AsyncStorage.getItem(IS_FIRSTTIME_PROFILE_LOADED_KEY);
            if (val != undefined && val == 'true') {
                onResult(true)
            } else {
                onResult(false)
            }
        } catch (ex) {
            onResult(false)
            console.warn(ex.message)
        }
    }

    async updateUserProfileStatus(isLoaded) {
        try {
            await AsyncStorage.setItem(IS_FIRSTTIME_PROFILE_LOADED_KEY, isLoaded.toString());
        } catch (ex) {
            console.warn(ex.message)
        }
    }


    async updateTempProfileData(data) {
        try {
            await AsyncStorage.setItem(USER_PROFIE_INFO_KEY, data);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async getTempProfileData(onDataLoaded) {
        try {
            let data = await AsyncStorage.getItem(USER_PROFIE_INFO_KEY);
            let jData = JSON.parse(data)
            onDataLoaded(jData)
        } catch (ex) {
            onDataLoaded(null)
            console.warn(ex.message)
        }
    }

    async removeTempProfileData() {
        try {
            await AsyncStorage.removeItem(USER_PROFIE_INFO_KEY)
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async updateUserGeneralSettings(data) {
        try {
            await AsyncStorage.setItem(USER_GENERAL_SETTINGS_KEY, data);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async getUserGeneralSettings(onDataLoaded) {
        try {
            let data = await AsyncStorage.getItem(USER_GENERAL_SETTINGS_KEY);
            let jData = JSON.parse(data)
            onDataLoaded(jData)
        } catch (ex) {
            onDataLoaded(null)
            console.warn(ex.message)
        }
    }

    async updateDummyWorkoutTemps(data) {
        try {
            await AsyncStorage.setItem(DUMMY_WORKOUT_TEMPS_KEY, data);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async getDummyWorkoutTemps(onDataLoaded) {
        try {
            let data = await AsyncStorage.getItem(DUMMY_WORKOUT_TEMPS_KEY);
            let jData = JSON.parse(data)
            onDataLoaded(jData)
        } catch (ex) {
            onDataLoaded(null)
            console.warn(ex.message)
        }
    }

    async updateLocalRemindersData(data) {
        try {
            await AsyncStorage.setItem(REMINDERS_DATA_KEY, data);
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async getLocalRemindersData(onDataLoaded) {
        try {
            let data = await AsyncStorage.getItem(REMINDERS_DATA_KEY);
            let jData = JSON.parse(data)
            onDataLoaded(jData)
        } catch (ex) {
            onDataLoaded(null)
            console.warn(ex.message)
        }
    }

    async setOldPasswordExist(isExist) {
        try {
            await AsyncStorage.setItem(IS_OLD_PASSWORD_EXIST_KEY, isExist.toString());
        } catch (ex) {
            console.warn(ex.message)
        }
    }

    async isOldPasswordExist(onResult) {
        try {
            const val = await AsyncStorage.getItem(IS_OLD_PASSWORD_EXIST_KEY);
            onResult(val != undefined && val == 'true')
        } catch (ex) {
            onResult(false)
            console.warn(ex.message)
        }
    }


}