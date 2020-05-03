import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/TabScreens/Home';
import HomeDetails from '../../Screens/TabScreens/HomeDetail';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeDetails" component={HomeDetails} />
        </Stack.Navigator>
    );
}

export default HomeStack;