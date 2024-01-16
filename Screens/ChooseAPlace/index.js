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
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Texas',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Havemor',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Havily',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'Donisal',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'LMNO',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'ABC',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
            CompanyIcon: '../../Assests/Machdonals.png'
        },
        {
            name: 'XYZ',
            description: 'Königstraße 1B, 70173 Stuttgart, Germany',
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
