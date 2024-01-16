import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

function Button(props) {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    display: "flex",
                    flexDirection: 'column',
                    marginTop: 13,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 320,
                    height: 55,
                    // margin: 'auto',
                    marginLeft: 17,
                    alignSelf: "stretch",
                    backgroundColor: props.color,
                    borderRadius: 5,

                }}>
                    <Text style={{
                        color: "white",
                        fontSize: 18
                    }}>
                        {props.label}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Button
