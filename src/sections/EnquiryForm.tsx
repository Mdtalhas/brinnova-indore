import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { CheckCircleIcon, AlertCircleIcon } from '../components/Icons';

interface FormData {
  fullName: string;
  phone: string;
  service: string;
  requirement: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  requirement?: string;
}

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    service: '',
    requirement: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validatePhone = (phone: string): boolean => {
    // Indian phone number: optional +91, then 10 digits starting with 6-9
    const pattern = /^(\+91[\s-]?)?[6-9]\d{9}$/;
    return pattern.test(phone.replace(/[\s-]/g, ''));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please describe your requirement.';
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = 'Please provide more detail about your requirement.';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      if (!siteConfig.formApi.configured) {
        // Backend not configured — show clear message
        console.warn('[EnquiryForm] No backend API configured. Form data:', formData);
        setSubmitError(
          'The enquiry form backend is not yet configured. Please call us directly to book your appointment.'
        );
        setIsSubmitting(false);
        return;
      }

      const submissionTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'medium',
      });

      const description = [
        `Applicant Name: ${formData.fullName.trim()}`,
        `Phone: ${formData.phone.trim()}`,
        `Service Required: ${formData.service}`,
        `Requirement Details: ${formData.requirement.trim()}`,
        `City: Indore`,
        `State: Madhya Pradesh`,
        `Source: Brinnova Indore Landing Page`,
        `Submission Time: ${submissionTime}`,
      ].join('\n');

      const payload = {
        name: formData.fullName.trim(),
        contact_name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        opportunity: `${formData.service} Enquiry - ${formData.fullName.trim()}`,
        salesperson_id: siteConfig.formApi.salespersonId ?? 54,
        company_id: siteConfig.formApi.companyId ?? 112,
        email_from: '',
        city: 'Indore',
        description,
      };

      const response = await fetch(siteConfig.formApi.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.status === 'error')) {
        throw new Error(data?.message || 'Submission failed. Please try again.');
      }

      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', service: '', requirement: '' });
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="form-section" id="enquiry-form" aria-label="Enquiry form">
        <div className="container">
          <div className="enquiry-form">
            <div className="form-success">
              <div className="form-success__icon">
                <CheckCircleIcon size={32} />
              </div>
              <h3>Thank You for Your Enquiry</h3>
              <p>
                Our team will review your request and call you back shortly to discuss your physiotherapy or rehabilitation needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section" id="enquiry-form" aria-label="Book a consultation">
      <div className="container">
        <div className="section-header">
          <h2>Book a Physiotherapy or Rehabilitation Consultation in Indore</h2>
          <p>Speak with our team to understand the next step for your physiotherapy or rehabilitation needs.</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-control ${errors.fullName ? 'form-control--error' : ''}`}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
              {errors.fullName && (
                <span className="form-error" role="alert">
                  <AlertCircleIcon size={12} /> {errors.fullName}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? 'form-control--error' : ''}`}
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
              {errors.phone && (
                <span className="form-error" role="alert">
                  <AlertCircleIcon size={12} /> {errors.phone}
                </span>
              )}
            </div>

            {/* Service Required */}
            <div className="form-group">
              <label htmlFor="service">
                Service Required <span className="required">*</span>
              </label>
              <select
                id="service"
                name="service"
                className={`form-control ${errors.service ? 'form-control--error' : ''}`}
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {siteConfig.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.service && (
                <span className="form-error" role="alert">
                  <AlertCircleIcon size={12} /> {errors.service}
                </span>
              )}
            </div>

            {/* Requirement */}
            <div className="form-group">
              <label htmlFor="requirement">
                Your Requirement <span className="required">*</span>
              </label>
              <textarea
                id="requirement"
                name="requirement"
                className={`form-control form-control--textarea ${errors.requirement ? 'form-control--error' : ''}`}
                placeholder="Briefly describe your condition"
                value={formData.requirement}
                onChange={handleChange}
                required
                rows={1}
              />
              {errors.requirement && (
                <span className="form-error" role="alert">
                  <AlertCircleIcon size={12} /> {errors.requirement}
                </span>
              )}
            </div>

            {/* Submit Error */}
            {submitError && (
              <div className="form-group form-group--full">
                <div className="form-error" role="alert" style={{ fontSize: '0.875rem', padding: '12px', background: 'rgba(220,53,69,0.05)', borderRadius: '6px' }}>
                  <AlertCircleIcon size={16} /> {submitError}
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="form-submit">
              <button
                type="submit"
                className="btn btn--primary btn--lg"
                disabled={isSubmitting}
                id="form-submit-btn"
              >
                {isSubmitting ? 'Submitting…' : 'Request a Call Back'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
