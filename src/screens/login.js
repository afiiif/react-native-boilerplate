import React from 'react';
import { object } from 'prop-types';
import {
  View, Text, TextInput, Button, TouchableWithoutFeedback,
} from 'react-native';
import tw from 'tailwind-rn';
import useStore from '../store';
import useTranslation from '../hooks/use-translation';
import LangSwither from '../components/lang-swither';

export default function Login({ navigation }) {
  const { t } = useTranslation();
  const setToken = useStore((state) => state.setToken);

  return (
    <View style={tw('p-5')}>
      <Text style={tw('text-lg font-bold')}>{t('login.header')}</Text>
      <TextInput style={tw('border border-blue-200 mt-3 rounded')} />
      <TextInput style={tw('border border-blue-200 mt-3 rounded')} />
      <View style={tw('my-6')}>
        <Button
          style={tw('bg-blue-500 text-white')}
          onPress={() => setToken('some-token')}
          title={t('login.header')}
        />
      </View>
      <Text>{t('login.paragraph')}</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
        <Text style={tw('text-blue-500 font-bold')}>{t('signup.header')}</Text>
      </TouchableWithoutFeedback>

      <LangSwither />
    </View>
  );
}

Login.propTypes = {
  navigation: object.isRequired,
};
