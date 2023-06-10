/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from './src/screens/firstScreen';
import SecondScreen from './src/screens/secondScreen';
import ThirdScreen from './src/screens/thirdScreen';

export type RootStackParamList = {
  firstScreen: undefined;
  secondScreen: undefined;
  thirdScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          contentStyle:{
            backgroundColor: '#FFFFFF',
          },
          headerShown: false,
        }}>
      <Stack.Screen
      name="firstScreen"
      component={FirstScreen}
      />
      <Stack.Screen
      name="secondScreen"
      component={SecondScreen}
      />
      <Stack.Screen
      name="thirdScreen"
      component={ThirdScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
