import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import tw from '../../../tailwind';

export default function Container({ children, style }) {
  return (
    <View style={[tw('px-4'), style]}>
      {children}
    </View>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
