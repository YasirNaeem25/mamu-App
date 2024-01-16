import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView } from 'react-native'
import Button from '../../Component/AuthFeild/Button'
import OutlineButton from '../../Component/AuthFeild/OutlineButton'
import SocialButton from '../../Component/AuthFeild/SocialIconButton'

function AcountCreate({ navigation }) {
    return (
        <ScrollView>
            <ImageBackground source={require('../../Assests/backgrounimages.jpg')} style={styles.backgrounBox}>
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
                        <Button onPress={() => navigation.navigate('AcountCreateHome')} label='Login' color='#23B7C5' />
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
                        <OutlineButton onPress={() => { }} label='Create account' color='#E53799' />
                    </View>
                </ScrollView>
                <View style={styles.AndHeplmeSection}>
                    <Text style={{ fontSize: 18, color: "white" }}>help me ?</Text>
                </View>
            </ImageBackground >
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    backgrounBox: {
        width: 360,
        height: 812,
        flexShrink: 0,
        backgroundColor: 'black'
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
        paddingTop: 460,
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
        backgroundColor: 'white',
        marginTop: 10,
        position: "relative",
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.7)'

    }
})
export default AcountCreate
