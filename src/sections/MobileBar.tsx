import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { PhoneIcon, WhatsAppIcon } from '../components/Icons';

const MobileBar: React.FC = () => {
  return (
    <div className="mobile-bar" aria-label="Quick contact actions">
      <div className="mobile-bar__inner">
        <a
          href={siteConfig.phone.href}
          className="mobile-bar__btn mobile-bar__btn--call"
          id="mobile-call-now"
        >
          <PhoneIcon size={18} />
          Call Now
        </a>
        <a
          href={siteConfig.whatsapp.href}
          className="mobile-bar__btn mobile-bar__btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-whatsapp"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileBar;
