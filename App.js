/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import 'react-native-gesture-handler';
import { AuthProvider } from './Src/constants/AuthContext';
import MainNavigator from './Src/constants/Navigation/MainNavigation';

const App = () => {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>  
  );
};

export default App;
