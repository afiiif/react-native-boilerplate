import React from 'react';
import { Container, H1 } from '../../commons';
import tw from '../../../../tailwind';

export default function SearchSection() {
  return (
    <Container style={tw('py-5')}>
      <H1>Search</H1>
    </Container>
  );
}
