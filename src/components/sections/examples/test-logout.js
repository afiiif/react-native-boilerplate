import React from 'react';
import useStore from '../../../store';
import { Button, Container } from '../../commons';

export default function TestLogout() {
  const setToken = useStore((state) => state.setToken);

  return (
    <Container>
      <Button
        onPress={() => setToken(null)}
        title="Logout"
      />
    </Container>
  );
}
