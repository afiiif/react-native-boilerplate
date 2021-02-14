import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import tw, { getColor } from '../../tailwind';

export default function Loading() {
  return (
    <View style={tw('flex-1 justify-center')}>
      <ActivityIndicator size="large" color={getColor('primary')} />
    </View>
  );
}
