/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, View, Text, Alert, TouchableOpacity,
} from 'react-native';
import {
  Header, LearnMoreLinks, Colors,
  DebugInstructions, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-rn';
import useTranslation from '../hooks/use-translation';
import useStore from '../store';

const checkState = () => {
  const { language, token } = useStore.getState();
  Alert.alert('State', JSON.stringify({ language, token }));
};

export default function Home() {
  const { language, setLanguage, t } = useTranslation();
  const [token, setToken] = useStore((state) => [state.token, state.setToken]);

  return (
    <>
      <Header />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <View style={styles.body}>
        <View style={tw('py-8 px-6 border-t border-b border-blue-500')}>
          <Text>Language: {language}</Text>
          <View style={tw('flex flex-row')}>
            <TouchableOpacity style={tw('mr-2')} onPress={() => setLanguage('en')}>
              <Text style={tw(language === 'en' ? 'text-blue-500' : 'text-black')}>[ EN ]</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLanguage('id')}>
              <Text style={tw(language === 'id' ? 'text-blue-500' : 'text-black')}>[ ID ]</Text>
            </TouchableOpacity>
          </View>
          <Text style={tw('mt-4')}>Token: {token ?? '-'}</Text>
          <View style={tw('flex flex-row')}>
            <TouchableOpacity style={tw('mr-2')} onPress={() => setToken('some-token')}>
              <Text>[ Set Token ]</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setToken(null)}>
              <Text>[ Clear Token ]</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={checkState} style={tw('mt-6 self-start px-4 py-2 rounded bg-blue-500')}>
            <Text style={tw('text-white')}>Call State Outside Component</Text>
          </TouchableOpacity>
        </View>

        <View style={tw('py-8 px-6 border-b border-blue-500')}>
          <Text style={tw('font-bold')}>i18n test:</Text>
          <Text style={tw('italic')}>{t('test')}</Text>
          <Text style={tw('italic')}>{t('some-nested-obj.with-variable', { name: 'React.js' })}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
          </Text>
        </View>
        <LearnMoreLinks />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
