import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CardField, useStripe } from '@stripe/stripe-react-native';

export default function CardPayment() {

    const [validcard,setValidCard]=useState(false)
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ padding: 20 }}>

                <CardField
                    postalCodeEnabled={true}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                    }}
                    onCardChange={(cardDetails) => {
                        const isValidCard = (
                            cardDetails.complete &&
                            cardDetails.validExpiryDate === "Valid" &&
                            cardDetails.validCVC === "Valid"
                        )
                        console.log("Valid card", isValidCard)
                        setValidCard(isValidCard)
                        // handleOnPayInfoUpdate(CREDIT_CARD_PAY, isValidCard)
                    }}
                />

            </View>
            {/* <View style={{ alignSelf: 'center', backgroundColor: 'green', width:'50%',borderRadius:5}}> */}
                <TouchableOpacity style={{ alignSelf: 'center', width:'50%',backgroundColor:validcard?'#23B7C5':'#d3f0f3',borderRadius:5,padding:15}}>
                    <Text style={{fontSize:14,fontWeight:'500',alignSelf:'center',color:validcard?'#fff':'#23B7C5'}}>
                        Proceed
                    </Text>

                </TouchableOpacity>
            {/* </View> */}

        </View>
    )
}

const styles = StyleSheet.create({})