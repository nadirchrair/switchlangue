import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/pages/Our services/Content/en[1].json';
import fr from '../src/pages/Our services/Content/fr[1].json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
