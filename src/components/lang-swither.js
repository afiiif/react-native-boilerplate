import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-rn';
import useTranslation from '../hooks/use-translation';

export default function LangSwither() {
  const { language, setLanguage } = useTranslation();
  return (
    <View style={tw('py-8 flex-row justify-end')}>
      <Icon name="language" size={18} />
      <TouchableWithoutFeedback onPress={() => setLanguage('en')}>
        <View style={tw('px-1 ml-px')}>
          <Text style={tw(language === 'en' ? 'text-blue-500' : 'text-gray-900')}>EN</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text>/</Text>
      <TouchableWithoutFeedback onPress={() => setLanguage('id')}>
        <View style={tw('px-1')}>
          <Text style={tw(language === 'id' ? 'text-blue-500' : 'text-gray-900')}>ID</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
