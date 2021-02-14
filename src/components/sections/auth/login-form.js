import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTranslation from '../../../hooks/use-translation';
import {
  Button, Container, H1, Text, TextLink,
} from '../../commons';
import { InputText } from '../../forms';
import tw from '../../../../tailwind';

export default function LoginForm({ onSubmit }) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <Container style={tw('pt-5')}>
      <H1 style={tw('mb-6')}>{t('login.header')}</H1>
      <InputText keyboardType="email-address" />
      <InputText secureTextEntry />
      <View style={tw('my-6')}>
        <Button
          onPress={onSubmit}
          title={t('login.header')}
        />
      </View>
      <Text>{t('login.paragraph')}</Text>
      <TextLink onPress={() => navigation.navigate('SignUp')}>
        {t('signup.header')}
      </TextLink>
    </Container>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
