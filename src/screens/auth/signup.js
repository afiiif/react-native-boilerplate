import React from 'react';
import useStore from '../../store';
import LangSwither from '../../components/sections/lang-swither';
import SignUpForm from '../../components/sections/auth/signup-form';

export default function Login() {
  const setToken = useStore((state) => state.setToken);

  return (
    <>
      <SignUpForm onSubmit={() => setToken('some-token')} />
      <LangSwither />
    </>
  );
}
