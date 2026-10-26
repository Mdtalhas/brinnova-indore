import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import EnquiryForm from './sections/EnquiryForm';
import WhyBrinnova from './sections/WhyBrinnova';
import Conditions from './sections/Conditions';
import IndoreCentre from './sections/IndoreCentre';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import MobileBar from './sections/MobileBar';
import { siteConfig } from './config/siteConfig';
import { WhatsAppIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <EnquiryForm />
        <WhyBrinnova />
        <Conditions />
        <IndoreCentre />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />

      {/* Sticky WhatsApp Button for Web */}
      <a
        href={siteConfig.whatsapp.href}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Brinnova Care on WhatsApp"
        id="web-floating-whatsapp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </>
  );
};

export default App;
