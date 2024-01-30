import Urls from '../Routes/ApiRoute';
import axios from 'axios';
// import CryptoJS from "crypto-js"
import Prefmanager from './prefManager';


const API_KEY = "3ec00dddc00e1dec3115457b0e317c9fb1c34db2";
const prefs = new Prefmanager()

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
    getSongsList(onSuccess, onFailure) {
        this.sendDataGetFormRequest(Urls.GET_SOGNS_LIST, "",
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
        if(type=='normal') {
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
                onFailure(error)
            })
    }
    // createEvent(data, onSuccess, onFailure) {
    //     const formData=new FormData()
       
    //     formData.append("eventName", data.eventName)
    //     formData.append("start_date_time", data.start_date_time)
    //     formData.append("end_date_time", data.end_date_time)
    //     formData.append("descriptions", data.descriptions)
    //     formData.append("songsList", data.songsList)
    //     formData.append("eventOrganizerId", data.eventOrganizerId)
    //     formData.append("image", { uri: data.file.uri, name: 'image.jpg', type: 'multipart/form-data' })
    //     this.sendMediaPostFormRequest(Urls.ADD_EVENT, formData,
    //         (resp) => {

    //             onSuccess(resp)
    //         }, (error) => {
    //             onFailure(error)
    //         })
    // }
    formDataToJson = (formData) => {
        const jsonObject = {};
    console.log("formData ===",formData)
        for (const [key, value] of formData.entries()) {
            jsonObject[key] = value;
        }
    
        return jsonObject;
    };
    convertFormDataToJson = (formData) => {

        console.log("FUnction ----",formData._parts)

        const jsonObject = {};
      
        formData._parts.forEach((value, key) => {
          // Check if the value is a File object (for handling file input)
          if (value instanceof File) {
            jsonObject[key] = {
              uri: value.uri,
              name: value.name,
              type: value.type,
            };
          } else {
            // For non-file fields, simply use the value
            jsonObject[key] = value;
          }
        });
      
        return jsonObject;
      };
    createEvent(data, onSuccess, onFailure) {
        const formData = new FormData();
    
        formData.append("eventName", data.eventName);
        formData.append("start_date_time", data.start_date_time);
        formData.append("end_date_time", data.end_date_time);
        formData.append("descriptions", data.descriptions);
        formData.append("songsList", data.songsList);
        formData.append("eventOrganizerId", data.eventOrganizerId);
        
       
        if (data.file && data.file.uri) {
            formData.append("image", { uri: data.file.uri, name: 'image.jpg', type: 'image/jpeg' });
        }
     
        console.log("STart =====")
        //   const jsonData = this.convertFormDataToJson(formData);

        //   console.log("Ending =====",jsonData)
        // console.log("Form data ====",this.formDataToJson(formData))
        this.sendMediaPostFormRequest(
            Urls.ADD_EVENT,
            formData,
            (resp) => {
                onSuccess(resp);
            },
            (error) => {
                onFailure(error);
            }
        );
    }
    
    sendMediaPostFormRequest(url, formData, onResponse, onError) {
        // Add a boundary to the Content-Type header
        const headers = new Headers({
            'Content-Type': 'multipart/form-data',
        });
    
        console.log("=====================WEB REQUEST========================");
        console.log("URL==> " + url);
        console.log("PARAMS==> " + JSON.stringify(formData));
    
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("RESPONSE==> " + JSON.stringify(responseJson));
            if (responseJson.status === true) {
                onResponse(responseJson);
            } else {
                onError(responseJson.message);
            }
        })
        .catch((error) => {
            console.error("ERROR==> " + error.message);
            onError('Something went wrong while connecting to the server.');
    
            // Additional debug logging for the error scenario
            console.log("Retrying with text response...");
    
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: formData,
            })
            .then((response) => response.text())
            .then((responseText) => {
                console.log("RESPONSE==> " + responseText);
            })
            .catch((retryError) => {
                console.error("Retry Error==> " + retryError.message);
                // Handle retry error as needed
            });
        });
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
    sendDataGetFormRequest(url, _body, onResponse, onError) {
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

        axios.get(url, _body, {
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
                method: 'GET',
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

    // sendMediaPostFormRequest(url, formData, onResponse, onError) {
  
    //     // var key = CryptoJS.HmacSHA1(data, API_KEY)

    //     console.log("=====================WEB REQUEST========================")
    //     console.log("URL==> " + url)
    //     console.log("PARAMS==> " + JSON.stringify(formData))

    //     fetch(url, {
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-Type': 'multipart/form-data',
              
    //         }),
    //         body: formData
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log("RESPONSE==> " + JSON.stringify(responseJson))
    //             if (responseJson.status == true) {
    //                 onResponse(responseJson)
    //             } else {
    //                 onError(responseJson.message)
    //             }
    //         }).catch((error) => {
    //             onError(error.message)
    //             // onError('Something went wrong while connecting to server.')

    //             fetch(url, {
    //                 method: 'POST',
    //                 headers: new Headers({
    //                     'Content-Type': 'multipart/form-data',
    //                     // 'dateTime': dt,
    //                     // 'url': url,
    //                     // 'key': key
    //                 }),
    //                 body: formData
    //             })
    //                 .then((response) => response.text())
    //                 .then((responseText) => {
    //                     console.log("RESPONSE==> " + responseText)
    //                 }).catch((error) => {
    //                     // onError('Something went wrong while connecting to server.')
    //                 });

    //         });
    // }
}
