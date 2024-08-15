import React, { useState, useEffect } from 'react';
import './Tamacina.css';
import { useTranslation } from 'react-i18next';

const Tamacina = () => {
  const { t } = useTranslation();




  return (
    <div className="container">
      <header className="header">
        <h1>{t('header.title')}</h1>
        <p>{t('header.subtitle')}</p>
        <div className="founder">
          <h2>{t('header.founder.name')}</h2>
          <p>{t('header.founder.title')}</p>
          <a href={t('header.founder.linkedin')} target="_blank" rel="noopener noreferrer">
            {t('header.founder.linkedin')}
          </a>
        </div>
      </header>

      <main className="main-content">
        <section className="introduction">
          <h2>{t('introduction.title')}</h2>
          <p>{t('introduction.content')}</p>
          <blockquote>
            {t('introduction.quote.text')}
            <footer>— {t('introduction.quote.author')}</footer>
          </blockquote>
        </section>

        <section className="mission">
          <h2>{t('mission.title')}</h2>
          <p>{t('mission.content')}</p>
          <ul>
            <li>
              <strong>{t('mission.items.title')}:</strong> {t('mission.items.description')}
            </li>
            <li>
              <strong>{t('mission.items2.title')}:</strong> {t('mission.items2.description')}
            </li>
          </ul>
        </section>

        <section className="vision">
          <h2>{t('vision.title')}</h2>
          <p>{t('vision.content')}</p>
        </section>

        <section className="cta">
          <h2>{t('cta.title')}</h2>
          <p>            {t('cta.buttons.text')}</p>
          <button onClick={() => window.location.href = '/register'}>
            {t('cta.buttons.link')}
          </button>
          <p>{t('cta.links.text')}</p>
          <a href="/contact" className="cta-link">
            {t('cta.links.href')}
          </a>
        <p>  {t('cta.links1.text')}</p>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="cta-link">
            {t('cta.links1.href')}
          </a>
         <p> {t('cta.links2.text')}</p>
          <a href="weixin://dl/chat?sid=your-wechat-id" target="_blank" rel="noopener noreferrer" className="cta-link">
            {t('cta.links2.href')}
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Temacina.Com. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Tamacina;
