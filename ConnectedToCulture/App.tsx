/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Signin from './screens/authentication/Signin';
import { CreateAccount, Login, Welcome } from './screens';

function App(): React.JSX.Element {

  const Stack=createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}} />
      <Stack.Screen name='Signin' component={Signin} options={{headerShown:false}} />
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;
