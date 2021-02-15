import React from 'react';
import { Container, Text } from '../../components/commons';

export default function TestErrorBoundary() {
  return (
    <Container>
      <Text>{(null).something}</Text>
    </Container>
  );
}
