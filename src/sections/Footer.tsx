import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { MapPinIcon, PhoneIcon, ClockIcon } from '../components/Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <img
              src={siteConfig.logoUrl}
              alt="Brinnova Care logo"
              width="140"
              height="40"
            />
            <p>
              Centre-based physiotherapy and rehabilitation services in Indore, Madhya Pradesh.
              Personalised care focused on movement, function, and recovery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__links" aria-label="Footer navigation">
              {siteConfig.navLinks
                .filter((link) => link.label !== 'OP Physiotherapy' && link.label !== 'Rehabilitation Services')
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href === '#home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer__heading">Services</h4>
            <nav className="footer__links" aria-label="Services links">
              {siteConfig.services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__contact-item">
              <MapPinIcon size={16} />
              <span>{siteConfig.address.fullAddress}</span>
            </div>
            <div className="footer__contact-item">
              <PhoneIcon size={16} />
              <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
            </div>
            <div className="footer__contact-item">
              <ClockIcon size={16} />
              <span>{siteConfig.operatingHours.display}</span>
            </div>
          </div>
        </div>

        {/* Bottom Pill Bar */}
        <div className="footer__bottom-bar">
          <span className="footer__copyright">
            Copyright © {currentYear} Brinnova Care. All rights reserved.
          </span>
          <span className="footer__divider" aria-hidden="true">|</span>
          <a
            href={siteConfig.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__website-link"
          >
            www.brinnovacare.com
          </a>
          <span className="footer__divider" aria-hidden="true">|</span>
          <span className="footer__partner">
            Marketing Partner —
            <a
              href="https://www.dumosh.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="dumosh-badge"
              aria-label="Dumosh - Marketing Partner"
            >
              <span className="dumosh-text">DUMOSH</span>
              <span className="dumosh-dot">.</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
