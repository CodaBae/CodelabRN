import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
// import { base_url, Toast, typeOfVar, ValidateEmail, SecureStore } from '../network';

import IndexScreen from '../index';  
import Index2Screen from '../index2'; 

import LoginScreen from '../auth/login'

import BottomTabs from './bottom';

const Stack = createNativeStackNavigator(); 
export default function MyStack({ navigation }) {
    const [currentUserID, setCurrentUserID] = useState('');
    const [loading, setloading] = useState(true);
    const [initial, setInitial] = useState('');
    
    // useEffect(() => {
    //     setloading(true);
    //     getUserDetails(); 
    // }, []);

    const getUserDetails = async () => {
        var token = await SecureStore.getItemAsync('user_token');
        var details = await SecureStore.getItemAsync('user_details');
        if (token != null && details !== null) {
            setCurrentUserID(token);
            setInitial('Tabs')
            setloading(false);
            return false;
        } else {
            setInitial('Login')
            setloading(false);
            return false;
        } 
    } 
 
    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator />
    //         </View>
    //     );
    // } 

    return (
        <Stack.Navigator  >
            <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} /> 
            <Stack.Screen name="Index2" component={Index2Screen} options={{ headerShown: false  }} /> 
            
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false  }} /> 
            
            <Stack.Screen name="Dasboard" component={BottomTabs} options={{ headerShown: false  }} />            
            
        </Stack.Navigator>
    );
}
