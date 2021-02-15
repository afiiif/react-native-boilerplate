import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import tw, { getColor } from '../../../tailwind';

const theme = {
  colors: {
    primary: getColor('primary'),
  },
};

export default function BaseLayout({ children }) {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={tw('flex-1')}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node,
};
