import Urls from '../Routes/ApiRoute';
import axios from 'axios';
// import CryptoJS from "crypto-js"
// import PrefManager from "../local/Prefmanager"


const API_KEY = "3ec00dddc00e1dec3115457b0e317c9fb1c34db2";
// const prefs = new PrefManager()

var navigation = null

export default class WebHandler {

    setNavigation(nav) {
        navigation = nav
    }

    registerUserAccount(data, onSuccess, onFailure) {

        let bodyParam = "&user_name=" + data.userName + "&name=" + data.userName +
            "&email=" + data.email + "&password=" + data.password +
            "&role=" + data.type

        this.sendDataPostFormRequest(Urls.USER_SIGNUP, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }

    UserAccountLogin(data, onSuccess, onFailure) {
        console.log(data)
        let bodyParam = "&email=" + data.email + "&password=" + data.password


        this.sendDataPostFormRequest(Urls.USER_LOGIN, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    AccountVerifcation(data, onSuccess, onFailure) {
        let bodyParam = "&userId=" + data.userId + "&otp=" + data.otpCode


        this.sendDataPostFormRequest(Urls.OTP_VERIFICATION, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    forgetPassword(data, onSuccess, onFailure) {   
        let bodyParam ="&email=" + data.emailaddress 
            
            
        this.sendDataPostFormRequest(Urls.FORGET_PASSWORD, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }




    resendCodeVerification(userId, onSuccess, onFailure) {
        let bodyParam = "trainer_id=" + userId + "&api_key=" + API_KEY
        this.sendDataPostFormRequest(Urls.RESEND_CODE_VERIFICATION_URL, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }

    userAccountLogin(username, password, fcmToken, loginType, socialLoginData, onSuccess, onFailure) {
        let bodyParam = "email=" + username + "&password=" + password +
            "&api_key=" + API_KEY + "&fcm_token=" + fcmToken
        if (loginType == "facebook") {
            bodyParam = bodyParam + "&sociallogin=facebook" + "&profile=" + JSON.stringify(socialLoginData)
        } else if (loginType == "google") {
            bodyParam = bodyParam + "&sociallogin=google" + "&profile=" + JSON.stringify(socialLoginData)
        }
        this.sendDataPostFormRequest(Urls.USER_LOGIN_URL, bodyParam,
            (resp) => {
                let data = resp.data
                let userData = {
                    userId: data.trainer_id,
                    userName: data.username,
                    displayName: data.name,
                    email: data.email,
                    contactNo: data.phoneno,
                    userPic: data.profile_image,
                    widgets: resp.widget,
                    loginType: loginType,
                    isLoggedIn: (data.is_verified == "1")
                }
                prefs.createNewUserSession(userData, data.session_token)
                prefs.updateUserProfileStatus(data.is_first_load)
                prefs.setOldPasswordExist(resp.next_password)
                prefs.updateUserGeneralSettings(JSON.stringify(resp.settings))
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }

   

    setNewPassword(userId, password, onSuccess, onFailure) {
        let bodyParam = "password=" + password + "&trainer_id=" + userId + "&api_key=" + API_KEY
        this.sendDataPostFormRequest(Urls.NEW_PASSWORD_URL, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }

    changePassword(oldPass, newPass, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "old_password=" + oldPass + "&new_password=" + newPass +
                    "&trainer_id=" + data.userId + "&session_token=" + data.sessionToken
                this.sendDataPostFormRequest(Urls.CHANGE_PASSWORD_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }



    userProfileCoverVideoUpdate(videoPath, thumbPath, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let formData = new FormData()
                formData.append("trainer_id", data.userId)
                formData.append("session_token", data.sessionToken)
                formData.append("video", { uri: videoPath, name: 'CoverVideo.mp4', type: 'multipart/form-data' })
                formData.append("thumbnail", { uri: thumbPath, name: 'VideoThumb.jpg', type: 'multipart/form-data' })
                this.sendMediaPostFormRequest(Urls.USER_PROFILE_COVER_VIDEO_UPDATE_URL, formData,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    userProfileCertificateUpload(title, filePath, onSuccess, onFailure) {
        prefs.getUserSessionData(async (data) => {
            if (data) {
                let formData = new FormData()
                formData.append("trainer_id", data.userId)
                formData.append("session_token", data.sessionToken)
                formData.append("title", title)

                // const resizeImg = await ImageResizer.createResizedImage(filePath, 720, 1080, "JPEG", 0.75)

                formData.append("image", { uri: filePath, name: 'Certificate.jpg', type: 'multipart/form-data' })
                this.sendMediaPostFormRequest(Urls.USER_PROFILE_CERTIFICATE_UPLOAD_URL, formData,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    userProfileTransPortfolioUpload(title, beforeFile, afterFile, onSuccess, onFailure) {
        prefs.getUserSessionData(async (data) => {
            if (data) {
                let formData = new FormData()
                formData.append("trainer_id", data.userId)
                formData.append("session_token", data.sessionToken)
                formData.append("api_key", API_KEY)
                formData.append("title", title)

                // const resizeImg1 = await ImageResizer.createResizedImage(beforeFile, 720, 1080, "JPEG", 0.75)
                // const resizeImg2 = await ImageResizer.createResizedImage(afterFile, 720, 1080, "JPEG", 0.75)

                // formData.append("before", { uri: resizeImg1.uri, name: 'BeforePic.jpeg', type: 'multipart/form-data' })
                // formData.append("after", { uri: resizeImg2.uri, name: 'AfterPic.jpeg', type: 'multipart/form-data' })

                formData.append("before", { uri: beforeFile, name: 'BeforePic.jpg', type: 'multipart/form-data' })
                formData.append("after", { uri: afterFile, name: 'AfterPic.jpg', type: 'multipart/form-data' })
                this.sendMediaPostFormRequest(Urls.USER_PROFILE_PORTFOLIO_UPLOAD_URL, formData,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }




    getUserProfileInfoData(onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&session_token=" + data.sessionToken
                this.sendDataPostFormRequest(Urls.USER_PROFILE_INFO_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }


    StoreDeviceToken(info, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {

                let bodyParams = "&user_id=" + data.userId + "&device_token=" + info.userId + "&user_type=" + 'trainer' + "&session_token=" + data.sessionToken
                this.sendDataPostFormRequest(Urls.PN_TOKEN_SAVE, bodyParams,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }
    Delete_Device_Token(info, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {

                let bodyParams = "&user_id=" + data.userId + "&device_token=" + info.userId + "&user_type=" + 'trainer' + "&session_token=" + data.sessionToken
                this.sendDataPostFormRequest(Urls.DELETE_DEVICE_TOKEN, bodyParams,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    deleteCalSuppCardio(id, type, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&session_token=" + data.sessionToken +
                    "&id=" + id + "&deleted_from=" + type
                this.sendDataPostFormRequest(Urls.DELETE_CAL_SUPP_CARDIO_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    getClientProgress(clientId, weekNo, weekStart, weekEnd, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&session_token=" + data.sessionToken +
                    "&customer_id=" + clientId + "&id=" + weekNo +
                    "&starting=" + weekStart + "&ending=" + weekEnd
                this.sendDataPostFormRequest(Urls.CLIENT_PROGRESS_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }




    uploadChatMediaFile(fileName, filePath, fileExt, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let formData = new FormData()
                formData.append("trainer_id", data.userId)
                formData.append("session_token", data.sessionToken)
                formData.append("api_key", API_KEY)
                formData.append("file_name", fileName)
                formData.append("file", { uri: filePath, name: fileName + fileExt, type: 'multipart/form-data' })
                this.sendMediaPostFormRequest(Urls.UPLOAD_CHAT_MEDIA_FILE_URL, formData,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }



    removeClient(clientId, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&session_token=" + data.sessionToken +
                    "&api_key=" + API_KEY + "&customer_id=" + clientId + "&removed_from=trainer"
                this.sendDataPostFormRequest(Urls.REMOVE_CLIENT_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    addNewWorkout(title, categoryId, bodyPartId, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&session_token=" + data.sessionToken +
                    "&api_key=" + API_KEY + "&title=" + title + "&category_id=" + categoryId +
                    "&body_trainer_id=" + bodyPartId
                this.sendDataPostFormRequest(Urls.ADD_NEW_WORKOUT_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    removeWorkout(workoutId, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&session_token=" + data.sessionToken +
                    "&api_key=" + API_KEY + "&workout_id=" + workoutId
                this.sendDataPostFormRequest(Urls.REMOVE_WORKOUT_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    removeUserData(onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "tra_id=" + data.userId +
                    this.sendDataPostFormRequest(Urls.BLOCK_CUSTOMER, bodyParam,
                        (resp) => {
                            onSuccess(resp)
                        }, (error) => {
                            onFailure(error)
                        })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    getRecipesDirectory(page_number, onSuccess, onFailure) {
        console.log("Get Diet Plan")
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY
                if (page_number != 0) {
                    bodyParam = bodyParam + "&page_number=" + page_number
                }
                this.sendDataPostFormRequest(Urls.GET_RECIPES_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    DeleteRecipes(id, onSuccess, onFailure) {
        console.log("Get Diet Plan")
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY + "&recipe_id=" + id +
                    "&session_token=" + data.sessionToken

                this.sendDataPostFormRequest(Urls.DELETE_TRAINER_RECIPE, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    getMealTypes(onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY
                this.sendDataPostFormRequest(Urls.MEAL_TYPES_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    addDietPlan(traineeId, dayId, recipeId, mealTypeId, recipeDetails, WeekId, onSuccess, onFailure) {

        console.log("Week Id ==>>", WeekId)
        prefs.getUserSessionData(async (data) => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY +
                    "&trainee_id=" + traineeId + "&day_id=" + dayId +
                    "&food_item_id=" + recipeId + "&food_category_id=" + mealTypeId + "&week=" + WeekId +
                    "&calories_supplement=" + JSON.stringify(recipeDetails)
                this.sendDataPostFormRequest(Urls.ADD_DIET_PLAN_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }

    deleteDietPlan(recipeId, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY +
                    "&food_assign_id=" + recipeId + "&session_token=" + data.sessionToken
                this.sendDataPostFormRequest(Urls.REMOVE_DIET_PLAN_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }
    Recipe_Clone_OtherDays(nextdayid, customerId, currentDay, weekNo, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY +
                    "&next_day_id=" + nextdayid + "&session_token=" + data.sessionToken + "&week_id=" + weekNo + "&day_id=" + currentDay + "&trainee_id=" + customerId
                this.sendDataPostFormRequest(Urls.COPY_FOOD_PLAN, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }
    RemoveDayPlan(weekId, dayId, userId, onSuccess, onFailure) {
        prefs.getUserSessionData(data => {
            if (data) {
                let bodyParam = "trainer_id=" + data.userId + "&api_key=" + API_KEY +
                    "&week_id=" + weekId + "&session_token=" + data.sessionToken + "&day_id=" + dayId + "&customer_id=" + userId
                this.sendDataPostFormRequest(Urls.REMOVE_DIET_PLAN_URL, bodyParam,
                    (resp) => {
                        onSuccess(resp)
                    }, (error) => {
                        onFailure(error)
                    })
            } else {
                onFailure("Session not exist!")
            }
        })
    }
    sendDataPostFormRequest(url, _body, onResponse, onError) {
        var dt = Date.now().toString()
        var data = dt + url
        // var key = CryptoJS.HmacSHA1(data, API_KEY).toString()

        console.log("=====================WEB REQUEST========================")
        console.log("URL==> " + url)
        console.log("PARAMS==> " + _body)
        var headers2 = {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'dateTime': dt,
            // 'url': url,
            // 'key': key
        }
        console.log("Header==> ", headers2)

        axios.post(url, _body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'dateTime': dt,
                // 'url': url,
                // 'key': key
            }

        }).then(response => {
            // console.log("RESPONSE==> " + JSON.stringify(response))
            var responseJson = response.data
            console.log("RESPONSE==> 1" + JSON.stringify(responseJson))
            if (responseJson != undefined && responseJson != null) {
                if (responseJson) {
                    onResponse(responseJson)
                }
                else if (responseJson.message == "Logged out") {
                    if (navigation) {
                        // prefs.destroyUserSession()
                        // navigation.navigate("Auth")
                    }
                    onError("You are logged out!")
                }
                else {
                    onError(responseJson.message)
                }
            } else {
                onError("Unknown response from server")
            }
        }).catch((error) => {
            console.log(JSON.stringify(error))
            onError(error.message)

            //ONLY FOR DEBUG//
            fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // 'dateTime': dt,
                    // 'url': url,
                    // 'key': key
                }),
                body: _body
            })
                .then((response) => response.text())
                .then((responseJson) => {
                    console.log("RESPONSE==> 2" + JSON.stringify(responseJson))
                }).catch((error) => {
                    console.log("RESPONSE==>3 " + JSON.stringify(error))
                });
        })
    }

    sendMediaPostFormRequest(url, formData, onResponse, onError) {
        var dt = Date.now().toString()
        var data = dt + url
        // var key = CryptoJS.HmacSHA1(data, API_KEY)

        console.log("=====================WEB REQUEST========================")
        console.log("URL==> " + url)
        console.log("PARAMS==> " + JSON.stringify(formData))

        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'multipart/form-data',
                'dateTime': dt,
                'url': url,
                'key': key
            }),
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("RESPONSE==> " + JSON.stringify(responseJson))
                if (responseJson.status == true) {
                    onResponse(responseJson)
                } else {
                    onError(responseJson.message)
                }
            }).catch((error) => {
                onError(error.message)
                // onError('Something went wrong while connecting to server.')

                fetch(url, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'multipart/form-data',
                        'dateTime': dt,
                        'url': url,
                        'key': key
                    }),
                    body: formData
                })
                    .then((response) => response.text())
                    .then((responseText) => {
                        console.log("RESPONSE==> " + responseText)
                    }).catch((error) => {
                        // onError('Something went wrong while connecting to server.')
                    });

            });
    }
}
