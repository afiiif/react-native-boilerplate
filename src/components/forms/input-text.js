import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import tw from '../../../tailwind';

export default function InputText({ style, ...props }) {
  return (
    <TextInput
      style={[tw('border border-neutral-3 mb-3 rounded py-1 px-3'), style]}
      {...props}
    />
  );
}

InputText.propTypes = {
  style: PropTypes.object,
};
