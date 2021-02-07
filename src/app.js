import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import Home from './screens/home';

import useStore from './store';

export default function App() {
  const isInitialized = useStore((state) => state.isInitialized);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {isInitialized
            ? <Home />
            : <Text>Splash screen...</Text>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
