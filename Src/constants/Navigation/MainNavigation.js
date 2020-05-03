import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import SettingStack from './SettingStack';
import { Icon } from 'react-native-elements';
import DrawerContent from '../../Screens/Drawer/Drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Dummy1 from '../../Screens/dummy/Dummy1';
import Dummy2 from '../../Screens/dummy/Dummy2';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'settings' : 'settings';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} type="materialcommunity" size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
            <Tab.Screen name="Setting" component={SettingStack} />
        </Tab.Navigator>
    );
}


const RootStack = createStackNavigator();

function RootStackNavigator() {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <RootStack.Screen name="Tab" component={BottomTab} />
            <RootStack.Screen name="Dummy1" component={Dummy1} />
            <RootStack.Screen name="Dummy2" component={Dummy2} />
        </RootStack.Navigator>
    );
}


const Drawer = createDrawerNavigator();

export default function MainDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Root" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Root" component={RootStackNavigator} />
        </Drawer.Navigator>
    );
}