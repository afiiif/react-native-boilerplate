import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'tailwind-rn';

export default function BaseLayout({ children }) {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={tw('flex-1')}>
        <SafeAreaProvider>
          {children}
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node,
};
