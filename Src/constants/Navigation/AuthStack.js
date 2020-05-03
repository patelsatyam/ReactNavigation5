import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/Auth/Login';
import Signup from '../../Screens/Auth/SignUp';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}

export default AuthStack;