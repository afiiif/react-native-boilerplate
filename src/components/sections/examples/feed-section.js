import React from 'react';
import { Container, H1 } from '../../commons';
import tw from '../../../../tailwind';

export default function FeedSection() {
  return (
    <Container style={tw('py-5')}>
      <H1>Feed</H1>
    </Container>
  );
}
