import Urls from '../Routes/ApiRoute';
import axios from 'axios';
// import CryptoJS from "crypto-js"
import Prefmanager from './prefManager';
import utils from '../../Component/Utils'
const myUtils = new utils()


const API_KEY = "3ec00dddc00e1dec3115457b0e317c9fb1c34db2";
const prefs = new Prefmanager()

var navigation = null

export default class WebHandler {

    setNavigation(nav) {
        navigation = nav
    }
    registerUserAccount(data, onSuccess, onFailure) {
        let bodyParam = {
            "user_name": data.userName, "email": data.email, "password": data.password, "role": data.type, "name": data.userName
        }
        this.sendDataObjectPostFormRequest(Urls.USER_SIGNUP, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    changeusername(data, onSuccess, onFailure) {

        let bodyParam = { "user_name": data.userName, "userId": data.userid }


        this.sendDataObjectPostFormRequest(Urls.CHANGE_USER_INFO, bodyParam,
            (resp) => {
                onSuccess(resp)


                // myUtils.showSnackbar("Success",resp.message,"success")
            }, (error) => {

                onFailure(error)
            })
    }
    getSongsList(onSuccess, onFailure) {
        this.sendDataGetFormRequest(Urls.GET_SOGNS_LIST, "",
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    getPlanList(onSuccess, onFailure) {
        this.sendDataGetFormRequest(Urls.GET_PLANS, "",
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    getEventList(onSuccess, onFailure) {
        this.sendDataGetFormRequest(Urls.GET_EVENT_LIST, "",
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })

    }
    UserAccountLogin(data, type, onSuccess, onFailure) {

        let bodyParam = null


        if (type == 'google') {
            bodyParam = { "image": data.user.photo, "name": data.user.name, "google_key": data.user.id }
        }
        if (type == 'facebook') {
            bodyParam = { "image": data.image, "name": data.name, "facebook_key": data.facebookId }
        }
        if (type == 'apple') {
            bodyParam = { "name": data.name, "apple_key": data.userid, "image": 'https://lh3.googleusercontent.com/a/ACg8ocJWOPbskPXSItuqEoX1EvAQXGRV8BMPKeaH1yCRXFP9=s96-c' }
        }
        if (type == 'normal') {
            bodyParam = { "email": data.email, "password": data.password }
        }


        this.sendDataObjectPostFormRequest(Urls.USER_LOGIN, bodyParam,
            (resp) => {
                if (type == 'google') {
                    prefs.socialUserSession(data, resp.user, resp.token)
                }
                else if (type == 'facebook') {
                    prefs.socialfacebookUserSession(data, resp.user, resp.token)
                }
                else {
                    prefs.createNewUserSession(resp.user, resp.token)
                }

                onSuccess(resp)
            }, (error) => {

                console.log("eror ====", error)

                onFailure(error)
            })
    }
    removeEvent(data, onSuccess, onFailure) {
        let bodyParam = { "eventId": data.eventId }

        this.sendDataObjectPostFormRequest(Urls.REMOVE_EVENT, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    songsLike(data, onSuccess, onFailure) {
        let bodyParam = { "userId": data.userId, "songId": data.songId, "eventId": data.eventId }

        this.sendDataObjectPostFormRequest(Urls.SONG_LIKE, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    createEvent = async (data, onSuccess, onFailure) => {
        const formData = new FormData();

        // const stringifiedSongsList = data.songsList.map(song => JSON.stringify(song));
        // console.log("songs list ====", stringifiedSongsList)
        // formData.append("songsList", JSON.stringify(stringifiedSongsList));

        console.log("========  list of songs ====", data.location)
        data.songsList.forEach((obj, index) => {
            formData.append(`songsList[${index}][songName]`, obj.songName);
            formData.append(`songsList[${index}][songCover]`, obj.songCover);
            // ... add more properties if needed
        });
        formData.append("eventName", data.eventName);
        formData.append("start_date_time", data.start_date_time);
        formData.append("end_date_time", data.end_date_time);
        formData.append("descriptions", data.descriptions);
        // formData.append("songsList", data.songsList);
        formData.append("eventOrganizerId", data.eventOrganizerId);
        formData.append("location", data.location);

        formData.append("image", {
            uri: data.imagePath.path,
            name: 'image.jpeg',
            type: data.imagePath.mime,
        });
        this.sendMediaPostFormRequest(Urls.ADD_EVENT, formData, onSuccess, onFailure)
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

        let bodyParam = "&email=" + data.emailaddress


        this.sendDataPostFormRequest(Urls.FORGET_PASSWORD, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }
    passworOtpVerification(data, onSuccess, onFailure) {
        let bodyParam = "&email=" + data.email + "&otp=" + data.otpCode + "&password=" + data.password


        this.sendDataPostFormRequest(Urls.VERIFY_FORGET_PASSWORD_OTP, bodyParam,
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
    setNewPassword(userId, password, onSuccess, onFailure) {
        let bodyParam = "password=" + password + "&trainer_id=" + userId + "&api_key=" + API_KEY
        this.sendDataPostFormRequest(Urls.NEW_PASSWORD_URL, bodyParam,
            (resp) => {
                onSuccess(resp)
            }, (error) => {
                onFailure(error)
            })
    }


    sendDataPostFormRequest(url, _body, onResponse, onError) {
        console.log("=====================WEB REQUEST========================")
        console.log("URL==> " + url)
        console.log("PARAMS==> " + _body)
        axios.post(url, _body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }

        }).then(response => {
            // console.log("RESPONSE==> " + JSON.stringify(response))
            var responseJson = response.data
            console.log("RESPONSE==> 1" + JSON.stringify(responseJson), response)
            if (responseJson != undefined && responseJson != null) {
                if (responseJson) {
                    onResponse(responseJson)
                }
            } else {
                onError("Unknown response from server")
            }
        }).catch((error) => {
            // console.log(JSON.stringify(error))
            // onError(error.message)

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
                    console.log("RESPONSE==> 2" + responseJson)
                    var jsonObject = JSON.parse(responseJson);
                    onError(jsonObject.message);
                }).catch((error) => {
                    console.log("RESPONSE==>3 " + JSON.stringify(error))
                });
        })
    }

    sendDataObjectPostFormRequest(url, _body, onResponse, onError) {
        console.log("=====================WEB REQUEST========================")
        console.log("URL==> " + url)
        console.log("PARAMS==> " + JSON.stringify(_body))
        axios.post(url, _body, {
            headers: {
                'Content-Type': 'application/json',

            }

        }).then(response => {
            var responseJson = response.data
            console.log("RESPONSE==> 1" + JSON.stringify(responseJson))
            if (responseJson != undefined && responseJson != null) {
                if (responseJson) {
                    onResponse(responseJson)
                }
            } else {
                onError("Unknown response from server")
            }
        }).catch((error) => {
            // console.log(JSON.stringify(error))
            // onError(error.message)

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
                    console.log("RESPONSE==> 2" + responseJson)
                    var jsonObject = JSON.parse(responseJson);
                    onError(jsonObject?.error?jsonObject.error:jsonObject.message);
          
                }).catch((error) => {
                    console.log("RESPONSE==>3 " + JSON.stringify(error))
                });
        })
    }
    sendDataGetFormRequest(url, _body, onResponse, onError) {

        console.log("=====================WEB REQUEST========================")
        console.log("URL==> " + url)
        axios.get(url, _body, {

        }).then(response => {
            var responseJson = response.data
            console.log("RESPONSE==> 1" + JSON.stringify(responseJson))
            if (responseJson != undefined && responseJson != null) {
                if (responseJson) {
                    onResponse(responseJson)
                }

            } else {
                onError("Unknown response from server")
            }
        }).catch((error) => {
            // console.log(JSON.stringify(error))
            // onError(error.message)
            //ONLY FOR DEBUG//
            fetch(url, {
                method: 'GET',
            })
                .then((response) => response.text())
                .then((responseJson) => {
                    console.log("RESPONSE==> 2" + responseJson)
                    var jsonObject = JSON.parse(responseJson);
                    onError(jsonObject.message);
                   
                }).catch((error) => {
                    console.log("RESPONSE==>3 " + JSON.stringify(error))
                });
        })
    }

    sendMediaPostFormRequest(url, formData, onResponse, onError) {
        console.log("=====================WEB REQUEST========================")
        console.log("URL==> " + url)
        console.log("PARAMS==> " + JSON.stringify(formData))
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'multipart/form-data',

            }),
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("RESPONSE==> " + JSON.stringify(responseJson))
                if (responseJson) {
                    onResponse(responseJson)
                } else {
                    onError(responseJson.message)
                }
            }).catch((error) => {
                onError(error.message)

                fetch(url, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'multipart/form-data',

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

    apiCallWithFormData = async ({ formData, URL }) => {
        try {

            const url = `${URL}`;
            console.log(":rocket: ~ file: NewWebHandler.js:71 ~ ApiUploadFileAndDataAxios ~ url:", url)
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',

                }
            }
            try {
                const response = await axios.post(url, formData, config);
                if (response) {
                    return response.data;
                } else {
                    return response;
                }
            } catch (e) {
                if (e.response) {
                    return e.response.data
                } else {
                    return e.toString();
                }
            }
        } catch (e) {
            return e.toString();
        }
    };

    sendPostRequest(Url, bodyParams, OnSuccess, OnError) {
        let headers = { 'Content-Type': 'application/json' }

        console.log("------------API POST REQUEST--------------")
        console.log("URL==>", Url)
        console.log("HEADER==>", headers)
        console.log("BODYPARAMS===>", bodyParams)

        axios.post(Url, bodyParams, {
            headers: headers,
        })
            .then((response) => {

                console.log("RESPOSNE==>", JSON.stringify(response))

                var responseJson = response
                if (responseJson && responseJson) {
                    OnSuccess(responseJson)
                } else {
                    OnError(responseJson)
                }
            })
            .catch((error) => {

                console.log(error.message)
                fetch(Url, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'multipart/form-data',

                    }),
                    body: bodyParams
                })
                    .then((response) => response.text())
                    .then((responseText) => {
                        console.log("RESPONSE==> " + responseText)
                    }).catch((error) => {
                        // onError('Something went wrong while connecting to server.')
                    });


            })
    }
}
