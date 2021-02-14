import React from 'react';
import { Container, H1 } from '../../commons';
import tw from '../../../../tailwind';

export default function CartSection() {
  return (
    <Container style={tw('py-5')}>
      <H1>Cart</H1>
    </Container>
  );
}
