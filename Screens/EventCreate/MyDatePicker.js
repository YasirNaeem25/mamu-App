import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default function MyDatePicker({showModal,onSelectDate,onHandleCancel}) {
    
    const [date, setDate] = useState(new Date())
    const [openModal, setopenModal] = useState(showModal)

    return (
        <>
            {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
            <DatePicker
                modal
                open={showModal}
                date={date}
                onConfirm={(date) => {
                   
                    setDate(date)
                    onSelectDate && onSelectDate(date)
                }}
                onCancel={() => {
                    onHandleCancel && onHandleCancel()
                  
                    
                }}
            />
        </>
    )
}