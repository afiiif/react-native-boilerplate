import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import tw from '../../../../tailwind';
import { SENTRY_DSN } from '../../../config';
import {
  Button, Container, H2, Text,
} from '../../commons';

export default function TestError() {
  const navigation = useNavigation();

  const onPress = () => {
    throw new Error('Sentry error test..');
  };

  return (
    <Container style={tw('pt-6 pb-10')}>
      <H2 style={tw('pb-3')}>Test Error</H2>
      <Text style={tw('text-xxs')}>SENTRY_DSN: {SENTRY_DSN}</Text>
      <View style={tw('pb-3')} />
      <Button
        title="Test Throw Error"
        onPress={onPress}
      />
      <View style={tw('pb-2')} />
      <Button
        title="Test Error Boundary"
        onPress={() => navigation.navigate('TestErrorBoundary')}
      />
    </Container>
  );
}
