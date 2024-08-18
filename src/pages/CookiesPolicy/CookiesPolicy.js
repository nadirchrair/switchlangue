import React from 'react';
import { useTranslation } from 'react-i18next';

const CookiesPolicy = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('cookiesPolicy.title')}</h1>
      <h2>{t('cookiesPolicy.website')}</h2>
      <p>{t('cookiesPolicy.date')}</p>

      <h2>{t('cookiesPolicy.mainLanguageTitle')}</h2>
      <p>{t('cookiesPolicy.mainLanguage')}</p>

      <h2>{t('cookiesPolicy.introductionTitle')}</h2>
      <p>{t('cookiesPolicy.introduction')}</p>

      <h2>{t('cookiesPolicy.detailedPurposeTitle')}</h2>

      <h3>{t('cookiesPolicy.improvingExperienceTitle')}</h3>
      <p>{t('cookiesPolicy.improvingExperience')}</p>
      <ul>
        <li>{t('cookiesPolicy.improvingExperienceList.savingPreferences')}</li>
        <li>{t('cookiesPolicy.improvingExperienceList.facilitatingNavigation')}</li>
        <li>{t('cookiesPolicy.improvingExperienceList.personalisedContent')}</li>
        <li>{t('cookiesPolicy.improvingExperienceList.personalisedInterface')}</li>
        <li>{t('cookiesPolicy.improvingExperienceList.dynamicSuggestions')}</li>
      </ul>

      <h3>{t('cookiesPolicy.optimisationTitle')}</h3>
      <p>{t('cookiesPolicy.optimisation')}</p>
      <ul>
        <li>{t('cookiesPolicy.optimisationList.performanceAnalysis')}</li>
        <li>{t('cookiesPolicy.optimisationList.abTesting')}</li>
        <li>{t('cookiesPolicy.optimisationList.infrastructureAdaptation')}</li>
        <li>{t('cookiesPolicy.optimisationList.loadBalancing')}</li>
        <li>{t('cookiesPolicy.optimisationList.caching')}</li>
        <li>{t('cookiesPolicy.optimisationList.errorDetection')}</li>
      </ul>

      <h3>{t('cookiesPolicy.targetedMarketingTitle')}</h3>
      <p>{t('cookiesPolicy.targetedMarketing')}</p>
      <ul>
        <li>{t('cookiesPolicy.targetedMarketingList.personalisedAds')}</li>
        <li>{t('cookiesPolicy.targetedMarketingList.conversionTracking')}</li>
        <li>{t('cookiesPolicy.targetedMarketingList.audienceSegmentation')}</li>
        <li>{t('cookiesPolicy.targetedMarketingList.retargeting')}</li>
        <li>{t('cookiesPolicy.targetedMarketingList.customerJourney')}</li>
        <li>{t('cookiesPolicy.targetedMarketingList.budgetOptimisation')}</li>
      </ul>

      <h3>{t('cookiesPolicy.safetyTitle')}</h3>
      <p>{t('cookiesPolicy.safety')}</p>
      <ul>
        <li>{t('cookiesPolicy.safetyList.authentication')}</li>
        <li>{t('cookiesPolicy.safetyList.fraudPrevention')}</li>
        <li>{t('cookiesPolicy.safetyList.transactionSecurity')}</li>
        <li>{t('cookiesPolicy.safetyList.sessionMonitoring')}</li>
        <li>{t('cookiesPolicy.safetyList.transactionValidation')}</li>
        <li>{t('cookiesPolicy.safetyList.encryption')}</li>
      </ul>

      <h2>{t('cookiesPolicy.typesOfCookiesTitle')}</h2>

      <h3>{t('cookiesPolicy.essentialCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.essentialCookiesList.basicFunctionality')}</li>
        <li>{t('cookiesPolicy.essentialCookiesList.sessionIntegrity')}</li>
        <li>{t('cookiesPolicy.essentialCookiesList.regulatoryCompliance')}</li>
      </ul>

      <h3>{t('cookiesPolicy.performanceCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.performanceCookiesList.dataCollection')}</li>
        <li>{t('cookiesPolicy.performanceCookiesList.performanceMeasurement')}</li>
      </ul>

      <h3>{t('cookiesPolicy.functionalityCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.functionalityCookiesList.customization')}</li>
        <li>{t('cookiesPolicy.functionalityCookiesList.contentAdaptation')}</li>
      </ul>

      <h3>{t('cookiesPolicy.marketingCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.marketingCookiesList.personalisedAdvertising')}</li>
        <li>{t('cookiesPolicy.marketingCookiesList.campaignTracking')}</li>
      </ul>

      <h3>{t('cookiesPolicy.socialNetworkCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.socialNetworkCookiesList.socialFeatures')}</li>
        <li>{t('cookiesPolicy.socialNetworkCookiesList.socialConnection')}</li>
      </ul>

      <h3>{t('cookiesPolicy.operationalCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.operationalCookiesList.miscellaneousFeatures')}</li>
        <li>{t('cookiesPolicy.operationalCookiesList.memberBenefits')}</li>
        <li>{t('cookiesPolicy.operationalCookiesList.productRecommendations')}</li>
        <li>{t('cookiesPolicy.operationalCookiesList.shoppingContinuity')}</li>
        <li>{t('cookiesPolicy.operationalCookiesList.fraudPrevention')}</li>
      </ul>

      <h3>{t('cookiesPolicy.thirdPartyCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.thirdPartyCookiesList.thirdPartyAnalysis')}</li>
        <li>{t('cookiesPolicy.thirdPartyCookiesList.externalAds')}</li>
      </ul>

      <h3>{t('cookiesPolicy.persistentCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.persistentCookiesList.longTermMemory')}</li>
        <li>{t('cookiesPolicy.persistentCookiesList.experienceStability')}</li>
      </ul>

      <h3>{t('cookiesPolicy.sessionCookies')}</h3>
      <ul>
        <li>{t('cookiesPolicy.sessionCookiesList.temporaryManagement')}</li>
        <li>{t('cookiesPolicy.sessionCookiesList.transactionalProtection')}</li>
      </ul>

      <h2>{t('cookiesPolicy.managingCookiesTitle')}</h2>
      <p>{t('cookiesPolicy.managingCookies')}</p>

      <p>{t('cookiesPolicy.importantNote')}</p>
    </div>
  );
};

export default CookiesPolicy;
