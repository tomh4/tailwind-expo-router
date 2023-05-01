import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de/translation';
import en from './locales/en/translation';
import fr from './locales/fr/translation';
import lb from './locales/lb/translation';
const deviceLanguage = getLocales()[0].languageCode;
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: deviceLanguage,
  resources: {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr },
    lb: { translation: lb },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  cleanCode: true,
});

export default i18n;
