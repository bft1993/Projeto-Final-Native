import React from 'react';
import ForgotPassword from '../screens/ForgotPassword/index';
import Login from '../screens/Login/index';
import Loading from '../screens/Loading/index';
import Menu from '../screens/Menu/index';
// import { Product } from '../screens/Product/index';
// import { User } from '../screens/User/index';
import { Categories } from '../screens/Categories/index';
import { CategoryRegister } from '../screens/CategoryRegister/index';
import { EditCategory } from '../screens/EditCategory/index';
import { createStackNavigator } from '@react-navigation/stack';
import { UserRegister } from '../screens/UserRegister';
import { UserEdit } from '../screens/UserEdit';
import { Users } from '../screens/Users';
// import { Ionicons } from '@expo/vector-icons';
// import { TouchableHighlight } from 'react-native'; 


const Stack = createStackNavigator();
// const Left = ({onPress}) => (
//     <TouchableHighlight onPress={onPress}>
//         <Ionicons
//               name='ios-home-outline'
//               color='red'
//               size={24}
//             />
//     </TouchableHighlight>
// )
export function StackRoutes () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
            //initialRouteName= 'ForgotPassword' 
            // navigationOptions= {{
            //     header: ({goBack}) => ({
            //         left: <Left onPress={goBack} />,
            //     }),
            //     }
            // }
            >

            <Stack.Screen name='Loading' component={Loading} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Menu' component={Menu} />
            {/* <Stack.Screen name='User' component={User} />
            <Stack.Screen name='Product' component={Product} /> */}
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='CategoryRegister' component={CategoryRegister} />
            <Stack.Screen name='EditCategory' component={EditCategory} />

            <Stack.Screen name='Users' component={Users} />
            <Stack.Screen name='UserRegister' component={UserRegister} />
            <Stack.Screen name='UserEdit' component={UserEdit} />
        </Stack.Navigator>
    );
}