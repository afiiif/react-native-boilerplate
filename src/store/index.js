import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import shallow from 'zustand/shallow';
import { parseJSONWithFallback } from '../utils/json';

// Create store
const useStore = create((set) => ({
  isInitialized: false,
  language: 'en',
  setLanguage: (language) => set({ language }),
  token: null,
  setToken: (token) => set({ token }),
}));

// Save state to storage if value updated
['language', 'token'].forEach((key) => {
  useStore.subscribe(
    (current, prev) => {
      if (prev.isInitialized) {
        AsyncStorage.setItem(key, JSON.stringify(current.value));
      }
    },
    (state) => ({ isInitialized: state.isInitialized, value: state[key] }), shallow,
  );
});

// Set initial value from storage
AsyncStorage.multiGet(['language', 'token'])
  .then(([[, language], [, token]]) => {
    console.log({ language, token });

    if (language) useStore.setState({ language: parseJSONWithFallback(language) });
    if (token) useStore.setState({ token: parseJSONWithFallback(token) });

    useStore.setState({ isInitialized: true });
  });

export default useStore;
