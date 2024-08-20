import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CookiesPolicyen from '../src/pages/CookiesPolicy/Content/en.json';
import CookiesPolicyfr from '../src/pages/CookiesPolicy/Content/fr.json';
import VoyageDaffaireen from '../src/pages/VoyageDaffaire/Content/en.json';
import VoyageDaffairefr from '../src/pages/VoyageDaffaire/Content/fr.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        CookiesPolicy: CookiesPolicyen, 
        VoyageDaffaire:VoyageDaffaireen,
      },
     fr:{ CookiesPolicy: CookiesPolicyfr ,
      VoyageDaffaire:VoyageDaffairefr,
    }

    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
