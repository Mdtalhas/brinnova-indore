/**
 * Brinnova Care — Indore Centre Configuration
 * 
 * IMPORTANT: This file contains all configurable business details.
 * Update the placeholder values below once the client verifies the actual
 * Indore centre address, phone number, and operating hours.
 * 
 * Items marked with [PLACEHOLDER] must be verified before publishing.
 */

export const siteConfig = {
  // Brand
  brandName: 'Brinnova Care',
  brandTagline: 'Physiotherapy & Rehabilitation Centre',
  location: 'Indore',
  state: 'Madhya Pradesh',
  logoUrl: 'https://www.brinnovacare.com/assets/img/Brinnova-logo-new.png',
  websiteUrl: 'https://www.brinnovacare.com/',

  // Contact Details
  phone: {
    display: '+91 9100 555 222',
    href: 'tel:+919100555222',
    verified: true,
  },
  whatsapp: {
    display: '+91 9100 555 222',
    href: 'https://wa.me/919100555222',
    verified: true,
  },

  // Address — [PLACEHOLDER] Verify with client before publishing
  address: {
    street: '[Address to be confirmed]',     // [PLACEHOLDER]
    area: '[Area, Indore]',                  // [PLACEHOLDER]
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '[PIN Code]',                   // [PLACEHOLDER]
    fullAddress: 'Indore, Madhya Pradesh',
    verified: true,
  },

  // Operating Hours
  operatingHours: {
    weekdays: '6:00 AM – 8:00 PM',
    saturday: '6:00 AM – 8:00 PM',
    sunday: '6:00 AM – 8:00 PM',
    display: '6 AM – 8 PM',
    verified: true,
  },

  // Google Maps — [PLACEHOLDER] Generate link after address verification
  googleMapsUrl: '#', // [PLACEHOLDER] Add verified Google Maps directions link

  // Form Submission API
  formApi: {
    url: '/api/enquiry',  // [PLACEHOLDER] Replace with actual backend API endpoint
    configured: false,    // Set to true once a real backend endpoint is available
  },

  // Analytics — [PLACEHOLDER] Add tracking IDs when available
  analytics: {
    gtmId: '',           // [PLACEHOLDER] Google Tag Manager ID
    gaId: '',            // [PLACEHOLDER] Google Analytics ID
  },

  // SEO
  seo: {
    title: 'Physiotherapy Centre in Indore | Brinnova Care — Physiotherapy & Rehabilitation',
    description: 'Brinnova Care offers centre-based OP physiotherapy, stroke & neuro rehabilitation, orthopaedic rehab, and geriatric rehabilitation in Indore, Madhya Pradesh. Book a consultation today.',
    keywords: 'physiotherapy centre in Indore, physiotherapist in Indore, rehabilitation centre in Indore, stroke rehabilitation Indore, post-surgery physiotherapy Indore, geriatric rehabilitation Indore',
  },

  // Navigation Links
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'OP Physiotherapy', href: '#services' },
    { label: 'Rehabilitation Services', href: '#services' },
    { label: 'Why Brinnova', href: '#why-brinnova' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ],

  // Services
  services: [
    {
      id: 'op-physiotherapy',
      title: 'OP Physiotherapy',
      description: 'Back, neck, knee and joint physiotherapy, supervised exercises and mobility support.',
      image: '/images/service-op-physio.jpg',
      icon: 'physio',
    },
    {
      id: 'neuro-rehabilitation',
      title: 'Neuro Rehabilitation',
      description: 'Stroke and neurological rehabilitation focused on movement, balance and functional ability.',
      image: '/images/service-neuro-rehab.jpg',
      icon: 'neuro',
    },
    {
      id: 'ortho-rehabilitation',
      title: 'Orthopaedic Rehabilitation',
      description: 'Post-surgery physiotherapy, joint rehabilitation and supervised strengthening.',
      image: '/images/service-ortho-rehab.jpg',
      icon: 'ortho',
    },
    {
      id: 'geriatric-rehabilitation',
      title: 'Geriatric Rehabilitation',
      description: 'Mobility, balance, walking and daily activity support for older adults.',
      image: '/images/service-geriatric.jpg',
      icon: 'geriatric',
    },
  ],

  // Hero service highlights
  heroHighlights: [
    'OP Physiotherapy',
    'Stroke & Neuro Rehabilitation',
    'Orthopaedic & Post-Surgery Rehab',
    'Geriatric Rehab',
    'Mobility & Balance Training',
  ],

  // Why Choose Us benefits
  benefits: [
    {
      title: 'Personalised Care Plans',
      description: 'Care recommendations based on clinical assessment and functional goals.',
      icon: 'care-plan',
    },
    {
      title: 'Supervised Rehabilitation',
      description: 'Guided physiotherapy and structured rehabilitation support.',
      icon: 'supervised',
    },
    {
      title: 'Movement-Focused Care',
      description: 'Support for strength, balance, mobility and everyday function.',
      icon: 'movement',
    },
    {
      title: 'Patient & Family Guidance',
      description: 'Clear communication about care options and next steps.',
      icon: 'guidance',
    },
  ],

  // Conditions supported
  conditions: [
    { label: 'Back & neck pain', icon: 'spine' },
    { label: 'Knee & joint pain', icon: 'knee' },
    { label: 'Stroke & neurological conditions', icon: 'brain' },
    { label: 'Post-surgery recovery', icon: 'surgery' },
    { label: 'Orthopaedic injuries', icon: 'bone' },
    { label: 'Walking & balance difficulties', icon: 'balance' },
    { label: 'Geriatric mobility needs', icon: 'elderly' },
  ],

  // FAQ
  faqs: [
    {
      question: 'Is OP physiotherapy available in Indore?',
      answer: 'Contact Brinnova Care to confirm appointment availability and schedule an in-centre consultation.',
    },
    {
      question: 'Do you offer physiotherapy at home?',
      answer: 'No. Home physiotherapy visits are not available. Services are centre-based.',
    },
    {
      question: 'Can I enquire about stroke or post-surgery rehabilitation?',
      answer: 'Yes. Share the requirement with our team to discuss available rehabilitation options and assessment.',
    },
    {
      question: 'How many physiotherapy sessions are needed?',
      answer: 'The number of sessions depends on clinical assessment, functional goals and individual progress.',
    },
    {
      question: 'How can I book an appointment?',
      answer: 'Call the Indore centre or submit the short enquiry form to request a callback.',
    },
  ],

  // Form dropdown options
  serviceOptions: [
    'OP Physiotherapy',
    'Stroke & Neuro Rehab',
    'Orthopaedic & Post-Surgery Rehab',
    'Geriatric Rehab',
    'Other',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
