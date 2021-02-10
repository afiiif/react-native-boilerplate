import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/home/feed';
import ProductDetail from '../screens/home/product-detail';

const Stack = createStackNavigator();

export default function HomeStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}
