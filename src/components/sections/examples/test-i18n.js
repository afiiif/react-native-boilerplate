import React from 'react';
import tw from 'tailwind-rn';
import useTranslation from '../../../hooks/use-translation';
import { Container, H2, Text } from '../../commons';

export default function TestI18n() {
  const { t } = useTranslation();

  return (
    <Container style={tw('bg-gray-200 pt-5 pb-6')}>
      <H2>i18n test:</H2>
      <Text style={tw('italic')}>{t('test')}</Text>
      <Text style={tw('italic')}>{t('some-nested-obj.with-variable', { name: 'React.js' })}</Text>
    </Container>
  );
}
