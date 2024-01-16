import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
function PaymentBalance() {
    const data = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        },

    ]
    return (
        <View>
            <Header label='Top-up your credits' />
            <View style={{ paddingTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 88, height: 88, borderRadius: 44, backgroundColor: '#f9cfe7', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <Image source={require('../../Assests/HeartPink.png')} />
                </View>
                <Text style={{ fontSize: 16, color: 'black', paddingTop: 24 }} >Plan name or some text here</Text>
                <Text style={{ fontSize: 16, color: '#666666', paddingTop: 4 }} >Some text goes here as presentation message</Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 32, flexDirection: 'row', gap: 4 }}>
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#E01186' }}></View>
                    <View style={{ width: 8, height: 8, borderRadius: 4, borderColor: '#E01186', borderWidth: 1 }}></View>
                    <View style={{ width: 8, height: 8, borderRadius: 4, borderColor: '#E01186', borderWidth: 1 }}></View>

                </View>
                <View style={{ padding: 10, display: 'flex', flexDirection: 'row' }}>
                    <ScrollView horizontal={true}>
                        <View style={{ display: 'flex', marginRight: 10, paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                width: 104,
                                height: 136,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                borderColor: "#E01186",
                                borderWidth: 2,
                                display: 'flex',
                                // justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{ paddingLeft: 5, position: 'relative', bottom: 8, paddingRight: 5, borderRadius: 4, width: 50, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#E01186" }}><Text style={{ fontSize: 10, color: 'white' }}>popular</Text></View>
                                <Text style={{ color: 24, color: 'black', paddingTop: 15, }}>550</Text>
                                <Text style={{ color: 16, color: '#666666' }}>credits</Text>
                                <Text style={{ color: 12, color: '#9e9e9e' }}>0.01 eur/cred</Text>
                                <Text style={{ color: 16, color: '#E01186' }}>199.99eur.</Text>



                            </View>
                        </View>
                        <View style={{ display: 'flex', marginRight: 10, paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                width: 104,
                                height: 136,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                borderColor: "#E01186",
                                borderWidth: 2,
                                display: 'flex',
                                // justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{ paddingLeft: 5, position: 'relative', bottom: 8, paddingRight: 5, borderRadius: 4, width: 50, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#E01186" }}><Text style={{ fontSize: 10, color: 'white' }}>popular</Text></View>
                                <Text style={{ color: 24, color: 'black', paddingTop: 15, }}>550</Text>
                                <Text style={{ color: 16, color: '#666666' }}>credits</Text>
                                <Text style={{ color: 12, color: '#9e9e9e' }}>0.01 eur/cred</Text>
                                <Text style={{ color: 16, color: '#E01186' }}>199.99eur.</Text>



                            </View>
                        </View>
                        <View style={{ display: 'flex', marginRight: 10, paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                width: 104,
                                height: 136,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                borderColor: "#E01186",
                                borderWidth: 2,
                                display: 'flex',
                                // justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{ paddingLeft: 5, position: 'relative', bottom: 8, paddingRight: 5, borderRadius: 4, width: 50, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#E01186" }}><Text style={{ fontSize: 10, color: 'white' }}>popular</Text></View>
                                <Text style={{ color: 24, color: 'black', paddingTop: 15, }}>550</Text>
                                <Text style={{ color: 16, color: '#666666' }}>credits</Text>
                                <Text style={{ color: 12, color: '#9e9e9e' }}>0.01 eur/cred</Text>
                                <Text style={{ color: 16, color: '#E01186' }}>199.99eur.</Text>



                            </View>
                        </View>
                        <View style={{ display: 'flex', marginRight: 10, paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                width: 104,
                                height: 136,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                borderColor: "#E01186",
                                borderWidth: 2,
                                display: 'flex',
                                // justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{ paddingLeft: 5, position: 'relative', bottom: 8, paddingRight: 5, borderRadius: 4, width: 50, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#E01186" }}><Text style={{ fontSize: 10, color: 'white' }}>popular</Text></View>
                                <Text style={{ color: 24, color: 'black', paddingTop: 15, }}>550</Text>
                                <Text style={{ color: 16, color: '#666666' }}>credits</Text>
                                <Text style={{ color: 12, color: '#9e9e9e' }}>0.01 eur/cred</Text>
                                <Text style={{ color: 16, color: '#E01186' }}>199.99eur.</Text>



                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Text style={{ paddingTop: 18, color: '#666666', fontSize: 13, textDecorationLine: 'underline', }}>Terms and Conditions</Text>
            </View>
            <View style={{ paddingTop: 42, }}>
                <Button label='Continue' color='#E01186' />
            </View>
        </View>
    )
}

export default PaymentBalance
