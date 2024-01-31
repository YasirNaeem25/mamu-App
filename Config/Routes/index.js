// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginHome from '../../Screens/HomeScreens';
import AcountCreate from '../../Screens/AcountCreate';
import CreateAcountHOme from '../../Screens/HomeCreateAcount';
import AcountCreateOPtion from '../../Screens/CreateAcountLoginANdSIgnup';
import LoginAndAcountCreateHome from '../../Screens/CreateAcountHome';
import CreateAcount from '../../Screens/CreateAcount';
import LoginHomeScreen from '../../Screens/LoginHome';
import Login from '../../Screens/Login';
import HomeLogin from '../../Screens/LoginHome';
import ForgetPassword from '../../Screens/forgotpassword';
import ForgetPasswordValidation from '../../Screens/ForgetPassWordValidation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from '../../Screens/Home/Events';
import Profile from '../../Screens/Home/Profile';
import Vote from '../../Screens/Home/Vote';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditUserName from '../../Screens/EditUserName';
import ChangeEmail from '../../Screens/ChangeEmail';
import ChangePassword from '../../Screens/ChangePassword';
import PaymentBalance from '../../Screens/Top-Your-Credit';
import SwitchAcount from '../../Screens/SwitchToAcount';
import AddEvent from '../../Screens/AddEvents';
import EventCreate from '../../Screens/EventCreate';
import ChoseAPlace from '../../Screens/ChooseAPlace';
import EditDescriptionAndImage from '../../Screens/EditImageAndDescription';
import AddTopPlayList from '../../Screens/AddTopPlayList';
import CreatedEvent from '../../Screens/CreatedEvent';
import OtpVerification from '../../Screens/forgotpassword/otpVerification';
import EventData from '../../Screens/Home/Events/EventData';
import EventList from '../../Screens/AddEvents/EventList';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function BottomTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'EventList') {
                    iconName = focused
                        ? "musical-notes"
                        : 'musical-notes-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                } else if (route.name === 'Vote') {
                    iconName = focused ? 'heart' : 'heart-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#E01186',
            tabBarInactiveTintColor: '#666666',
        })}>
            {/* <Tab.Screen options={{
                headerShown: false
            }} name="Event" component={Event} /> */}
            <Tab.Screen options={{
                headerShown: false
            }} name="EventList" component={EventList} />



            <Tab.Screen options={{
                headerShown: false
            }} name="Vote" component={Vote} />

            <Tab.Screen options={{
                headerShown: false
            }} name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}
function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            {/* <Stack.Screen options={{
                    headerShown: false
                }} name="EventData" component={EventData} /> */}
                {/* <Stack.Screen options={{
                    headerShown: false
                }} name="addEvent" component={AddEvent} /> */}
                     <Stack.Screen options={{
                    headerShown: false
                }} name="HomeScreen" component={BottomTab} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="login" component={LoginHome} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="addEvent" component={AddEvent} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="playlist" component={AddTopPlayList} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="EditUserNames" component={EditUserName} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="CreatedEvent" component={CreatedEvent} />
                {/* <Stack.Screen options={{
                    headerShown: false
                }} name="HomeScreen" component={BottomTab} /> */}
                <Stack.Screen options={{
                    headerShown: false
                }} name="payment" component={PaymentBalance} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="EditPassword" component={ChangePassword} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="EditEmailAdress" component={ChangeEmail} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="SwitchAcount" component={SwitchAcount} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="acountcreate" component={AcountCreate} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="AcountCreateHome" component={CreateAcountHOme} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="optionAcount" component={AcountCreateOPtion} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="PlaceChoose" component={ChoseAPlace} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="loginAndCreateAcountHome" component={LoginAndAcountCreateHome} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="CreateAcount" component={CreateAcount} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="LoginHome" component={HomeLogin} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="loginAcount" component={Login} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="forgetPassword" component={ForgetPassword} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="OtpVerification" component={OtpVerification} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="forgetPasswordValidation" component={ForgetPasswordValidation} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="EventCreate" component={EventCreate} />

                <Stack.Screen options={{
                    headerShown: false
                }} name="EditDescription" component={EditDescriptionAndImage} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="EventData" component={EventData} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;