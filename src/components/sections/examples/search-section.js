import React from 'react';
import tw from 'tailwind-rn';
import { Container, H1 } from '../../commons';

export default function SearchSection() {
  return (
    <Container style={tw('py-5')}>
      <H1>Search</H1>
    </Container>
  );
}
