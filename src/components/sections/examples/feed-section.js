import React from 'react';
import tw from 'tailwind-rn';
import { Container, H1 } from '../../commons';

export default function FeedSection() {
  return (
    <Container style={tw('py-5')}>
      <H1>Feed</H1>
    </Container>
  );
}
