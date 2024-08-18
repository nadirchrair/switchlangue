import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/pages/CookiesPolicy/Content/en.json';
import fr from '../src/pages/CookiesPolicy/Content/fr.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
     fr:{ translation: fr }

    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
