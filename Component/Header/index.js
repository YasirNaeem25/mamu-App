import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Header(props, {  }) {
    const navigation=useNavigation()
    return (
        <SafeAreaView>
            <View style={style.Header}>
                <View style={{ }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
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
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Header: {
        width:'100%',
        backgroundColor: "white",
        // height: 65,
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
