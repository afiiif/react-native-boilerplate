import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextRN } from 'react-native';
import tw from '../../../../tailwind';

export default function Text({ children, style }) {
  return (
    <TextRN style={[tw('text-neutral-2'), style]}>
      {children}
    </TextRN>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
