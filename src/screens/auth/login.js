import React from 'react';
import useStore from '../../store';
import LangSwither from '../../components/sections/lang-swither';
import LoginForm from '../../components/sections/auth/login-form';

export default function Login() {
  const setToken = useStore((state) => state.setToken);

  return (
    <>
      <LoginForm onSubmit={() => setToken('some-token')} />
      <LangSwither />
    </>
  );
}
