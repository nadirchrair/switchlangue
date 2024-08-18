import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div id="privacy-policy-container">
      <h1>{t('privacyPolicy.title')}</h1>
      <p>{t('privacyPolicy.intro')}</p>
      <p>{t('privacyPolicy.date')}</p>

      <section>
        <h2>{t('privacyPolicy.mainLanguage.title')}</h2>
        <p>{t('privacyPolicy.mainLanguage.text')}</p>
        <p>{t('privacyPolicy.mainLanguage.note')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.about.title')}</h2>
        <h3>{t('privacyPolicy.sections.about.subsections.mainLanguagePolicy.title')}</h3>
        <p>{t('privacyPolicy.sections.about.subsections.mainLanguagePolicy.text')}</p>

        <h3>{t('privacyPolicy.sections.about.subsections.presentation.title')}</h3>
        <p>{t('privacyPolicy.sections.about.subsections.presentation.text1')}</p>
        <p>{t('privacyPolicy.sections.about.subsections.presentation.text2')}</p>
        <p>{t('privacyPolicy.sections.about.subsections.presentation.text3')}</p>
        <p>{t('privacyPolicy.sections.about.subsections.presentation.text4')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.headOffice.title')}</h2>
        <h3>{t('privacyPolicy.sections.headOffice.algeria.title')}</h3>
        <ul>
          <li>{t('privacyPolicy.sections.headOffice.algeria.company')}</li>
          <li>{t('privacyPolicy.sections.headOffice.algeria.address')}</li>
          <li>{t('privacyPolicy.sections.headOffice.algeria.phone')}</li>
          <li><a href={t('privacyPolicy.sections.headOffice.algeria.website')} target="_blank" rel="noopener noreferrer">{t('privacyPolicy.sections.headOffice.algeria.website')}</a></li>
          <li><a href={`mailto:${t('privacyPolicy.sections.headOffice.algeria.email')}`}>{t('privacyPolicy.sections.headOffice.algeria.email')}</a></li>
        </ul>

        <h3>{t('privacyPolicy.sections.headOffice.international.title')}</h3>
        <ul>
          <li>{t('privacyPolicy.sections.headOffice.international.company')}</li>
          <li>{t('privacyPolicy.sections.headOffice.international.address')}</li>
          <li>{t('privacyPolicy.sections.headOffice.international.phone')}</li>
          <li><a href={t('privacyPolicy.sections.headOffice.international.website')} target="_blank" rel="noopener noreferrer">{t('privacyPolicy.sections.headOffice.international.website')}</a></li>
          <li><a href={`mailto:${t('privacyPolicy.sections.headOffice.international.email')}`}>{t('privacyPolicy.sections.headOffice.international.email')}</a></li>
        </ul>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.dataProcessing.title')}</h2>
        <h3>{t('privacyPolicy.sections.dataProcessing.typesCollected.title')}</h3>
        <p>{t('privacyPolicy.sections.dataProcessing.typesCollected.text')}</p>
        <ul>
          {t('privacyPolicy.sections.dataProcessing.typesCollected.categories', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('privacyPolicy.sections.dataProcessing.detailsSupplied.title')}</h3>
        <p>{t('privacyPolicy.sections.dataProcessing.detailsSupplied.text')}</p>
        <ul>
          {t('privacyPolicy.sections.dataProcessing.detailsSupplied.details', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('privacyPolicy.sections.dataProcessing.automaticallyCollected.title')}</h3>
        <p>{t('privacyPolicy.sections.dataProcessing.automaticallyCollected.text')}</p>
        <ul>
          {t('privacyPolicy.sections.dataProcessing.automaticallyCollected.details', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('privacyPolicy.sections.dataProcessing.thirdPartyInformation.title')}</h3>
        <p>{t('privacyPolicy.sections.dataProcessing.thirdPartyInformation.text')}</p>
        <ul>
          {t('privacyPolicy.sections.dataProcessing.thirdPartyInformation.details', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.disclosure.title')}</h2>
        <h3>{t('privacyPolicy.sections.disclosure.users.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.users.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.otherUsers.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.otherUsers.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.thirdPartyPartners.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.thirdPartyPartners.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.marketingPlatforms.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.marketingPlatforms.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.dueDiligence.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.dueDiligence.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.paymentProviders.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.paymentProviders.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.creditRisk.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.creditRisk.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.logisticsPartners.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.logisticsPartners.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.customsAgents.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.customsAgents.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.cloudComputing.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.cloudComputing.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.instantMessaging.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.instantMessaging.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.sdkProviders.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.sdkProviders.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.customerService.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.customerService.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.riskControl.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.riskControl.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.thirdPartyEvaluation.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.thirdPartyEvaluation.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.externalAdvisors.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.externalAdvisors.text')}</p>
        <ul>
          {t('privacyPolicy.sections.disclosure.externalAdvisors.advisors', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('privacyPolicy.sections.disclosure.anonymousData.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.anonymousData.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.thirdParties.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.thirdParties.text')}</p>

        <h3>{t('privacyPolicy.sections.disclosure.instantMessagingService.title')}</h3>
        <p>{t('privacyPolicy.sections.disclosure.instantMessagingService.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.safeguarding.title')}</h2>
        <p>{t('privacyPolicy.sections.safeguarding.intro')}</p>
        <h3>{t('privacyPolicy.sections.safeguarding.shelfLife.title')}</h3>
        <p>{t('privacyPolicy.sections.safeguarding.shelfLife.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.cookies.title')}</h2>
        <p>{t('privacyPolicy.sections.cookies.intro')}</p>
        <h3>{t('privacyPolicy.sections.cookies.types.title')}</h3>
        <ul>
          {t('privacyPolicy.sections.cookies.types.types', { returnObjects: true }).map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.text}
            </li>
          ))}
        </ul>
        <h3>{t('privacyPolicy.sections.cookies.control.title')}</h3>
        <p>{t('privacyPolicy.sections.cookies.control.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.rights.title')}</h2>
        <p>{t('privacyPolicy.sections.rights.intro')}</p>
        <ul>
          {t('privacyPolicy.sections.rights.rightsList', { returnObjects: true }).map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <h3>{t('privacyPolicy.sections.rights.complaint.title')}</h3>
        <p>{t('privacyPolicy.sections.rights.complaint.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.internationalUsers.title')}</h2>
        <p>{t('privacyPolicy.sections.internationalUsers.intro')}</p>
        <h3>{t('privacyPolicy.sections.internationalUsers.storageLocation.title')}</h3>
        <p>{t('privacyPolicy.sections.internationalUsers.storageLocation.text')}</p>
        <h3>{t('privacyPolicy.sections.internationalUsers.internationalTransfers.title')}</h3>
        <p>{t('privacyPolicy.sections.internationalUsers.internationalTransfers.text')}</p>
        <h3>{t('privacyPolicy.sections.internationalUsers.dataProtection.title')}</h3>
        <p>{t('privacyPolicy.sections.internationalUsers.dataProtection.text')}</p>
        <ul>
          {t('privacyPolicy.sections.internationalUsers.dataProtection.measures', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>{t('privacyPolicy.sections.internationalUsers.standardContractualClauses.title')}</h3>
        <p>{t('privacyPolicy.sections.internationalUsers.standardContractualClauses.text')}</p>
        <h3>{t('privacyPolicy.sections.internationalUsers.commitment.title')}</h3>
        <p>{t('privacyPolicy.sections.internationalUsers.commitment.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.minors.title')}</h2>
        <p>{t('privacyPolicy.sections.minors.intro')}</p>
        <h3>{t('privacyPolicy.sections.minors.accessibility.title')}</h3>
        <p>{t('privacyPolicy.sections.minors.accessibility.text')}</p>
        <h3>{t('privacyPolicy.sections.minors.dataCollection.title')}</h3>
        <p>{t('privacyPolicy.sections.minors.dataCollection.text')}</p>
        <h3>{t('privacyPolicy.sections.minors.salesToMinors.title')}</h3>
        <p>{t('privacyPolicy.sections.minors.salesToMinors.text')}</p>
        <h3>{t('privacyPolicy.sections.minors.parentalConsent.title')}</h3>
        <p>{t('privacyPolicy.sections.minors.parentalConsent.text')}</p>
        <h3>{t('privacyPolicy.sections.minors.contactForDeleting.title')}</h3>
        <p>{t('privacyPolicy.sections.minors.contactForDeleting.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.safetyMeasures.title')}</h2>
        <p>{t('privacyPolicy.sections.safetyMeasures.intro')}</p>
        <h3>{t('privacyPolicy.sections.safetyMeasures.technicalMeasures.title')}</h3>
        <p>{t('privacyPolicy.sections.safetyMeasures.technicalMeasures.text')}</p>
        <h3>{t('privacyPolicy.sections.safetyMeasures.accountSecurity.title')}</h3>
        <p>{t('privacyPolicy.sections.safetyMeasures.accountSecurity.text')}</p>
        <h3>{t('privacyPolicy.sections.safetyMeasures.dataTransmissionRisks.title')}</h3>
        <p>{t('privacyPolicy.sections.safetyMeasures.dataTransmissionRisks.text')}</p>
        <h3>{t('privacyPolicy.sections.safetyMeasures.commitmentToSafety.title')}</h3>
        <p>{t('privacyPolicy.sections.safetyMeasures.commitmentToSafety.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.amendments.title')}</h2>
        <p>{t('privacyPolicy.sections.amendments.intro')}</p>
        <h3>{t('privacyPolicy.sections.amendments.updatingPolicy.title')}</h3>
        <p>{t('privacyPolicy.sections.amendments.updatingPolicy.text')}</p>
        <h3>{t('privacyPolicy.sections.amendments.notificationOfChanges.title')}</h3>
        <p>{t('privacyPolicy.sections.amendments.notificationOfChanges.text')}</p>
        <h3>{t('privacyPolicy.sections.amendments.publicationOfChanges.title')}</h3>
        <p>{t('privacyPolicy.sections.amendments.publicationOfChanges.text')}</p>
        <h3>{t('privacyPolicy.sections.amendments.checkLastUpdate.title')}</h3>
        <p>{t('privacyPolicy.sections.amendments.checkLastUpdate.text')}</p>
      </section>

      <section>
        <h2>{t('privacyPolicy.sections.contactUs.title')}</h2>
        <p>{t('privacyPolicy.sections.contactUs.intro')}</p>
        <ul>
          <li><strong>{t('privacyPolicy.sections.contactUs.info.manager')}</strong></li>
          <li><strong>{t('privacyPolicy.sections.contactUs.info.company')}</strong></li>
          <li><strong>{t('privacyPolicy.sections.contactUs.info.address')}</strong></li>
          <li><strong>{t('privacyPolicy.sections.contactUs.info.phone')}</strong></li>
          <li><strong>{t('privacyPolicy.sections.contactUs.info.email')}</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
