import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../Component/Header'
import Input from '../../Component/AuthFeild/Input'
import Button from '../../Component/AuthFeild/Button'
import MyDatePicker from './MyDatePicker'


function EventCreate({ navigation, route }) {
    const receivedData = route.params;
    const [eventname,seteventname]=useState(null)
    const [startDate,setstartDate]=useState(null)
    const [endDate,setendDate]=useState(null)
    return (

        <ScrollView>
            <Header label='Create New Event' />
            <View style={{ backgroundColor: '#F5F5F5' }}>

                <ScrollView>
                    <View style={{ padding: 24, }}>
                        <Text style={{ color: "#333", fontSize: 20, }}>Create New Event</Text>
                        <View style={{ paddingTop: 20 }}>
                            {/* <Input label='Event Name' validationtext='Choose cool name for your event!' textFocuscolor='#F5F5F5' /> */}
                            <Input value={eventname} label='Event Name' onChange={(text) => { seteventname(text) }}textFocuscolor='#F5F5F5' validationtext='Choose cool name for your event!' />

                        </View>
                        <TouchableOpacity onPress={()=>{console.log("runnn")}} style={{ paddingTop: 20 }}>
                            {/* <MyDatePicker/> */}
                            <Input  label='Start Date and Time' validationtext='Set when event will start' textFocuscolor='#F5F5F5' />
                        </TouchableOpacity>
                        <View style={{ paddingTop: 20 }}>
                            <Input label='End Date and Time' validationtext='Set when event will start' textFocuscolor='#F5F5F5' />
                            <View><Text style={{ fontSize: 13, color: "#7398FA", paddingTop: 7 }}> + End Date and Time</Text></View>
                        </View>
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
                        <View style={{ paddingTop: 20 }}>
                            <Input label='Add external link' textFocuscolor='#F5F5F5' validationtext='Add an external link for people to join your event.' />
                        </View>
                    </View>
                </ScrollView>
            </View >
            <View style={{
                width: 360, height: 90, backgroundColor: "white",
                position: 'relative', bottom: 0,
            }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                    <View style={{ width: 75, height: 2, backgroundColor: "#26C5D5" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                    <View style={{ width: 75, height: 2, backgroundColor: "#CCCCCC" }}></View>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Button color='#26C5D5' label='next' onPress={() => { navigation.navigate('EditDescription') }} />
                </View>
            </View>
        </ScrollView >
    )
}

export default EventCreate
