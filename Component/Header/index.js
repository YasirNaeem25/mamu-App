import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Header(props, { navigation }) {
    return (
        <View style={style.Header}>
            <View style={{ paddingTop: 10, }}>
                <TouchableOpacity onPress={() => {

                }}>
                    <Image source={require('../../Assests/BackArrow.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 10, }}>
                <Text style={style.headertitle}>{props.label ? props.label : 'Home'}</Text>
            </View>
            <View style={{ paddingTop: 10, }}>
                <Image source={require('../../Assests/Network.png')} />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    Header: {
        width: 360,
        backgroundColor: "white",
        height: 65,
        // paddingTop: 10,
        padding: 16,
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        shadowColor: 'black',
        shadowOpacity: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    headertitle: {
        color: "black",
        fontSize: 16,
    }
})
export default Header
