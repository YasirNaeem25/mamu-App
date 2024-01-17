import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'
// import { StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';


function SwitchAcount({ navigation }) {
    const [checked, setChecked] = useState('dsfsd');
    const [checkedSecond, setCheckedSecond] = useState('dssdf');
    return (
        <View style={{ backgroundColor: "white", height: 765 }}>
            <Header label='Login' />
            <View style={{ paddingLeft: 24 }}>
                <Text style={styles.Heading}>Please choose what kind of account you want to make?</Text>
                <View style={checked === 'Selected' ? styles.ChipsBorder : styles.Chips}>
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
                                status={checked === 'Selected' ? 'checked' : 'unchecked'}
                                onPress={() => checked === 'Selected' ? setChecked('unSelected') : setChecked('Selected')}
                                color={'#23b7c5'}

                            />
                        </View>
                    </View>
                </View>
                <View style={checkedSecond === 'Selected' ? styles.ChipsBorderSecond : styles.Chips}>
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
                                status={checkedSecond === 'Selected' ? 'checked' : 'unchecked'}
                                onPress={() => checkedSecond === 'Selected' ? setCheckedSecond('unSelected') : setCheckedSecond('Selected')}
                                color={'#23b7c5'}
                            />
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ paddingTop: 65, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#666666", fontSize: 12, }}>
                    To switch your account please verify that’s you.
                </Text>
            </View>
            {/* <Input label='New password' /> */}
            <View style={{ padding: 15, width: "100%" }}>
                <Input textFocuscolor='white' label='Forgot Password' />
            </View>
            <View style={{ paddingTop: 15 }}>
                <Button label='Continue' color='#23b7c5' onPress={() => { navigation.navigate('loginAcount') }} />
            </View>
            <View style={{ width: 375, backgroundColor: 'white', height: 50, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Help Me ?</Text>
            </View>
        </View>
    )
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

export default SwitchAcount
