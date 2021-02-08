import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

export default function ProductDetail() {
  return (
    <View style={tw('p-5')}>
      <Text style={tw('text-lg font-bold mb-6')}>Product Detail</Text>
    </View>
  );
}
