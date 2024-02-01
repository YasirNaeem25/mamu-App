import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView, FlatList } from 'react-native'
import Header from '../../Component/Header'
import Button from '../../Component/AuthFeild/Button'
import WebHandler from '../../Config/AxiosActions/webHandler'
const webHandler = new WebHandler()
function PaymentBalance({navigation}) {
    const [planList, setplanList] = useState()
    useEffect(() => {
        webHandler.getPlanList((resp) => {
            if (resp) {
                setplanList(resp)
            }
        }, (error) => {

        })

    }, [])
    return (
        <View>
            <Header label='Top-up your credits' />
            <View style={{ paddingTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 88, height: 88, borderRadius: 44, backgroundColor: '#f9cfe7', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <Image source={require('../../Assests/HeartPink.png')} />
                </View>
                <Text style={{ fontSize: 16, color: 'black', paddingTop: 24 }} >Plan name or some text here</Text>
                <Text style={{ fontSize: 16, color: '#666666', paddingTop: 4 }} >Some text goes here as presentation message</Text>
                <View style={{ padding: 10, display: 'flex', flexDirection: 'row' }}>
                    <FlatList
                        style={{ marginTop: 10 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        data={planList}
                        // onRefresh={() => }
                        // refreshing={}
                        // onEndReached={() => }
                        // onEndReachedThreshold={0.2}
                        renderItem={({ item, index }) => { return renderItemView(item) }}
                    // ListEmptyComponent={renderEmptyListView()}
                    />
                </View>
                <Text style={{ paddingTop: 18, color: '#666666', fontSize: 13, textDecorationLine: 'underline', }}>Terms and Conditions</Text>
            </View>
            <View style={{ paddingTop: 42,alignSelf:'center' }}>
                <Button onPress={() => { navigation.navigate('CardPayment') }}  label='Continue' color='#E01186' />
            </View>
        </View>
    )
    function renderItemView(itemData) {
        return (
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
                    <View style={{ paddingLeft: 5, position: 'relative', bottom: 8, paddingRight: 5, borderRadius: 4, width: 50, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#E01186" }}><Text style={{ fontSize: 10, color: 'white' }}>{itemData.tag?itemData.tag:'Standard'}</Text></View>
                    <Text style={{ color: 24, color: 'black', paddingTop: 15, }}>{itemData.likes}</Text>
                    <Text style={{ color: 16, color: '#666666' }}>credits</Text>
                    <Text style={{ color: 12, color: '#9e9e9e' }}>0.01 eur/cred</Text>
                    <Text style={{ color: 16, color: '#E01186' }}>{itemData.price} eur.</Text>
                </View>
            </View>
        )
    }
}

export default PaymentBalance
