import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonRNE } from 'react-native-elements';
import tw, { getColor } from '../../../tailwind';

export default function Button({
  title, style, onPress, size = 'md', outline, ...props
}) {
  const styleBySize = {
    sm: {
      button: 'rounded-md h-8 px-5',
      title: 'text-xxs',
    },
    md: {
      button: 'rounded-lg h-12 px-5',
      title: 'text-base',
    },
    lg: {
      button: 'rounded-lg h-14 px-5',
      title: 'text-lg',
    },
  }[size];

  const styleByType = {
    solid: {
      button: '',
      title: '',
      disabledButton: 'bg-primary bg-opacity-50',
      disabledTitle: 'text-white',
    },
    outline: {
      button: 'border-2 bg-transparent',
      title: 'text-primary',
      disabledButton: 'bg-transparent',
      disabledTitle: 'text-primary text-opacity-50',
    },
  }[outline ? 'outline' : 'solid'];

  return (
    <ButtonRNE
      buttonStyle={[tw(styleBySize.button, styleByType.button), style]}
      titleStyle={tw(styleBySize.title, styleByType.title)}
      disabledStyle={[tw(styleByType.disabledButton), { borderColor: getColor('primary opacity-50') }]}
      disabledTitleStyle={tw(styleByType.disabledTitle)}
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
  size: PropTypes.string,
  outline: PropTypes.bool,
};
