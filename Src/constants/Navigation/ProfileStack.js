import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../Screens/TabScreens/Profile';
import ProfileDetails from '../../Screens/TabScreens/ProfileSetting';

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
    );
}

export default ProfileStack;