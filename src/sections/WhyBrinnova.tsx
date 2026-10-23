import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { CarePlanIcon, SupervisedIcon, MovementIcon, GuidanceIcon } from '../components/Icons';

const benefitIconMap: Record<string, React.FC<{ size?: number }>> = {
  'care-plan': CarePlanIcon,
  supervised: SupervisedIcon,
  movement: MovementIcon,
  guidance: GuidanceIcon,
};

const WhyBrinnova: React.FC = () => {
  return (
    <section className="section" id="why-brinnova" aria-label="Why Choose Brinnova Care">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Brinnova Care?</h2>
        </div>

        <div className="benefits-grid">
          {siteConfig.benefits.map((benefit) => {
            const IconComponent = benefitIconMap[benefit.icon] || CarePlanIcon;
            return (
              <div className="benefit-card" key={benefit.title}>
                <div className="benefit-card__icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__desc">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBrinnova;
