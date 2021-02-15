import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useQuery } from 'react-query';
import {
  Button, Container, H1, Text,
} from '../../commons';
import tw from '../../../../tailwind';
import { getProductById, getProducts } from '../../../api/product';

export default function SearchSection() {
  const [productId, setProductId] = useState(1);

  const queryProducts = useQuery('products', getProducts);
  const queryProductById = useQuery(['product', { productId }], getProductById);

  return (
    <ScrollView>
      <Container style={tw('py-5')}>

        <H1>Search</H1>

        <ScrollView style={tw('bg-gray-200 p-2 mt-5 max-h-64')} nestedScrollEnabled>
          <Text style={tw('text-xxxs')}>
            {JSON.stringify({
              status: queryProducts.status,
              isFetching: queryProducts.isFetching,
              data: queryProducts.data,
            }, null, 2)}
          </Text>
        </ScrollView>

        <ScrollView style={tw('bg-gray-200 p-2 mt-5 max-h-64 mb-3')} nestedScrollEnabled>
          <Text style={tw('text-xxxs')}>
            {JSON.stringify({
              status: queryProductById.status,
              isFetching: queryProductById.isFetching,
              data: queryProductById.data?.species,
            }, null, 2)}
          </Text>
        </ScrollView>
        <View style={tw('flex-row')}>
          <Button
            style={tw('mr-3')}
            onPress={() => setProductId((prev) => prev - 1)}
            title="Prev"
            disabled={productId === 1}
          />
          <Button
            onPress={() => setProductId((prev) => prev + 1)}
            title="Next"
            disabled={productId === 100}
          />
        </View>

      </Container>
    </ScrollView>
  );
}
