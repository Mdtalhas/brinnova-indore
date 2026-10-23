import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { PhysioServiceIcon, NeuroServiceIcon, OrthoServiceIcon, GeriatricServiceIcon } from '../components/Icons';

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  physio: PhysioServiceIcon,
  neuro: NeuroServiceIcon,
  ortho: OrthoServiceIcon,
  geriatric: GeriatricServiceIcon,
};

const Services: React.FC = () => {
  return (
    <section className="section section--light" id="services" aria-label="Our Services in Indore">
      <div className="container">
        <div className="section-header">
          <h2>Our Services in Indore</h2>
          <p>Physiotherapy and rehabilitation support tailored to individual needs.</p>
        </div>

        <div className="services-grid">
          {siteConfig.services.map((service) => {
            const IconComponent = iconMap[service.icon] || PhysioServiceIcon;
            return (
              <article className="service-card" key={service.id} id={service.id}>
                <img
                  className="service-card__image"
                  src={service.image}
                  alt={`${service.title} — ${service.description}`}
                  loading="lazy"
                  width="300"
                  height="200"
                />
                <div className="service-card__body">
                  <div className="service-card__icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <a
                    href="#enquiry-form"
                    className="service-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Know More &rarr;
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
