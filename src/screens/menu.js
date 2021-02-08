import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-rn';
import useStore from '../store';
import useTranslation from '../hooks/use-translation';
import LangSwither from '../components/lang-swither';

export default function Menu() {
  const { t } = useTranslation();
  const setToken = useStore((state) => state.setToken);

  return (
    <View style={tw('p-5')}>
      <Text style={tw('text-lg font-bold mb-6')}>Menu</Text>

      <View style={tw('pb-8')}>
        <Text style={tw('font-bold')}>i18n test:</Text>
        <Text style={tw('italic')}>{t('test')}</Text>
        <Text style={tw('italic')}>{t('some-nested-obj.with-variable', { name: 'React.js' })}</Text>
      </View>

      <Button
        style={tw('bg-blue-500 text-white')}
        onPress={() => setToken(null)}
        title="Logout"
      />

      <LangSwither />
    </View>
  );
}
