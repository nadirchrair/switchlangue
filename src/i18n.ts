import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/pages/GTSC/Content/en.json';
//import fr from '../src/pages/GCU/Content/fr.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
     // fr:{ translation: fr }

    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
