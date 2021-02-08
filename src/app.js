import React from 'react';
import {
  SafeAreaView, StatusBar, ActivityIndicator, View,
} from 'react-native';
import tw from 'tailwind-rn';
import Navigations from './navigations';

import useStore from './store';

export default function App() {
  const isInitialized = useStore((state) => state.isInitialized);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={tw('flex-1')}>
        {isInitialized
          ? <Navigations />
          : (
            <View style={tw('flex-1 justify-center')}>
              <ActivityIndicator size="large" color="tomato" />
            </View>
          )}
      </SafeAreaView>
    </>
  );
}
