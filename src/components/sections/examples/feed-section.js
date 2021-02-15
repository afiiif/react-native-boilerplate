import React from 'react';
import { View } from 'react-native';
import {
  Button, Container, H2,
} from '../../commons';
import tw from '../../../../tailwind';

export default function FeedSection() {
  return (
    <Container style={tw('pb-4')}>
      <H2>Button Component Examples</H2>

      <View style={tw('flex-row -mx-2 mt-6')}>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Small Button"
            size="sm"
          />
        </View>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Small Button"
            size="sm"
            disabled
          />
        </View>
      </View>

      <View style={tw('flex-row -mx-2 mt-4')}>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Regular Button"
          />
        </View>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Regular Button"
            disabled
          />
        </View>
      </View>

      <View style={tw('flex-row -mx-2 mt-4')}>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Large Button"
            size="lg"
          />
        </View>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Large Button"
            size="lg"
            disabled
          />
        </View>
      </View>

      <View style={tw('flex-row -mx-2 mt-4')}>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Small Button"
            size="sm"
            outline
          />
        </View>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Small Button"
            size="sm"
            outline
            disabled
          />
        </View>
      </View>

      <View style={tw('flex-row -mx-2 mt-4')}>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Regular Button"
            outline
          />
        </View>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Regular Button"
            outline
            disabled
          />
        </View>
      </View>

      <View style={tw('flex-row -mx-2 mt-4')}>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Large Button"
            size="lg"
            outline
          />
        </View>
        <View style={tw('flex-grow mx-2')}>
          <Button
            title="Large Button"
            size="lg"
            outline
            disabled
          />
        </View>
      </View>

    </Container>
  );
}
