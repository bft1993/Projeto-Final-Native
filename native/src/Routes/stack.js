import React from 'react';
import ForgotPassword from '../screens/ForgotPassword/index';
import Login from '../screens/Login/index';
import Loading from '../screens/Loading/index';
import Menu from '../screens/Menu/index';
import {Produto} from '../screens/Produto';
import { Usuario } from '../screens/Usuario';
import { Categoria } from '../screens/Categoria';


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
            <Stack.Screen name='Menu' component={Menu} />
            <Stack.Screen name='Usuario' component={Usuario} />
            <Stack.Screen name='Categoria' component={Categoria} />
            <Stack.Screen name='Produto' component={Produto} />
            
        </Stack.Navigator>
    );
}