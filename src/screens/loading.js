import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import tw from 'tailwind-rn';

export default function Loading() {
  return (
    <View style={tw('flex-1 justify-center')}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
}
