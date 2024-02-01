import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Header from '../../Component/Header'
import SearchInput from '../../Component/AuthFeild/SearchInput'
import { TouchableOpacity } from 'react-native'

function ChoseAPlace({ navigation }) {
    const data = [
        {
            name: 'McDonald',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'KFC',
            description: '936 Kiehn Route, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Texas',
            description: '15 Sellamuttu Avenue, 03, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Havemor',
            description: '3064 Schinner Village Suite 621, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Havily',
            description: 'Dilli Haat Pitampura, Near Netaji Subhash Place Metro Station, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Donisal',
            description: 'Thorsten-Busse-Platz 4, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'LMNO',
            description: '89 Katherine Street, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'ABC',
            description: 'Avenida Mireia, 5, 8º 2º, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'XYZ',
            description: '25 Ronald Crescent, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
    ]
    return (
        <View style={{ height: '100%', backgroundColor: '#F5F5F5' }}>
            <Header label='Choose a place' />
            <View style={{ width: 360, height: 64, padding: 15, }}>
                <SearchInput textFocuscolor='#F5F5F5' label="Search" onCLose={() => {

                }} />
            </View>
            <ScrollView>
                <View style={{ padding: 16, backgroundColor: 'transparent' }}>
                    {data.map((e, i) => (
                        <View>
                            <TouchableOpacity onPress={() => { navigation.navigate('EventCreate', [{ name: e.name, description: e.description }]) }}>
                                <View style={{
                                    height: 80,
                                    borderRadius: 8,
                                    backgroundColor: "white",
                                    shadowColor: 'black',
                                    padding: 12,
                                    shadowOffset: { width: 3, height: 3 },
                                    shadowOpacity: 0.10,
                                    shadowRadius: 5, // Add shadowRadius property
                                    elevation: 5, // Add elevation for Android
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 10
                                }}>
                                    <View><Image source={require('../../Assests/Machdonals.png')} /></View>
                                    <View>
                                        <Text style={{ fontSize: 16, color: "black" }}>{e.name}</Text>
                                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
                                            <View><Image source={require('../../Assests/Location.png')} /></View>
                                            <View><Text style={{ fontSize: 12, color: "#666666", width: 200 }}>{e.description}</Text></View>

                                        </View>

                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView >
        </View >
    )
}

export default ChoseAPlace
