import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CookiesPolicyen from '../src/pages/CookiesPolicy/Content/en.json';
import CookiesPolicyfr from '../src/pages/CookiesPolicy/Content/fr.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        CookiesPolicy: CookiesPolicyen },
     fr:{ CookiesPolicy: CookiesPolicyfr }

    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
