import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import tw from 'tailwind-rn';

export default function H2({ children, style }) {
  return (
    <Text style={[tw('text-base font-bold text-gray-700'), style]}>
      {children}
    </Text>
  );
}

H2.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
