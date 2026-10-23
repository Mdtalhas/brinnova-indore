import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { PhoneIcon, CallbackIcon } from '../components/Icons';

const FinalCTA: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="final-cta section--navy" aria-label="Take the next step">
      <div className="container">
        <h2>Take the Next Step Towards Better Mobility</h2>
        <p>
          Need OP physiotherapy or rehabilitation care in Indore? Speak with Brinnova Care to discuss the appropriate next step.
        </p>
        <div className="final-cta__buttons">
          <a href={siteConfig.phone.href} className="btn btn--primary btn--lg" id="final-call-now">
            <PhoneIcon size={20} />
            Call Now
          </a>
          <a
            href="#enquiry-form"
            className="btn btn--outline-white btn--lg"
            onClick={scrollToForm}
            id="final-request-callback"
          >
            <CallbackIcon size={20} />
            Request a Call Back
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
