/**
 * ZOHO - Complete with ALL 73 Subcategories + WhatsApp Auto-Fill
 */

(function() {
  'use strict';

  const CONFIG = { whatsappNumber: '94772083885' };

  // ALL SERVICES WITH COMPLETE SUBCATEGORIES
  const SERVICES_DATA = {
    'photography': {
      name: 'Photography', icon: '📸',
      subcategories: [
        { name: 'Wedding Photography', desc: 'Capture your special day', icon: '💍' },
        { name: 'Pre-Wedding / Engagement', desc: 'Beautiful pre-wedding shoots', icon: '💕' },
        { name: 'Event Photography', desc: 'Corporate and private events', icon: '🎉' },
        { name: 'Portrait Photography', desc: 'Studio and outdoor portraits', icon: '🖼️' },
        { name: 'Product Photography', desc: 'E-commerce product shots', icon: '📦' },
        { name: 'Food Photography', desc: 'Restaurant food photography', icon: '🍽️' },
        { name: 'Fashion / Model Photography', desc: 'Professional fashion shoots', icon: '👗' },
        { name: 'Real Estate / Interior', desc: 'Property photography', icon: '🏠' },
        { name: 'Lifestyle / Street Photography', desc: 'Candid photography', icon: '📷' }
      ]
    },
    'graphic-design': {
      name: 'Graphic Design', icon: '🎨',
      subcategories: [
        { name: 'Logo Design', desc: 'Unique logo designs', icon: '🎯' },
        { name: 'Brand Identity Design', desc: 'Complete brand identity', icon: '🏆' },
        { name: 'Poster & Flyer Design', desc: 'Promotional materials', icon: '📄' },
        { name: 'Social Media Post Design', desc: 'Social media graphics', icon: '📱' },
        { name: 'Banner & Hoarding Design', desc: 'Large format designs', icon: '🪧' },
        { name: 'Business Card & Stationery', desc: 'Business stationery', icon: '💼' },
        { name: 'YouTube Thumbnail Design', desc: 'YouTube thumbnails', icon: '🎬' },
        { name: 'Album & Photo Book Design', desc: 'Book layouts', icon: '📖' },
        { name: 'Packaging Design', desc: 'Product packaging', icon: '📦' },
        { name: 'UI / Web Graphic Assets', desc: 'Web design elements', icon: '🖥️' }
      ]
    },
    'video-editing': {
      name: 'Video Editing', icon: '🎬',
      subcategories: [
        { name: 'YouTube Video Editing', desc: 'Professional YouTube editing', icon: '▶️' },
        { name: 'Instagram / TikTok Reel Editing', desc: 'Short-form content', icon: '📲' },
        { name: 'Cinematic Video Editing', desc: 'Movie-quality editing', icon: '🎥' },
        { name: 'Wedding Highlight Editing', desc: 'Wedding highlights', icon: '💒' },
        { name: 'Event After-Movie Editing', desc: 'Event after-movies', icon: '🎭' },
        { name: 'Promotional / Advertisement', desc: 'Promo videos', icon: '📢' },
        { name: 'Color Grading & Correction', desc: 'Professional grading', icon: '🎨' },
        { name: 'Subtitle / Caption Editing', desc: 'Subtitle services', icon: '💬' },
        { name: 'Motion Graphics Integration', desc: 'Motion graphics', icon: '✨' },
        { name: 'Short-Form Content Editing', desc: 'Quick videos', icon: '⚡' }
      ]
    },
    'videography': {
      name: 'Videography', icon: '🎥',
      subcategories: [
        { name: 'Wedding Videography', desc: 'Wedding day coverage', icon: '👰' },
        { name: 'Event Videography', desc: 'Event filming', icon: '🎊' },
        { name: 'Corporate / Business Videos', desc: 'Corporate videos', icon: '💼' },
        { name: 'Product Videography', desc: 'Product videos', icon: '📦' },
        { name: 'Food & Restaurant Videography', desc: 'Food videos', icon: '🍔' },
        { name: 'Social Media Video Shoots', desc: 'Social content', icon: '📱' },
        { name: 'Documentary-Style Videos', desc: 'Documentary filming', icon: '🎞️' },
        { name: 'Cinematic Short Films', desc: 'Short films', icon: '🎬' },
        { name: 'Interview / Podcast Recording', desc: 'Interview filming', icon: '🎙️' }
      ]
    },
    'digital-marketing': {
      name: 'Digital Marketing', icon: '📊',
      subcategories: [
        { name: 'Promotion Campaigns', desc: 'Strategic promotions', icon: '📢' },
        { name: 'Facebook & Instagram Ads', desc: 'Social media ads', icon: '📱' },
        { name: 'Google Ads', desc: 'Search advertising', icon: '🔍' },
        { name: 'Brand Promotion', desc: 'Complete brand promotion', icon: '🏆' },
        { name: 'Online Sales Funnel Setup', desc: 'Sales funnels', icon: '🎯' },
        { name: 'Ad Creative Strategy', desc: 'Ad campaign planning', icon: '💡' },
        { name: 'Performance Analytics', desc: 'Performance reports', icon: '📈' },
        { name: 'Local Business Marketing', desc: 'Local targeting', icon: '🏪' },
        { name: 'Influencer Marketing Strategy', desc: 'Influencer collaboration', icon: '⭐' }
      ]
    },
    'social-media': {
      name: 'Social Media Management', icon: '📱',
      subcategories: [
        { name: 'Account Setup & Optimization', desc: 'Account optimization', icon: '⚙️' },
        { name: 'Content Planning & Scheduling', desc: 'Content calendar', icon: '📅' },
        { name: 'Daily / Weekly Posting', desc: 'Regular posting', icon: '📤' },
        { name: 'Caption Writing & Hashtags', desc: 'Captions and hashtags', icon: '✍️' },
        { name: 'Reel & Short Content Strategy', desc: 'Short-form strategy', icon: '📽️' },
        { name: 'Page Growth Strategy', desc: 'Growth strategies', icon: '📈' },
        { name: 'Audience Engagement', desc: 'Community management', icon: '💬' },
        { name: 'Insights & Performance Reports', desc: 'Analytics reporting', icon: '📊' },
        { name: 'Brand Voice Management', desc: 'Brand messaging', icon: '🎭' },
        { name: 'Multi-Platform Handling', desc: 'Platform management', icon: '🌐' }
      ]
    },
    'content-creation': {
      name: 'Content Creation', icon: '✍️',
      subcategories: [
        { name: 'Photo Content Creation', desc: 'Photo content', icon: '📸' },
        { name: 'Video Content Creation', desc: 'Video content', icon: '🎬' },
        { name: 'Reel / Short-Form Content', desc: 'Short-form videos', icon: '📱' },
        { name: 'Script Writing & Storytelling', desc: 'Script writing', icon: '📝' },
        { name: 'Creative Concept Development', desc: 'Content ideas', icon: '💡' },
        { name: 'Trend-Based Content', desc: 'Trending content', icon: '🔥' },
        { name: 'Product Content Creation', desc: 'Product content', icon: '📦' },
        { name: 'Brand Story Content', desc: 'Brand storytelling', icon: '📖' },
        { name: 'Voice-Over Content', desc: 'Voice-overs', icon: '🎤' },
        { name: 'Educational Content', desc: 'Informative content', icon: '🎓' }
      ]
    },
    'web-development': {
      name: 'Web Development', icon: '🌐',
      subcategories: [
        { name: 'Business Website Development', desc: 'Business websites', icon: '💼' },
        { name: 'Portfolio Website', desc: 'Portfolio websites', icon: '🎨' },
        { name: 'Landing Page Design', desc: 'Landing pages', icon: '🚀' },
        { name: 'Responsive Web Design', desc: 'Mobile-friendly sites', icon: '📱' },
        { name: 'UI / UX Design', desc: 'User-centered design', icon: '🎯' },
        { name: 'Website CV / Resume', desc: 'Online CV sites', icon: '📄' }
      ]
    }
  };

  // WHATSAPP URL GENERATOR
  function generateWhatsAppURL(service, category, type) {
    const msg = type === 'enquire' 
      ? `Hello ZOHO Team 👋\n\nI'm interested in:\nService: ${service}\nCategory: ${category}\n\nPlease share details and pricing.`
      : `Hello ZOHO Team 👋\n\nI need a quote for:\nService: ${service}\nCategory: ${category}\n\nPlease provide pricing.`;
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  // GENERATE SERVICE DETAIL HTML
  function generateServiceDetailHTML(serviceId) {
    const s = SERVICES_DATA[serviceId];
    if (!s) return '';

    const subsHTML = s.subcategories.map(sub => `
      <div class="subcategory-card glass" data-reveal>
        <div class="subcategory-icon">${sub.icon}</div>
        <h4>${sub.name}</h4>
        <p>${sub.desc}</p>
        <div class="subcategory-buttons">
          <button class="btn-subcategory btn-enquire" data-service-id="${serviceId}" data-category="${sub.name}">
            <svg viewBox="0 0 24 24" fill="none" class="btn-ico"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.2 2.3c-.8.3-1.3.9-1.3 1.7v.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1.1" fill="currentColor"/></svg>
            <span>FAQ</span>
          </button>
          <button class="btn-subcategory btn-quote" data-service-id="${serviceId}" data-category="${sub.name}">
            <svg viewBox="0 0 24 24" fill="none" class="btn-ico"><rect x="3" y="4.5" width="18" height="16.5" rx="2.5" stroke="currentColor" stroke-width="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <span>Booking</span>
          </button>
        </div>
      </div>
    `).join('');

    const collabHTML = serviceId === 'photography' ? `
        <a href="https://pictoraweb.github.io/pictora/" target="_blank" rel="noopener" class="collab-card" data-reveal>
          <span class="collab-glow"></span>
          <span class="collab-logo"><img src="assets/logos/pictora.webp" alt="Pictora" onerror="this.style.display='none'"></span>
          <span class="collab-body">
            <span class="collab-badge">✦ In Collaboration</span>
            <span class="collab-title">Pictora</span>
            <span class="collab-text">ZOHO × Pictora — our partner photography studio. Explore Pictora's dedicated portfolio &amp; booking website.</span>
          </span>
          <span class="collab-cta">Visit Website
            <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      ` : '';

    return `
      <div class="service-detail-content">
        <button class="btn btn-ghost btn-back" id="btnBack" aria-label="Back to Services" title="Back"><svg viewBox="0 0 24 24" fill="none" class="btn-ico"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="service-detail-banner">
          <div class="service-banner-content">
            <div class="service-banner-icon">${s.icon}</div>
            <h2>${s.name}</h2>
            <p>${s.subcategories.length} Categories</p>
          </div>
        </div>
        ${collabHTML}
        <div class="subcategories-grid">${subsHTML}</div>
      </div>
    `;
  }

  // SHOW/HIDE SERVICE DETAIL
  function showServiceDetail(id) {
    const grid = document.getElementById('servicesMainGrid');
    const container = document.getElementById('serviceDetailContainer');
    if (grid && container) {
      grid.style.display = 'none';
      container.innerHTML = generateServiceDetailHTML(id);
      container.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      initRevealAnimations();
      document.getElementById('btnBack')?.addEventListener('click', hideServiceDetail);
    }
  }

  function hideServiceDetail() {
    const grid = document.getElementById('servicesMainGrid');
    const container = document.getElementById('serviceDetailContainer');
    if (grid && container) {
      container.innerHTML = '';
      container.style.display = 'none';
      grid.style.display = 'grid';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // QUOTATION FORM
  const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  const QUESTION_ICON = '<svg viewBox="0 0 24 24" fill="none" class="btn-icon"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.2 2.3c-.8.3-1.3.9-1.3 1.7v.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1.1" fill="currentColor"/></svg>';

  // Category-specific booking fields per service
  const BOOKING_FIELDS = {
    'photography': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Shoot Date', ph: 'e.g. 15 Aug 2026' },
      { label: 'Shoot Type', ph: 'e.g. Wedding, Portrait, Product' },
      { label: 'Location / Venue', ph: 'e.g. Colombo' },
      { label: 'Coverage Hours', ph: 'e.g. 6 hours' },
      { label: 'No. of Edited Photos', ph: 'e.g. 150' }
    ],
    'graphic-design': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Design Type', ph: 'e.g. Logo, Poster, Flyer' },
      { label: 'No. of Concepts', ph: 'e.g. 3' },
      { label: 'Brand Colors / Style', ph: 'e.g. Purple, minimal' },
      { label: 'Deadline', ph: 'e.g. Within 5 days' },
      { label: 'Required File Formats', ph: 'e.g. PNG, PDF, AI' }
    ],
    'video-editing': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Final Video Length', ph: 'e.g. 60 seconds' },
      { label: 'Raw Footage Duration', ph: 'e.g. 30 minutes' },
      { label: 'Style / Reference Link', ph: 'e.g. cinematic, link' },
      { label: 'Deadline', ph: 'e.g. Within 4 days' },
      { label: 'No. of Revisions', ph: 'e.g. 2' }
    ],
    'videography': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Event Date', ph: 'e.g. 15 Aug 2026' },
      { label: 'Event Type', ph: 'e.g. Wedding, Corporate' },
      { label: 'Location / Venue', ph: 'e.g. Colombo' },
      { label: 'Coverage Hours', ph: 'e.g. 8 hours' },
      { label: 'Deliverables', ph: 'e.g. Highlights + Full film' }
    ],
    'digital-marketing': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Business / Brand Type', ph: 'e.g. Restaurant, Fashion' },
      { label: 'Platforms', ph: 'e.g. Facebook, Instagram, Google' },
      { label: 'Monthly Budget', ph: 'e.g. LKR 30,000' },
      { label: 'Campaign Goal', ph: 'e.g. Sales, Followers, Leads' },
      { label: 'Campaign Duration', ph: 'e.g. 1 month' }
    ],
    'social-media': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Platforms to Manage', ph: 'e.g. Instagram, TikTok' },
      { label: 'Posts per Week', ph: 'e.g. 5' },
      { label: 'Content Type', ph: 'e.g. Reels, Posts, Stories' },
      { label: 'Start Date', ph: 'e.g. 1 Sep 2026' },
      { label: 'Need Content Creation?', ph: 'Yes / No' }
    ],
    'content-creation': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Content Type', ph: 'e.g. Reel, Photo, Script' },
      { label: 'Quantity Needed', ph: 'e.g. 10 posts' },
      { label: 'Platform', ph: 'e.g. Instagram, YouTube' },
      { label: 'Theme / Niche', ph: 'e.g. Food, Fashion' },
      { label: 'Deadline', ph: 'e.g. Within 1 week' }
    ],
    'web-development': [
      { label: 'Your Name', ph: 'e.g. Ahmed' },
      { label: 'Website Type', ph: 'e.g. Business, Portfolio, Shop' },
      { label: 'No. of Pages', ph: 'e.g. 5' },
      { label: 'Preferred Deadline', ph: 'e.g. Within 3 weeks' },
      { label: 'Budget Range', ph: 'e.g. LKR 50,000 – 90,000' },
      { label: 'Need Hosting + Domain?', ph: 'Yes / No' }
    ]
  };

  const DEFAULT_BOOKING_FIELDS = [
    { label: 'Your Name', ph: 'e.g. Ahmed' },
    { label: 'Preferred Date', ph: 'e.g. 15 Aug 2026' },
    { label: 'Budget Range', ph: 'e.g. LKR 25,000 – 40,000' },
    { label: 'Location', ph: 'e.g. Colombo' },
    { label: 'Details', ph: 'Short description' }
  ];

  function generateQuoteFormHTML(serviceId, category) {
    const s = SERVICES_DATA[serviceId] || { name: '', icon: '📅' };
    const fields = BOOKING_FIELDS[serviceId] || DEFAULT_BOOKING_FIELDS;
    const fieldsHTML = fields.map((f, i) => {
      const slug = f.label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      const span = (fields.length % 2 === 1 && i === fields.length - 1) ? ' quote-span' : '';
      return `<div class="form-group${span}"><label>${f.label}</label><input type="text" name="${slug}" data-label="${f.label}" placeholder="${f.ph}"></div>`;
    }).join('');

    return `
      <div class="quote-view">
        <button class="btn btn-ghost btn-back" id="btnQuoteBack" aria-label="Back to ${s.name || 'Services'}" title="Back"><svg viewBox="0 0 24 24" fill="none" class="btn-ico"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="quote-hero">
          <div class="quote-hero-icon">${s.icon || '📅'}</div>
          <span class="quote-hero-badge">Booking Request</span>
          <h2>${category}</h2>
          <p>${s.name || ''}</p>
        </div>
        <form class="quote-form glass" id="quoteForm">
          <div class="quote-grid">${fieldsHTML}</div>
          <div class="form-group"><label>Any other requirements or questions?</label><textarea name="notes" rows="4" placeholder="Type here..."></textarea></div>
          <button type="submit" class="btn btn-primary btn-quote-send">${WA_ICON}<span>Send on WhatsApp</span></button>
        </form>
      </div>`;
  }

  function showQuoteForm(serviceId, category) {
    const grid = document.getElementById('servicesMainGrid');
    const container = document.getElementById('serviceDetailContainer');
    if (!container) return;
    if (grid) grid.style.display = 'none';
    container.innerHTML = generateQuoteFormHTML(serviceId, category);
    container.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('btnQuoteBack')?.addEventListener('click', () => showServiceDetail(serviceId));
    document.getElementById('quoteForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      sendQuote(e.target, serviceId, category);
    });
  }

  function sendQuote(form, serviceId, category) {
    const s = SERVICES_DATA[serviceId] || { name: '' };

    let msg = `Hello ZOHO Team 👋\n\n📅 *Booking Request*\n`;
    msg += `Service: ${s.name}\nCategory: ${category}\n\n`;
    form.querySelectorAll('input[data-label]').forEach((el) => {
      msg += `• ${el.getAttribute('data-label')}: ${(el.value || '').trim() || '-'}\n`;
    });
    const notes = (form.querySelector('[name="notes"]') || {}).value;
    if (notes && notes.trim()) msg += `\n📝 Additional Notes:\n${notes.trim()}\n`;
    msg += `\nPlease confirm availability & pricing. Thank you!`;

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // FAQ
  function faqQuestions(category) {
    return [
      `What is the price for ${category}?`,
      `How long does ${category} take to complete?`,
      `What is included in your ${category} package?`,
      `Do you offer custom packages for ${category}?`,
      `Are you available for ${category} on my preferred date?`
    ];
  }

  function generateFaqHTML(serviceId, category) {
    const s = SERVICES_DATA[serviceId] || { name: '', icon: '❓' };
    const itemsHTML = faqQuestions(category).map(q => `
      <button class="faq-item" data-service-id="${serviceId}" data-category="${category}" data-question="${q.replace(/"/g, '&quot;')}">
        <span class="faq-q">${q}</span>
        <span class="faq-arrow">${QUESTION_ICON}</span>
      </button>
    `).join('');

    return `
      <div class="faq-view">
        <button class="btn btn-ghost btn-back" id="btnFaqBack" aria-label="Back to ${s.name || 'Services'}" title="Back"><svg viewBox="0 0 24 24" fill="none" class="btn-ico"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="quote-hero">
          <div class="quote-hero-icon">${s.icon || '❓'}</div>
          <span class="quote-hero-badge">FAQ</span>
          <h2>${category}</h2>
          <p>${s.name || ''}</p>
        </div>
        <div class="faq-list">${itemsHTML}</div>
        <form class="faq-form glass" id="faqForm">
          <div class="form-group">
            <label>Have another question?</label>
            <textarea name="q" rows="3" placeholder="Type your question here..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary faq-send">${WA_ICON}<span>Send on WhatsApp</span></button>
        </form>
      </div>`;
  }

  function showFaq(serviceId, category) {
    const grid = document.getElementById('servicesMainGrid');
    const container = document.getElementById('serviceDetailContainer');
    if (!container) return;
    if (grid) grid.style.display = 'none';
    container.innerHTML = generateFaqHTML(serviceId, category);
    container.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('btnFaqBack')?.addEventListener('click', () => showServiceDetail(serviceId));
    document.getElementById('faqForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = (new FormData(e.target).get('q') || '').toString().trim();
      if (!q) return;
      sendFaqQuestion(serviceId, category, q, true);
    });
  }

  function sendFaqQuestion(serviceId, category, question, isCustom) {
    const s = SERVICES_DATA[serviceId] || { name: '' };
    let msg = `Hello ZOHO Team 👋\n\n❓ *FAQ — ${s.name}*\nCategory: ${category}\n\n`;
    msg += isCustom ? `My Question:\n${question}\n` : `Q: ${question}\n`;
    msg += `\nPlease answer. Thank you!`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // MOBILE NAV
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // SOCIAL ICON CLICK POP
  document.querySelectorAll('.icon-btn, .social-link-lg').forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.remove('clicked');
      void el.offsetWidth; // restart animation
      el.classList.add('clicked');
      setTimeout(() => el.classList.remove('clicked'), 460);
    });
  });

  // REVEAL ANIMATIONS
  function initRevealAnimations() {
    const els = document.querySelectorAll('[data-reveal]:not(.revealed)');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed'));
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      els.forEach(el => obs.observe(el));
    } else {
      els.forEach(el => el.classList.add('revealed'));
    }
  }

  // EVENT DELEGATION
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.service-main-card');
    if (card) {
      e.preventDefault();
      showServiceDetail(card.dataset.service);
      return;
    }

    const faqItem = e.target.closest('.faq-item');
    if (faqItem) {
      e.preventDefault();
      sendFaqQuestion(faqItem.dataset.serviceId, faqItem.dataset.category, faqItem.dataset.question, false);
      return;
    }

    const enq = e.target.closest('.btn-enquire');
    if (enq) {
      e.preventDefault();
      showFaq(enq.dataset.serviceId, enq.dataset.category);
      return;
    }

    const quo = e.target.closest('.btn-quote');
    if (quo) {
      e.preventDefault();
      showQuoteForm(quo.dataset.serviceId, quo.dataset.category);
      return;
    }

    const copy = e.target.closest('.copy-btn');
    if (copy) {
      e.preventDefault();
      const txt = copy.dataset.copy;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(txt).then(() => {
          const orig = copy.textContent;
          copy.textContent = 'Copied!';
          setTimeout(() => copy.textContent = orig, 2000);
        });
      }
    }
  });

  // NAVBAR SCROLL
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.pageYOffset > 50);
    });
  }

  // INIT
  initRevealAnimations();
  console.log('✅ ZOHO Initialized - 73 Subcategories Ready');
})();
