import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import { RadioButton, Snackbar } from 'react-native-paper';
import Button from '../../Component/AuthFeild/Button';
import Utils from '../../Component/Utils';

const myUtils = new Utils()
function LoginAndAcountCreateHome({ navigation }) {
    const [checked, setChecked] = useState(false);
    const [checkedSecond, setCheckedSecond] = useState(false);
    const [usertype, setusertype] = useState(null)

    return (

        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header label='Signup' />
            <ScrollView style={{ flex: 1 }}>
                <View>
                    <Text style={[styles.Heading, { width: '90%', alignSelf: 'center' }]}>
                        Please choose what kind of account you want to make?
                    </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>

                    <View style={checked ? styles.ChipsBorder : styles.Chips}>
                        <View>
                            <Image source={require('../../Assests/simple-icons_discogs.png')} />
                        </View>
                        <View style={styles.flex}>
                            <View>
                                <Text style={{ fontSize: 16, color: "#595959" }}>Disc Joskey</Text>
                                <Text style={{ width: 186, fontSize: 11, color: '#595959' }}>

                                    As a Disc Jockey you can create an events, make music list - some text
                                </Text>
                            </View>
                            <View>
                                <RadioButton
                                    value="Selected"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked(!checked), setCheckedSecond(false), setusertype('user') }}
                                    color={'#23b7c5'}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={checkedSecond ? styles.ChipsBorderSecond : styles.Chips}>
                        <View>
                            <Image source={require('../../Assests/Users.png')} />
                        </View>
                        <View style={styles.flex}>
                            <View>
                                <Text style={{ color: "#595959", fontSize: 16 }}>User - Guest</Text>
                                <Text style={{ width: 186, fontSize: 11, color: '#595959' }}>
                                    As a User - Guest you can vote for your favorite song - some text here
                                </Text>
                            </View>
                            <View>
                                <RadioButton

                                    value="Selected"
                                    status={checkedSecond ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setCheckedSecond(!checkedSecond), setChecked(false)
                                        setusertype('guest')
                                    }

                                    }
                                    color={'#23b7c5'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 92, alignSelf: 'center' }}>
                    <Button label='Continue' color='#23b7c5' onPress={() => HandleOnpres()} />
                    <View style={{ paddingTop: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#666', }}>Already have an account?</Text>
                        <Text> <TouchableOpacity onPress={() => { navigation.navigate('loginAcount') }}><Text style={{ color: "black", }}>login</Text></TouchableOpacity></Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Help Me ?</Text>
                </View>
            </ScrollView>
        </View>


    )

    function HandleOnpres() {
        if (usertype) {
            navigation.navigate('CreateAcount', {
                userType: usertype
            })
        }

    }


}
const styles = StyleSheet.create({
    Heading: {
        fontSize: 20,
        color: 'black',
        width: 312,
        paddingTop: 37
    },
    Chips: {
        width: 308,
        height: 80,
        marginTop: 24,
        borderRadius: 10,
        backgroundColor: 'white',  // Set a background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
        display: 'flex',
        // justifyContent: "center",
        flexDirection: "row",
        gap: 15,
    },
    ChipsBorder: {
        width: 308,
        height: 80,
        marginTop: 24,
        borderRadius: 10,
        backgroundColor: 'white',  // Set a background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
        display: 'flex',
        // justifyContent: "center",
        flexDirection: "row",
        gap: 15,
        borderColor: "#23b7c5",
        borderWidth: 1,
    },
    ChipsBorderSecond: {
        width: 308,
        height: 80,
        marginTop: 24,
        borderRadius: 10,
        backgroundColor: 'white',  // Set a background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
        display: 'flex',
        // justifyContent: "center",
        flexDirection: "row",
        gap: 15,
        borderColor: "#23b7c5",
        borderWidth: 1,
    },
    flex: {
        with: 150,
        display: "flex",
        justifyContent: '',
        alignItems: 'center',
        flexDirection: 'row'
    }

})
export default LoginAndAcountCreateHome
