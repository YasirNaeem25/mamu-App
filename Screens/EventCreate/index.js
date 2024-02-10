import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'
import MyDatePicker from './MyDatePicker'
import Utils from '../../Component/Utils'

const myUtils = new Utils()
function EventCreate({ navigation, route }) {
    const [eventName, seteventName] = useState(null);
    const receivedData = route.params;
    const [eventname, seteventname] = useState(null)
    const [startDate, setstartDate] = useState(null)
    const [endDate, setendDate] = useState(null)
    const [showDatePicker, setshowDatePicker] = useState(false)
    const [showEnddate, setshowEnddate] = useState(false)
    const [showEnddatePicker, setshowEnddatePicker] = useState(false)


    const strtDate = dateFormat(startDate).formattedDateTime
    const endingDate = dateFormat(endDate).formattedDateTime
    return (

        <ScrollView style={{ flex: 1 }}>
            <Header label='Create New Event' />
            <View style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
                <MyDatePicker
                    showModal={showDatePicker}
                    onSelectDate={(date) => {
                        setstartDate(date), setshowDatePicker(false)
                    }}
                    onHandleCancel={() => { setshowDatePicker(false) }}
                />

                <MyDatePicker
                    showModal={showEnddatePicker}
                    onSelectDate={(date) => { setendDate(date), setshowEnddatePicker(false) }}
                    onHandleCancel={() => { setshowEnddatePicker(false) }}
                />
                <ScrollView>
                    <View style={{ padding: 24, }}>
                        <Text style={{ color: "#333", fontSize: 20, }}>Create New Event</Text>
                        <View style={{ paddingTop: 20 }}>
                            {/* <Input label='Event Name' validationtext='Choose cool name for your event!' textFocuscolor='#F5F5F5' /> */}
                            <Input value={eventname} label='Event Name' onChange={(text) => { seteventname(text) }} textFocuscolor='#F5F5F5' validationtext='Choose cool name for your event!' />
                        </View>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { setshowDatePicker(true) }} style={{ paddingTop: 20 }}>
                            <Input editable={false} value={startDate ? JSON.stringify(strtDate) : "Select Date"} label='Start Date and Time' onChange={(text) => { setstartDate(text) }} textFocuscolor='#F5F5F5' validationtext='set when event will start' />
                        </TouchableOpacity>
                        {showEnddate && <TouchableOpacity activeOpacity={0.9} onPress={() => { setshowEnddatePicker(true) }} style={{ paddingTop: 20 }}>
                            <Input editable={false} value={endDate ? JSON.stringify(endingDate) : "Select Date"} label='End Date and Time' onChange={(text) => { setendDate(text) }} textFocuscolor='#F5F5F5' validationtext='set when event will End' />

                        </TouchableOpacity>}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { setshowEnddate(true) }} style={{ paddingTop: 20 }}>
                            <View><Text style={{ fontSize: 13, color: "#7398FA", paddingTop: 7 }}> + End Date and Time</Text></View>
                        </TouchableOpacity>

                        <View style={{ paddingTop: 25 }}>
                            <Text style={{ fontSize: 20, color: "black" }}>Location</Text>
                            <Text style={{ fontSize: 12, paddingTop: 4, color: "#666666" }}>Get together with people in a specific location or create online experience with an external link.</Text>
                        </View>
                        <View style={{ paddingTop: 20, }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlaceChoose') }} >
                                <Text style={{ paddingLeft: 3, paddingBottom: 3, color: "#bcbcbc" }}>Choose a place</Text>

                                <View style={{ width: '100%', borderRadius: 8, borderColor: "#bcbcbc", borderWidth: 1 }}>
                                    {receivedData ? receivedData.map((e, i) => <Text style={{ padding: 15, color: "#bcbcbc" }}>{e.name}</Text>) : <Text style={{ padding: 15, color: "#bcbcbc" }}>Choose a  Place</Text>}
                                    {/* {receivedData ? <Text style={{ padding: 15, color: "#bcbcbc" }}>{receivedData}</Text> : <Text style={{ padding: 15, color: "#bcbcbc" }}>Choose a  Place</Text>} */}

                                </View>
                            </TouchableOpacity>
                            <Text style={{ paddingTop: 4, fontSize: 12, paddingLeft: 5, color: "#666666" }}>Add a physical location for people to join your event</Text>
                        </View>
                        {/* <View style={{ paddingTop: 20 }}>
                            <Input label='Add external link' textFocuscolor='#F5F5F5' validationtext='Add an external link for people to join your event.' />
                        </View> */}
                    </View>
                </ScrollView>
            </View >
            <View style={{
                width: 360, height: 90, marginTop: 50,
                position: 'relative', bottom: 0, alignSelf: 'center'
            }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='next' onPress={() => {
                        if (!startDate && !endDate && !eventname) {
                            myUtils.showSnackbar("Error","Please fill complete Data", "danger")
                        }
                        else {
                            {
                                navigation.navigate('EditDescription', {
                                    startdate: dateFormat(startDate),
                                    enddate: dateFormat(endDate),
                                    eventName: eventname,
                                    location: receivedData[0]?.description ? receivedData[0].description : 'Königstraße 1B, 70173 Stuttgart, Germany'

                                })
                            }

                        }
                    }} />
                </View>
            </View>
        </ScrollView >
    )

    function dateFormat(date) {
        // Parse the input date string
        const parsedDate = new Date(date);
        // Format the date as "YYYY-MM-DD"
        const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}-${parsedDate.getDate().toString().padStart(2, '0')}`;
        // Format the date and time as "Day Name, YYYY-MM-DD HH:mm"
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
        const formattedDateTime = parsedDate.toLocaleString('en-US', options);
        return { formattedDate, formattedDateTime }

    }
}

export default EventCreate
