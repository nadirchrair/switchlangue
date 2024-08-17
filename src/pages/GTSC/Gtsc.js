import React from 'react';
import { useTranslation } from 'react-i18next';
import './GTSC.css';

const Gtsc = () => {
  const { t } = useTranslation();

  // Utility function to handle either strings or arrays from t()
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    }
    return <p>{content}</p>;
  };

  return (
    <div className="gtsc-container">
      <h1>{t('gtsc.title')}</h1>
      <p><strong>{t('gtsc.company')}</strong></p>
      <p><strong>{t('gtsc.date')}</strong></p>
      <p><strong>{t('gtsc.main_language')}</strong></p>

      <section>
        <h2>{t('gtsc.welcome.title')}</h2>
        {renderContent(t('gtsc.welcome.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.marketplace_sector.title')}</h2>
        <p>{t('gtsc.marketplace_sector.content')}</p>
        <ul>
          <li>{t('gtsc.marketplace_sector.categories.industry')}</li>
          <li>{t('gtsc.marketplace_sector.categories.agriculture')}</li>
          <li>{t('gtsc.marketplace_sector.categories.construction')}</li>
          <li>{t('gtsc.marketplace_sector.categories.iTech')}</li>
        </ul>
      </section>

      <section>
        <h2>{t('gtsc.overview_services.title')}</h2>
        {renderContent(t('gtsc.overview_services.content', { returnObjects: true }))}

        <h3>{t('gtsc.overview_services.digital_marketing.title')}</h3>
        {renderContent(t('gtsc.overview_services.digital_marketing.content', { returnObjects: true }))}

        <h3>{t('gtsc.overview_services.advertising_sponsorship.title')}</h3>
        <h4>{t('gtsc.overview_services.advertising_sponsorship.sections.home_page.title')}</h4>
        {renderContent(t('gtsc.overview_services.advertising_sponsorship.sections.home_page.content', { returnObjects: true }))}

        <h4>{t('gtsc.overview_services.advertising_sponsorship.sections.search_results.title')}</h4>
        {renderContent(t('gtsc.overview_services.advertising_sponsorship.sections.search_results.content', { returnObjects: true }))}

        <h4>{t('gtsc.overview_services.advertising_sponsorship.sections.category_pages.title')}</h4>
        {renderContent(t('gtsc.overview_services.advertising_sponsorship.sections.category_pages.content', { returnObjects: true }))}

        <h4>{t('gtsc.overview_services.advertising_sponsorship.sections.product_detail_pages.title')}</h4>
        {renderContent(t('gtsc.overview_services.advertising_sponsorship.sections.product_detail_pages.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.overview_services.intra_company_sales.title')}</h2>
        {renderContent(t('gtsc.overview_services.intra_company_sales.content', { returnObjects: true }))}

        <h3>{t('gtsc.overview_services.intra_company_sales.algerian_b2b.title')}</h3>
        {renderContent(t('gtsc.overview_services.intra_company_sales.algerian_b2b.content', { returnObjects: true }))}

        <h3>{t('gtsc.overview_services.intra_company_sales.worldwide_b2b.title')}</h3>
        {renderContent(t('gtsc.overview_services.intra_company_sales.worldwide_b2b.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.payments_services.title')}</h2>

        <h3>{t('gtsc.payments_services.digital_marketing_payments.title')}</h3>
        {renderContent(t('gtsc.payments_services.digital_marketing_payments.content', { returnObjects: true }))}

        <ul>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.number_of_products')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.number_of_images')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.duration_video')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.quotation_request')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.referencing_by_keyword')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.strategic_marketing')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.advanced_product_management')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.priority_search_results')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.find_an_agent')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.visibility_on_algerian_market')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.global_market_visibility')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.analytical_data')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.advanced_technical_assistance')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.special_visual_badges')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.priority_customer_support')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.performance_analysis')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.forums_and_communities')}</li>
          <li>{t('gtsc.payments_services.digital_marketing_payments.types_of_service.online_chat')}</li>
        </ul>

        <h4>{t('gtsc.payments_services.digital_marketing_payments.algerian_payment.title')}</h4>
        {renderContent(t('gtsc.payments_services.digital_marketing_payments.algerian_payment.content', { returnObjects: true }))}

        <h4>{t('gtsc.payments_services.digital_marketing_payments.foreign_payment.title')}</h4>
        {renderContent(t('gtsc.payments_services.digital_marketing_payments.foreign_payment.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.advertising_space.title')}</h2>
        <p>{t('gtsc.advertising_space.important_note')}</p>

        <h3>{t('gtsc.advertising_space.types_of_pages.title')}</h3>
        <ul>
          {renderContent(t('gtsc.advertising_space.types_of_pages.content', { returnObjects: true }))}
        </ul>

        <h3>{t('gtsc.advertising_space.types_of_spaces.title')}</h3>
        <ul>
          {renderContent(t('gtsc.advertising_space.types_of_spaces.content', { returnObjects: true }))}
        </ul>
      </section>

      <section>
        <h2>{t('gtsc.online_sales_commission.title')}</h2>
        {renderContent(t('gtsc.online_sales_commission.content', { returnObjects: true }))}

        <h3>{t('gtsc.online_sales_commission.algerian_sales.title')}</h3>
        <p>{t('gtsc.online_sales_commission.algerian_sales.content')}</p>

        <h3>{t('gtsc.online_sales_commission.foreign_sales.title')}</h3>
        <p>{t('gtsc.online_sales_commission.foreign_sales.content')}</p>

        <h3>{t('gtsc.online_sales_commission.commission_note.title')}</h3>
        <p>{t('gtsc.online_sales_commission.commission_note.content')}</p>
      </section>

      <section>
        <h2>{t('gtsc.risks_transactions.title')}</h2>
        {renderContent(t('gtsc.risks_transactions.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.information_documents.title')}</h2>
        <p>{t('gtsc.information_documents.content')}</p>
      </section>

      <section>
        <h2>{t('gtsc.sales_content.title')}</h2>
        <p>{t('gtsc.sales_content.content')}</p>
      </section>

      <section>
        <h2>{t('gtsc.comments_criticisms.title')}</h2>
        {renderContent(t('gtsc.comments_criticisms.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.third_party_liability.title')}</h2>
        {renderContent(t('gtsc.third_party_liability.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.prohibited_products.title')}</h2>
        {renderContent(t('gtsc.prohibited_products.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.list_of_prohibited_products.title')}</h2>
        <ul>
          {renderContent(t('gtsc.list_of_prohibited_products.content', { returnObjects: true }))}
        </ul>
      </section>

      <section>
        <h2>{t('gtsc.changes_updates.title')}</h2>
        {renderContent(t('gtsc.changes_updates.content', { returnObjects: true }))}
      </section>

      <section>
        <h2>{t('gtsc.force_majeure.title')}</h2>
        {renderContent(t('gtsc.force_majeure.content', { returnObjects: true }))}
      </section>
    </div>
  );
};

export default Gtsc;
