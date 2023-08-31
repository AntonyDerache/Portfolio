import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Fr from '../lang/fr.json';
import En from '../lang/en.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: {
      en: {
        translation: En,
      },
      fr: {
        translation: Fr,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
