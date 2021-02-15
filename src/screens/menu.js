import React from 'react';
import { View } from 'react-native';
import tw from '../../tailwind';
import LangSwither from '../components/sections/lang-swither';
import { Container, H1 } from '../components/commons';
import TestI18n from '../components/sections/examples/test-i18n';
import TestLogout from '../components/sections/examples/test-logout';
import TestError from '../components/sections/examples/test-error';

export default function Menu() {
  return (
    <>
      <Container style={tw('py-5')}>
        <H1>Menu</H1>
      </Container>
      <TestI18n />
      <View style={tw('pt-8 pb-7')}>
        <TestLogout />
      </View>
      <View style={tw('pt-3 pb-7')}>
        <TestError />
      </View>
      <LangSwither />
    </>
  );
}
