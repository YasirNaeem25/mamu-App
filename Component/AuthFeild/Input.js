import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <>
            {isFocused || props.value ? (
                <Text style={{
                    position: 'absolute',
                    backgroundColor: props.textFocuscolor ? props.textFocuscolor : 'white',
                    top: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 3,
                    marginLeft: 20,
                    paddingLeft: 5,
                    color: props.value ? 'grey' : "#23b7c5",
                    zIndex: 1
                }}>{props.label}</Text>
            ) : null}
            <View style={isFocused ? styles.InputMain : styles.unFocus}>
                {props.editable != false ?
                    <View>
                        <TextInput
                            editable={props.editable}
                            value={props.value}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChangeText={props.onChange}
                            placeholder={!isFocused ? props.label : null}
                            style={styles.input}
                        />
                    </View>
                    :
                    <View>
                        <Text

                            style={styles.input}
                        >
                            {props.value}
                        </Text>
                    </View>
                }
            </View>
            {props.validationtext ? (
                <Text style={{ fontSize: 12, paddingLeft: 12, paddingTop: 5, color: "#666666" }}>{props.validationtext}</Text>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
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
    },
    input: {
        // Additional styles for the TextInput can be added here
    },
});

export default Input;
