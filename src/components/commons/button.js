import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonRNE } from 'react-native-elements';
import tw from '../../../tailwind';

export default function Button({
  title, style, onPress, ...props
}) {
  return (
    <ButtonRNE
      buttonStyle={[tw('bg-primary rounded'), style]}
      onPress={onPress}
      title={title}
      {...props}
    />
  );
}

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};
