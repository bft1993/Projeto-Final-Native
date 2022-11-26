import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Categories } from '../screens/Categories/index';
import { CategoryRegister } from '../screens/CategoryRegister/index';
import { EditCategory } from '../screens/EditCategory/index';
import { EditProduct } from '../screens/EditProduct/index';
import ForgotPassword from '../screens/ForgotPassword/index';
import Loading from '../screens/Loading/index';
import Login from '../screens/Login/index';
import Menu from '../screens/Menu/index';
import { Product } from '../screens/Product/index';
import { ProductDetail } from '../screens/ProductDetail';
import { ProductRegister } from '../screens/ProductRegister/index';
import { UserDelete } from '../screens/UserDelete';
import { UserEdit } from '../screens/UserEdit';
import { UserRegister } from '../screens/UserRegister';
import { Users } from '../screens/Users';
import colors from "../themes/colors.js";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: `${colors.secondary}`,
          padding: 5,
        }
      }}
      tabBarOptions={{
        activeTintColor: `${colors.primary}`,
        inactiveTintColor: `${colors.buttomColor}`,
      }}
      >
        <Tab.Screen 
        name="Categories" 
        component={Categories} 
        options={{
          tabBarLabel: "home",
          tabBarIcon: () => (
            <Ionicons name="arrow-back" size={35} color={colors.primary} />
          )
        }}
        />
        
      </Tab.Navigator>
    )
  }

export function StackRoutes () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
            >

            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Loading' component={Loading} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Menu' component={Menu} />

            <Stack.Screen name='Categories' component={TabRoutes} />
            <Stack.Screen name='CategoryRegister' component={CategoryRegister} />
            <Stack.Screen name='EditCategory' component={EditCategory} />

            <Stack.Screen name='Users' component={Users} />
            <Stack.Screen name='UserRegister' component={UserRegister} />
            <Stack.Screen name='UserEdit' component={UserEdit} />

            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='ProductRegister' component={ProductRegister} />
            <Stack.Screen name='EditProduct' component={EditProduct} />
            <Stack.Screen name='UserDelete' component={UserDelete} />
            <Stack.Screen name='ProductDetails' component={ProductDetail} />
        </Stack.Navigator>
    );
}