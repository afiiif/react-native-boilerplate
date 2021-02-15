import React from 'react';
import PropTypes from 'prop-types';
import tw from '../../tailwind';
import {
  Button, Container, H1, Text,
} from '../components/commons';

export default function BaseErrorBoundary({ error, resetError }) {
  return (
    <Container style={tw('pt-5 pb-12 flex-1 justify-center')}>
      <H1>Ooops... Something went wrong!</H1>
      <Text style={tw('pt-5 pb-8')}>{error.toString()}</Text>
      <Button
        title="Try Again"
        onPress={resetError}
      />
    </Container>
  );
}

BaseErrorBoundary.propTypes = {
  error: PropTypes.object,
  resetError: PropTypes.func,
};
