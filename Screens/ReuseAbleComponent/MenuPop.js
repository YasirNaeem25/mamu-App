import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Feather"
import AntDesign from 'react-native-vector-icons/MaterialIcons';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';
export default function Menupopup({ triggerIcon, Menuoptions, triggerClick, Optionstyle, iconSize, triggerStyle, customeTrigerView }) {
    return (
        <Menu
            // renderer={renderers.Popover}
            rendererProps={{
                anchorStyle: {
                    backgroundColor: 'grey',
                }
            }}>
            <MenuTrigger style={{ padding: 20, paddingLeft: 5, ...triggerStyle,marginTop:-12 }}>
                {customeTrigerView && customeTrigerView}
                {!customeTrigerView &&
                    <Icon name={triggerIcon ? triggerIcon : "more-vertical"} size={iconSize ? iconSize :20} color={'#000'} />
                }
            </MenuTrigger>
            <MenuOptions customStyles={{
                optionsContainer: {
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 40,

                }
            }}>
                {Menuoptions.map((item, index) => {
                    return (
                        <MenuOption key={index} style={{ justifyContent: "center", paddingVertical: 5, paddingHorizontal: 7 }} onSelect={() => { triggerClick(item.value ? item.value : item.name) }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                {item.icon ? item.icon == 'music-video' ?
                                    <AntDesign name={item.icon} size={iconSize ? iconSize : 20} color={'#000'} /> :
                                    <Icon name={item.icon} size={iconSize ? iconSize : 20} color={'#000'} />
                                    : null}<Text style={[{ fontSize: 16, color: '#000', marginLeft: 15, ...Optionstyle }]}> {item.name}</Text></View>
                        </MenuOption>
                    )
                })}
            </MenuOptions>
        </Menu>
    )
}

