import React from 'react';
import { useTranslation } from 'react-i18next';
import './OurServices.css'; // Make sure to create this CSS file for responsive styling

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div className="our-services-container">
      <h1>{t('our_services.title')}</h1>
      <ul>
        <li>{t('our_services.content.1')}</li>
        <li>{t('our_services.content.2')}</li>
        <li>{t('our_services.content.3')}</li>
        <li>{t('our_services.content.4')}</li>
      </ul>
      <h2>{t('digital_marketing_service.title')}</h2>
      <p>{t('digital_marketing_service.content')}</p>
      <ul>
        <li>{t('digital_marketing_service.packages.free')}</li>
        <li>{t('digital_marketing_service.packages.starter')}</li>
        <li>{t('digital_marketing_service.packages.silver')}</li>
        <li>{t('digital_marketing_service.packages.gold')}</li>
      </ul>
      <p>{t('digital_marketing_service.details')}</p>
      <ul>
        <li>{t('digital_marketing_service.services.1')}</li>
        <li>{t('digital_marketing_service.services.2')}</li>
        <li>{t('digital_marketing_service.services.3')}</li>
        <li>{t('digital_marketing_service.services.4')}</li>
      </ul>
      <h2>{t('advertising_and_sponsorship_service.title')}</h2>
      <p>{t('advertising_and_sponsorship_service.ad_spaces')}</p>
      <p>{t('advertising_and_sponsorship_service.ad_types')}</p>
      <h2>{t('online_sales_service.title')}</h2>
      <ul>
        <li>{t('online_sales_service.markets.1')}</li>
        <li>{t('online_sales_service.markets.2')}</li>
        <li>{t('online_sales_service.markets.3')}</li>
      </ul>
      <h2>{t('sectors.title')}</h2>
      <p>{t('sectors.description')}</p>
      <h3>{t('industry.title')}</h3>
      <p>{t('industry.description')}</p>
      <ul>
        <li>{t('industry.categories.1')}</li>
        <li>{t('industry.categories.2')}</li>
        <li>{t('industry.categories.3')}</li>
        <li>{t('industry.categories.4')}</li>
        <li>{t('industry.categories.5')}</li>
        <li>{t('industry.categories.6')}</li>
        <li>{t('industry.categories.7')}</li>
        <li>{t('industry.categories.8')}</li>
        <li>{t('industry.categories.9')}</li>
        <li>{t('industry.categories.10')}</li>
        <li>{t('industry.categories.11')}</li>
        <li>{t('industry.categories.12')}</li>
        <li>{t('industry.categories.13')}</li>
        <li>{t('industry.categories.14')}</li>
        <li>{t('industry.categories.15')}</li>
        <li>{t('industry.categories.16')}</li>

      </ul>
      <h3>{t('agriculture.title')}</h3>
      <p>{t('agriculture.description')}</p>
      <ul>
        <li>{t('agriculture.categories.1')}</li>
        <li>{t('agriculture.categories.2')}</li>
        <li>{t('agriculture.categories.3')}</li>
        <li>{t('agriculture.categories.4')}</li>
        <li>{t('agriculture.categories.5')}</li>
        <li>{t('agriculture.categories.6')}</li>
        <li>{t('agriculture.categories.7')}</li>
        <li>{t('agriculture.categories.8')}</li>
        <li>{t('agriculture.categories.9')}</li>
        <li>{t('agriculture.categories.10')}</li>
      </ul>
      <h3>{t('construction.title')}</h3>
      <p>{t('construction.description')}</p>
      <ul>
        <li>{t('construction.categories.1')}</li>
        <li>{t('construction.categories.2')}</li>
        <li>{t('construction.categories.3')}</li>
        <li>{t('construction.categories.4')}</li>
        <li>{t('construction.categories.5')}</li>
        <li>{t('construction.categories.6')}</li>
        <li>{t('construction.categories.7')}</li>
        <li>{t('construction.categories.8')}</li>
        <li>{t('construction.categories.9')}</li>
        <li>{t('construction.categories.10')}</li>
      </ul>
      <h3>{t('i_tech.title')}</h3>
      <p>{t('i_tech.description')}</p>
      <ul>
      <li>{t('i_tech.categories.1')}</li>
        <li>{t('i_tech.categories.2')}</li>
        <li>{t('i_tech.categories.3')}</li>
        <li>{t('i_tech.categories.4')}</li>
        <li>{t('i_tech.categories.5')}</li>
        <li>{t('i_tech.categories.6')}</li>
        <li>{t('i_tech.categories.7')}</li>
        <li>{t('i_tech.categories.8')}</li>
        <li>{t('i_tech.categories.9')}</li>
        <li>{t('i_tech.categories.10')}</li>
        <li>{t('i_tech.categories.11')}</li>

      </ul>
      <h2>{t('why_choose_us.title')}</h2>
      <ul>
        <li>{t('why_choose_us.reasons.1')}</li>
        <li>{t('why_choose_us.reasons.2')}</li>
        <li>{t('why_choose_us.reasons.3')}</li>
        <li>{t('why_choose_us.reasons.4')}</li>
      </ul>
      <h2>{t('values.title')}</h2>
   <p>{t('values.values')}</p>
      <h2>{t('register_and_subscribe.title')}</h2>
      <ul>
        <li>{t('register_and_subscribe.benefits.1')}</li>
        <li>{t('register_and_subscribe.benefits.2')}</li>
        <li>{t('register_and_subscribe.benefits.3')}</li>
        <li>{t('register_and_subscribe.benefits.4')}</li>
      </ul>
      <h2>{t('visiting_sellers_and_buyers.title')}</h2>
      <ul>
        <li>{t('visiting_sellers_and_buyers.benefits.1')}</li>
        <li>{t('visiting_sellers_and_buyers.benefits.2')}</li>
        <li>{t('visiting_sellers_and_buyers.benefits.3')}</li>
        <li>{t('visiting_sellers_and_buyers.benefits.4')}</li>
        <li>{t('visiting_sellers_and_buyers.benefits.5')}</li>
        <li>{t('visiting_sellers_and_buyers.benefits.6')}</li>
      </ul>
      <h2>{t('subscribed_sellers_and_buyers.title')}</h2>
      <ul>
        <li>{t('subscribed_sellers_and_buyers.benefits.1')}</li>
        <li>{t('subscribed_sellers_and_buyers.benefits.2')}</li>
      </ul>
      <p>   <h2>{t('online_sales.title')}</h2>{t('online_sales.description')} 
      </p>
<ul>
        <li>{t('online_sales.benefits.1')}</li>
        <li>{t('online_sales.benefits.2')}</li>
       </ul>
       <h2>{t('online_sales_with_payment_methods.title')}</h2>
      <p>{t('online_sales_with_payment_methods.description')}</p>
      <h3>{t('online_sales_with_payment_methods.online_sales_services.title')}</h3>
      <ul>
        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.1')}</li>
        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.2')}</li>
        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.3')}</li>
        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.4')}</li>
        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.5')}</li>
        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.6')}</li>

        <li>{t('online_sales_with_payment_methods.online_sales_services.beniefts.7')}</li>


      </ul>

      <h3>{t('global_payment_methods.title')}</h3>
      <ul>
<li>{t('global_payment_methods.methods.1')}</li>
<li>{t('global_payment_methods.methods.2')}</li>
<li>{t('global_payment_methods.methods.3')}</li>
<li>{t('global_payment_methods.methods.4')}</li>

</ul>

      <h3>{t('payment_methods_in_algeria.title')}</h3>
      <ul>
      <li>{t('payment_methods_in_algeria.methods.1')}</li>
      <li>{t('payment_methods_in_algeria.methods.2')}</li>
      <li>{t('payment_methods_in_algeria.methods.3')}</li>
      <li>{t('payment_methods_in_algeria.methods.4')}</li>
      <li>{t('payment_methods_in_algeria.methods.5')}</li>
      <li>{t('payment_methods_in_algeria.methods.6')}</li>
      <li>{t('payment_methods_in_algeria.methods.7')}</li>
      <li>{t('payment_methods_in_algeria.methods.8')}</li>

      </ul>

      <h3>{t('benefits_for_sellers.title')}</h3>
      <ul>
      <li>{t('benefits_for_sellers.benefits.1')}</li>
      <li>{t('benefits_for_sellers.benefits.2')}</li>
      <li>{t('benefits_for_sellers.benefits.3')}</li>
      <li>{t('benefits_for_sellers.benefits.4')}</li>
      <li>{t('benefits_for_sellers.benefits.5')}</li>
      <li>{t('benefits_for_sellers.benefits.6')}</li>
    
            </ul>

      <h3>{t('benefits_for_buyers.title')}</h3>
      <ul>
      <li>{t('benefits_for_buyers.benefits.1')}</li>
      <li>{t('benefits_for_buyers.benefits.2')}</li>
      <li>{t('benefits_for_buyers.benefits.3')}</li>
      <li>{t('benefits_for_buyers.benefits.4')}</li>
      <li>{t('benefits_for_buyers.benefits.5')}</li>
      <li>{t('benefits_for_buyers.benefits.6')}</li>
      <li>{t('benefits_for_buyers.benefits.7')}</li>
      <li>{t('benefits_for_buyers.benefits.8')}</li>    </ul>

      <h3>{t('join_us.title')}</h3>
      <p>{t('join_us.content')}</p>
     
    
    </div>
  );
};

export default OurServices;
