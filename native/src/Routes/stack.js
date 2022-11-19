import { createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../screens/ForgotPassword';
import Login from '../screens/Login';
import Loading from '../screens/Loading';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes () {
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name='Login' component={Login} />
            <Screen name='ForgotPassword' component={ForgotPassword} />
            <Screen name='Loading' component={Loading} />
        </Navigator>
    )
}