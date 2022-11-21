import React from 'react';
import ForgotPassword from '../screens/ForgotPassword/index';
import Login from '../screens/Login/index';
import Loading from '../screens/Loading/index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function StackRoutes () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Loading' component={Loading} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Navigator>
    );
}