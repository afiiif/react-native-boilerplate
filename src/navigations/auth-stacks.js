import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import SignUp from '../screens/signup';

const Stack = createStackNavigator();

export default function AuthStacks() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}
