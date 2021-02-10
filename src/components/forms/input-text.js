import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import tw from 'tailwind-rn';

export default function InputText({ style, ...props }) {
  return (
    <TextInput
      style={[tw('border border-blue-300 bg-blue-50 mt-3 rounded py-1 px-3'), style]}
      {...props}
    />
  );
}

InputText.propTypes = {
  style: PropTypes.object,
};
