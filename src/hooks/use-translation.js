import I18n from 'i18n-js';
import useStore from '../store';

import en from '../../locales/en.json';
import id from '../../locales/id.json';

I18n.fallbacks = en;
I18n.translations = {
  en,
  id,
};

const useTranslation = () => {
  const [language, setLanguage] = useStore((state) => [state.language, state.setLanguage]);
  I18n.locale = language;

  return {
    t: (val, params) => I18n.t(val, params),
    language,
    setLanguage,
  };
};

export default useTranslation;
