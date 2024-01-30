import React, { Component } from 'react';
import { showMessage } from 'react-native-flash-message';
export default class Utils extends React.Component {

    showSnackbar(title, message, type) {
        showMessage({
            message: title,
            description: message,
            type: type,
        });
    }
    dateFormat(date) {
        // Parse the input date string
        const parsedDate = new Date(date);
        // Format the date as "YYYY-MM-DD"
        const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}-${parsedDate.getDate().toString().padStart(2, '0')}`;
        // Format the date and time as "Day Name, YYYY-MM-DD HH:mm"
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
        const formattedDateTime = parsedDate.toLocaleString('en-US', options);
        return { formattedDate, formattedDateTime }

    }
    formatDate(inputDate) {
        const months = {
            January: '01',
            February: '02',
            March: '03',
            April: '04',
            May: '05',
            June: '06',
            July: '07',
            August: '08',
            September: '09',
            October: '10',
            November: '11',
            December: '12'
        };

        const [, monthStr, day, year, hour, minute] = inputDate.match(/(\w+), (\w+) (\d+), (\d+), (\d+):(\d+)/) || [];

        if (!monthStr) {
            console.error('Invalid date format');
            return null;
        }

        const month = months[monthStr];

        return `${year}-${month}-${day} ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    }
}
