import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableWithoutFeedback } from 'react-native';
import tw from '../../../../tailwind';

export default function TextLink({ children, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[tw('text-primary'), style]}>{children}</Text>
    </TouchableWithoutFeedback>
  );
}

TextLink.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  onPress: PropTypes.func,
};
