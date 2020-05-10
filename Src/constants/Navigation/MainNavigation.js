import React, { useContext } from 'react';
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
import { AuthContext } from '../AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../Screens/Auth/Login';
import Signup from '../../Screens/Auth/SignUp';

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

function MainDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Root" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Root" component={RootStackNavigator} />
        </Drawer.Navigator>
    );
}

const MainStack = createStackNavigator();

export default function MainNavigator() {
    const context = useContext(AuthContext);
    const isUserSignin = context.isSignin;

    return (
        <NavigationContainer>
            {
                (!isUserSignin) ?
                    <MainStack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <MainStack.Screen name="Login" component={Login} />
                        <MainStack.Screen name="Signup" component={Signup} />
                    </MainStack.Navigator>
                    :
                    <MainStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <MainStack.Screen name="App" component={MainDrawer} />
                </MainStack.Navigator>
            }
        </NavigationContainer>
    );
}