import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { PhoneIcon, MenuIcon, XIcon, MapPinIcon } from '../components/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Slim Top Information Bar */}
      <div className="top-bar" aria-label="Quick contact and centre information">
        <div className="container top-bar__inner">
          <div className="top-bar__left">
            <span>Trusted Rehabilitation &amp; Physiotherapy Care</span>
          </div>
          
          <div className="top-bar__center">
            <span className="top-bar__location">
              <MapPinIcon size={14} className="top-bar__icon" />
              <span>Indore, Madhya Pradesh</span>
            </span>
            <span className="top-bar__divider" aria-hidden="true">|</span>
            <span className="top-bar__timing">
              <span>{siteConfig.operatingHours.display}</span>
            </span>
          </div>

          <div className="top-bar__right">
            <a href={siteConfig.phone.href} className="top-bar__phone" aria-label={`Call ${siteConfig.phone.display}`}>
              <PhoneIcon size={14} className="top-bar__icon" />
              <span>{siteConfig.phone.display}</span>
            </a>
            <a href={siteConfig.phone.href} className="top-bar__call-btn" id="top-bar-call-btn">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} id="home">
        <div className="container header__inner">
          <a href="#home" className="header__logo" aria-label="Brinnova Care Home">
            <img
              src={siteConfig.logoUrl}
              alt="Brinnova Care — Physiotherapy & Rehabilitation Centre"
              width="160"
              height="44"
            />
          </a>

          <nav className="header__nav" aria-label="Main navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#enquiry-form"
            className="btn btn--primary btn--sm header__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#enquiry-form'); }}
          >
            Book an Appointment
          </a>

          <button
            className={`header__hamburger ${isMobileOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileOpen ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#enquiry-form"
          className="btn btn--primary"
          onClick={(e) => { e.preventDefault(); handleNavClick('#enquiry-form'); }}
        >
          Book an Appointment
        </a>
        <a
          href={siteConfig.phone.href}
          className="btn btn--secondary"
        >
          <PhoneIcon size={18} /> Call Now
        </a>
      </nav>
    </>
  );
};

export default Header;
