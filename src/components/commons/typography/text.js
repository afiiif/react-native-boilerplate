import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextRN } from 'react-native';
import tw from 'tailwind-rn';

export default function Text({ children, style }) {
  return (
    <TextRN style={[tw('text-gray-900'), style]}>
      {children}
    </TextRN>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
