import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from '../../Screens/TabScreens/Setting';
import SettingDetails from '../../Screens/TabScreens/SettingDetail';

const Stack = createStackNavigator();

function SettingStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="SettingDetails" component={SettingDetails} />
        </Stack.Navigator>
    );
}

export default SettingStack;