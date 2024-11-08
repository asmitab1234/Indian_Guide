//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from '../Screens/Auth/Login';
import SingUp from '../Screens/Auth/SingUp';
import Otp from '../Screens/Auth/Otp';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SingUp" component={SingUp} />
            <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
    );
};

export default AuthStack;
