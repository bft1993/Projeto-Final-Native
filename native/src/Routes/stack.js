import React from 'react';
import ForgotPassword from '../screens/ForgotPassword/index';
import Login from '../screens/Login/index';
import Loading from '../screens/Loading/index';
import Menu from '../screens/Menu/index';
import { Categories } from '../screens/Categories/index';
import { CategoryRegister } from '../screens/CategoryRegister/index';
import { EditCategory } from '../screens/EditCategory/index';
import { createStackNavigator } from '@react-navigation/stack';
import { UserRegister } from '../screens/UserRegister';
import { UserEdit } from '../screens/UserEdit';
import { Users } from '../screens/Users';
import { UserDelete } from '../screens/UserDelete';

const Stack = createStackNavigator();

export function StackRoutes () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
            >

            <Stack.Screen name='Loading' component={Loading} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Menu' component={Menu} />

            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='CategoryRegister' component={CategoryRegister} />
            <Stack.Screen name='EditCategory' component={EditCategory} />

            <Stack.Screen name='Users' component={Users} />
            <Stack.Screen name='UserRegister' component={UserRegister} />
            <Stack.Screen name='UserEdit' component={UserEdit} />
            <Stack.Screen name='UserDelete' component={UserDelete} />
        </Stack.Navigator>
    );
}