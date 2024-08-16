import React from 'react';
import './TermsAndConditions.css'
import { useTranslation } from 'react-i18next';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="gcu-container">
      <h1>{t('title')}</h1>
      <h2>{t('siteName')}</h2>
      <p>{t('date')}</p>

      <h3>MAIN LANGUAGE OF OUR GENERAL CONDITIONS OF USE</h3>
      <p>{t('mainLanguage')}</p>

      <h3>{t('welcomeMessage')}</h3>

      <h4>{t('sections.1.title')}</h4>

      <h5>{t('sections.1.subsections.11.title')}</h5>
      <p>
      {t('sections.1.subsections.11.content')}   </p>

      <h5>{t('sections.1.subsections.12.title')}</h5>
      <p>
      {t('sections.1.subsections.12.content')}   </p>
      <h5>{t('sections.1.subsections.13.title')}</h5>
      <p>
      {t('sections.1.subsections.13.content')}   </p>
      <h5>{t('sections.1.subsections.14.title')}</h5>
      <p>
      {t('sections.1.subsections.14.content')}   </p>
      
      <h5>{t('sections.1.subsections.15.title')}</h5>
      <p>
      {t('sections.1.subsections.15.content')}   </p>

      <h4>{t('sections.2.title')}</h4>
      <p>{t('sections.2.content')}
        </p>

      <h4>{t('sections.3.title')}</h4>
      <p>
      {t('sections.3.content')}      </p>

      <h4>{t('sections.4.title')}</h4>
      <ul>

        <li> {t('sections.4.content')} </li>
        
        <li> {t('sections.41.items')} </li>
        
        <li> {t('sections.41.items2')} </li>
      </ul>
      

      <h4>{t('sections.5.title')}</h4>
      <h5>{t('sections.5.subsections.51.title')}</h5>
      <p>
      {t('sections.5.subsections.51.content')}      </p>

      <h5>{t('sections.5.subsections.52.title')}</h5>
      <p>
      {t('sections.5.subsections.52.content')}      </p>
      <h5>{t('sections.5.subsections.53.title')}</h5>
      <p>
      {t('sections.5.subsections.53.content')}      </p>

      <h5>{t('sections.5.subsections.54.title')}</h5>
      <p>
      {t('sections.5.subsections.55.content')}      </p>
      <h5>{t('sections.5.subsections.55.title')}</h5>
      <p>
      {t('sections.5.subsections.55.content')}      </p>
      <h5>{t('sections.5.subsections.56.title')}</h5>
      <p>
      {t('sections.5.subsections.56.content')}      </p>
      <h5>{t('sections.5.subsections.57.title')}</h5>
      <p>
      {t('sections.5.subsections.57.content')}      </p>
      <h5>{t('sections.5.subsections.58.title')}</h5>
      <p>
      {t('sections.5.subsections.58.content')}      </p>
      <h5>{t('sections.5.subsections.59.title')}</h5>
      <p>
      {t('sections.5.subsections.59.content')}      </p>
</div>
  );
}

export default TermsAndConditions