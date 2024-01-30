import React, { Component } from 'react';
import { showMessage } from 'react-native-flash-message';
export default class Utils extends React.Component {

    showSnackbar(title,message,type) {
        showMessage({
            message:title,
            description:message,
            type:type,
        });
    }
}
