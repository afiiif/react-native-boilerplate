import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-rn';
import {
  Button, Container, H1, Text, TextLink,
} from '../../commons';
import { InputText } from '../../forms';
import useTranslation from '../../../hooks/use-translation';

export default function SignUpForm({ onSubmit }) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <Container style={tw('pt-5')}>
      <H1 style={tw('mb-6')}>{t('signup.header')}</H1>
      <InputText keyboardType="email-address" />
      <InputText secureTextEntry />
      <View style={tw('my-6')}>
        <Button
          onPress={onSubmit}
          title={t('signup.header')}
        />
      </View>
      <Text>{t('signup.paragraph')}</Text>
      <TextLink onPress={() => navigation.navigate('Login')}>
        {t('login.header')}
      </TextLink>
    </Container>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};
