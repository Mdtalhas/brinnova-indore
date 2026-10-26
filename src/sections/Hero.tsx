import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  PhoneIcon,
  CheckCircleIcon,
  InfoIcon,
  UsersIcon,
  ShieldHospitalIcon,
  EquipmentIcon,
  PhysioServiceIcon,
  NeuroServiceIcon,
  OrthoServiceIcon,
  GeriatricServiceIcon,
  SpineIcon,
  BalanceIcon,
  SurgeryIcon,
} from '../components/Icons';

const heroServicesList = [
  { label: 'OP Physiotherapy', icon: PhysioServiceIcon },
  { label: 'Post-Surgery Rehabilitation', icon: SurgeryIcon },
  { label: 'Stroke Rehabilitation', icon: NeuroServiceIcon },
  { label: 'Geriatric Rehabilitation', icon: GeriatricServiceIcon },
  { label: 'Neuro Rehabilitation', icon: NeuroServiceIcon },
  { label: 'Spine & Back Pain Physiotherapy', icon: SpineIcon },
  { label: 'Orthopaedic Rehabilitation', icon: OrthoServiceIcon },
  { label: 'Mobility & Balance Training', icon: BalanceIcon },
];

const Hero: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero__wrapper">
        {/* Background Image Container with Gradient Fade */}
        <div className="hero__bg-container">
          <img
            src="/images/hero-physiotherapy.jpg"
            alt="Physiotherapist assisting a patient with supervised rehabilitation exercise at Brinnova Care Indore"
            className="hero__bg-img"
            fetchPriority="high"
          />
          <div className="hero__gradient-overlay" aria-hidden="true" />
        </div>

        {/* Hero Content Container */}
        <div className="container hero__container">
          <div className="hero__grid">
            {/* Left Content Column */}
            <div className="hero__content">
              <span className="hero__eyebrow">BRINNOVA CARE – INDORE</span>

              <h1 className="hero__title">
                Physiotherapy &amp;<br />
                Rehabilitation Centre<br />
                <span className="highlight">in Indore</span>
              </h1>

              <p className="hero__subtitle">
                Personalised care. Structured rehabilitation.<br />
                Focused on your functional recovery.
              </p>

              {/* Mobile Hero Image Card shown directly under subtitle */}
              <div className="hero__mobile-image">
                <img
                  src="/images/hero-physiotherapy.jpg"
                  alt="Physiotherapy and rehabilitation session at Brinnova Care Indore"
                  className="hero__mobile-img"
                  loading="eager"
                />
              </div>

              {/* 2-column Service Highlights Grid */}
              <div className="hero__services-grid">
                {heroServicesList.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="hero__service-item" key={item.label}>
                      <span className="hero__service-icon">
                        <Icon size={16} />
                      </span>
                      <span className="hero__service-text">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="hero__ctas">
                <a
                  href={siteConfig.phone.href}
                  className="btn btn--primary btn--call-pill"
                  id="hero-call-now"
                >
                  <PhoneIcon size={18} />
                  Call {siteConfig.phone.display}
                </a>
                <a
                  href="#enquiry-form"
                  className="btn btn--outline-pill"
                  id="hero-request-callback"
                  onClick={scrollToForm}
                >
                  Request a Call Back
                </a>
              </div>

              {/* Bottom 3 Trust / Operational Notes */}
              <div className="hero__trust-row">
                <div className="hero__trust-item">
                  <InfoIcon size={16} />
                  <span>Centre-based services only</span>
                </div>
                <div className="hero__trust-item">
                  <CheckCircleIcon size={16} />
                  <span>Experienced clinical team</span>
                </div>
                <div className="hero__trust-item">
                  <CheckCircleIcon size={16} />
                  <span>Personalised treatment plans</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Floating Information Cards */}
            <div className="hero__cards-column">
              <div className="hero__cards-stack">
                {/* Card 1: Expert Team */}
                <div className="hero-float-card hero-float-card--1">
                  <div className="hero-float-card__icon-box">
                    <UsersIcon size={22} />
                  </div>
                  <div className="hero-float-card__body">
                    <div className="hero-float-card__label">
                      Expert Physiotherapy<br />&amp; Rehabilitation Team
                    </div>
                    <div className="hero-float-card__stat">30+</div>
                  </div>
                </div>

                {/* Card 2: Centre-Based Care */}
                <div className="hero-float-card hero-float-card--2">
                  <div className="hero-float-card__icon-box">
                    <ShieldHospitalIcon size={22} />
                  </div>
                  <div className="hero-float-card__body">
                    <div className="hero-float-card__label">Centre-Based Care</div>
                    <div className="hero-float-card__highlight">in Indore</div>
                  </div>
                </div>

                {/* Card 3: Modern Equipment */}
                <div className="hero-float-card hero-float-card--3">
                  <div className="hero-float-card__icon-box">
                    <EquipmentIcon size={22} />
                  </div>
                  <div className="hero-float-card__body">
                    <div className="hero-float-card__label">Modern Rehabilitation</div>
                    <div className="hero-float-card__highlight">Equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
