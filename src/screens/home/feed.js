import React from 'react';
import { ScrollView } from 'react-native';
import tw from '../../../tailwind';
import { Container, H1 } from '../../components/commons';
import FeedSection from '../../components/sections/examples/feed-section';
import TestErrorSection from '../../components/sections/examples/test-error-section';

export default function Feed() {
  return (
    <ScrollView>
      <Container style={tw('py-5')}>
        <H1>Feed</H1>
      </Container>
      <FeedSection />
      <TestErrorSection />
    </ScrollView>
  );
}
