
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';

import Dashboard from './src/screens/dashboard';
import Profile from './src/screens/profile';

import store from './src/store/index'

const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen headerMode={'none'} name="Dashboard" component={Dashboard} />
        <Stack.Screen headerMode={'none'} name="Profile"   component={Profile} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
};
console.disableYellowBox = true
export default App;
