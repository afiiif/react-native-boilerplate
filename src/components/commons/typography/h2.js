import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import tw from '../../../../tailwind';

export default function H2({ children, style }) {
  return (
    <Text style={[tw('text-base font-bold text-black'), style]}>
      {children}
    </Text>
  );
}

H2.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
