import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import tw from '../../../../tailwind';

export default function H1({ children, style }) {
  return (
    <Text style={[tw('text-xl font-bold text-black'), style]}>
      {children}
    </Text>
  );
}

H1.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
