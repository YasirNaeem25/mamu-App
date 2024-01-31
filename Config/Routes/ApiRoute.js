const SERVER = "https://mamu-app-2e1cbc92673a.herokuapp.com/"

export default{
    USER_SIGNUP:SERVER+"user/signup",
    USER_LOGIN:SERVER+"user/login",
    OTP_VERIFICATION:SERVER+"user/verify-otp",
    FORGET_PASSWORD:SERVER+"user/forgot-password",
    VERIFY_FORGET_PASSWORD_OTP:SERVER+"user/verify-forgot-password-otp",
    GET_USER_INFO:SERVER+"user",

    //Event API
    ADD_EVENT:SERVER+"addEvent",


    //GET API
    GET_SOGNS_LIST:SERVER+"get/songs",
    GET_PLANS:SERVER+"offers",
    GET_EVENT_LIST:SERVER+"getAllEvent"

    
}