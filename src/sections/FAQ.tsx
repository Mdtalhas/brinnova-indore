import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDownIcon } from '../components/Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section--light" id="faqs" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list" role="list">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                key={index}
                role="listitem"
              >
                <button
                  className="faq-item__question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={faqId}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon size={20} className="faq-item__chevron" />
                </button>
                {isOpen && (
                  <div
                    className="faq-item__answer"
                    id={answerId}
                    role="region"
                    aria-labelledby={faqId}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
