/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './Src/constants/Navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};

export default App;
