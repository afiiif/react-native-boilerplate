import React from 'react';
import tw from '../../../../tailwind';
import { SENTRY_DSN } from '../../../config';
import { Button, Container, Text } from '../../commons';

export default function TestError() {
  const onPress = () => {
    throw new Error('Sentry error test..');
  };

  return (
    <Container>
      <Text style={tw('pb-2')}>SENTRY_DSN: {SENTRY_DSN}</Text>
      <Button
        title="Test Error"
        onPress={onPress}
      />
    </Container>
  );
}
