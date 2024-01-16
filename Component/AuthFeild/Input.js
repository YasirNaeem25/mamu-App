import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

function Input(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    return (
        <>
            {isFocused ? <Text style={{
                position: 'absolute', backgroundColor: props.textFocuscolor ? props.textFocuscolor : 'white', top: 10, paddingLeft: 5, paddingRight: 5,
                paddingBottom: 3, marginLeft: 20, paddingLeft: 5, color: "#23b7c5", zIndex: 1
            }} >{props.label}</Text> : null}
            <View style={isFocused ? style.InputMain : style.unFocus}>
                <View>
                    <TextInput onFocus={handleFocus}
                        onBlur={handleBlur} onChange={props.onChange} placeholder={!isFocused ? props.label : null} />
                </View>
            </View>
            {props.validationtext ? <Text style={{ fontSize: 12, paddingLeft: 12, paddingTop: 5, color: "#666666" }}>{props.validationtext}</Text> : null}
        </>
    )
}
const style = StyleSheet.create({
    InputMain: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#23b7c5',
        padding: 12,
    },
    unFocus: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        padding: 12,
    }

})
export default Input
