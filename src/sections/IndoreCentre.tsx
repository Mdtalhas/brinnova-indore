import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { MapPinIcon, PhoneIcon, ClockIcon, NavigationIcon } from '../components/Icons';

const IndoreCentre: React.FC = () => {
  return (
    <section className="section" id="contact" aria-label="Our Indore Centre">
      <div className="container">
        <div className="section-header">
          <h2>Our Indore Centre</h2>
          <p>Centre-based physiotherapy and rehabilitation care in Indore, Madhya Pradesh.</p>
        </div>

        <div className="centre-grid">
          <div className="centre__image">
            <img
              src="/images/centre-interior.jpg"
              alt="Brinnova Care Physiotherapy and Rehabilitation Centre interior in Indore"
              loading="lazy"
              width="580"
              height="380"
            />
          </div>

          <div className="centre__info">
            <h3>Brinnova Care — Indore</h3>

            {/* Address */}
            <div className="centre__detail">
              <div className="centre__detail-icon">
                <MapPinIcon size={20} />
              </div>
              <div className="centre__detail-text">
                <strong>Address</strong>
                <span>{siteConfig.address.fullAddress}</span>
                {!siteConfig.address.verified && (
                  <p className="centre__placeholder">[Address to be verified by client]</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="centre__detail">
              <div className="centre__detail-icon">
                <PhoneIcon size={20} />
              </div>
              <div className="centre__detail-text">
                <strong>Phone</strong>
                <span>
                  <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
                </span>
                {!siteConfig.phone.verified && (
                  <p className="centre__placeholder">[Phone number to be verified by client]</p>
                )}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="centre__detail">
              <div className="centre__detail-icon">
                <ClockIcon size={20} />
              </div>
              <div className="centre__detail-text">
                <strong>Operating Hours</strong>
                <span>{siteConfig.operatingHours.display}</span>
                {!siteConfig.operatingHours.verified && (
                  <p className="centre__placeholder">[Operating hours to be verified by client]</p>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="centre__ctas">
              <a
                href={siteConfig.googleMapsUrl}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
              >
                <NavigationIcon size={18} />
                Get Directions
              </a>
              <a href={siteConfig.phone.href} className="btn btn--primary" id="centre-call-now">
                <PhoneIcon size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndoreCentre;
