import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useStore from '../store';

import AppTabs from './app-tabs';
import AuthStacks from './auth-stacks';

export default function Navigations() {
  const token = useStore((state) => state.token);

  return (
    <NavigationContainer>
      {token
        ? <AppTabs />
        : <AuthStacks />}
    </NavigationContainer>
  );
}
