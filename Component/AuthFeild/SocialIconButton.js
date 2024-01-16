import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

function SocialButton(props) {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    display: "flex",
                    flexDirection: 'column',
                    marginTop: 13,
                    // alignItems: 'center',
                    justifyContent: 'center',
                    width: 320,
                    height: 55,
                    // margin: 'auto',
                    marginLeft: 17,
                    alignSelf: "stretch",
                    borderWidth: 1,
                    borderColor: props.color ? props.color : 'white',
                    borderRadius: 5,

                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 18,
                        paddingLeft: 10,
                    }}>
                        <View>
                            {props.SocialIcon == 'Apple' ? (
                                <Image style={{
                                    fontSize: 20,
                                }} source={require('../../Assests/Apple.png')} />
                            ) : (null)}
                            {props.SocialIcon == 'Google' ? (
                                <Image style={{
                                    fontSize: 20,
                                }} source={require('../../Assests/Google.png')} />
                            ) : (null)}
                            {props.SocialIcon == 'Facebook' ? (
                                <Image style={{
                                    fontSize: 20,
                                }} source={require('../../Assests/Facebook.png')} />
                            ) : (null)}
                            {props.SocialIcon == 'blackApple' ? (
                                <Image style={{
                                    fontSize: 20,
                                }} source={require('../../Assests/BlackAppleLogo.png')} />
                            ) : (null)}
                        </View>
                        <View>
                            <Text style={{
                                color: props.color ? props.color : 'white',
                                fontSize: 18,
                            }}>
                                {props.label}
                            </Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity >
        </>
    )
}

export default SocialButton
