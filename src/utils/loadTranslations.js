const loadTranslations = (language) => {
    const translations = {};
    const context = require.context(
      `../pages/Temacina/Content/${language}`,
      true,
      /\.json$/
    );
  
    context.keys().forEach((key) => {
      const fileName = key.replace('./', '').replace('.json', '');
      translations[fileName] = context(key);
    });
  
    return translations;
  };
  
  export default loadTranslations;
  