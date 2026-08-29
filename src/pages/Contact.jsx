import React, { useState } from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import './Contact.css';

const INITIAL = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim())         errors.name    = 'Please enter your name.';
  if (!fields.email.trim())        errors.email   = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                   errors.email   = 'Please enter a valid email address.';
  if (!fields.message.trim())      errors.message = 'Please enter your message.';
  return errors;
}

export default function Contact() {
  const [fields, setFields]     = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Frontend-only: no server submission at this stage
    setSubmitted(true);
    setFields(INITIAL);
    setErrors({});
  };

  return (
    <main className="page-main contact-page">
      <div className="container">

        <div className="contact-header">
          <ScrollReveal>
            <p className="eyebrow">Contact</p>
            <h1 className="contact-header__title serif">Get in touch</h1>
            <p className="contact-header__sub">
              Have a question about a fragrance, or want to know more about HEVON SCENTS?
            </p>
          </ScrollReveal>
        </div>

        <div className="contact-layout">
          {/* Info */}
          <ScrollReveal className="contact-info">
            <ul className="contact-info__list">
              <li className="contact-info__item">
                <span className="eyebrow contact-info__label">Email</span>
                {/* [EMAIL — ADD VERIFIED DATA] */}
                <a href="mailto:hello@hevonscents.com" className="contact-info__link">
                  hello@hevonscents.com
                </a>
              </li>
              <li className="contact-info__item">
                <span className="eyebrow contact-info__label">Instagram</span>
                {/* [INSTAGRAM — ADD VERIFIED DATA] */}
                <a href="#instagram" className="contact-info__link" rel="noopener noreferrer">
                  @hevonscents
                </a>
              </li>
              <li className="contact-info__item">
                <span className="eyebrow contact-info__label">Response time</span>
                <p className="contact-info__text">Within 24–48 hours</p>
              </li>
            </ul>
          </ScrollReveal>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="alert">
                <div className="contact-success__icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="contact-success__title serif">Message received.</h2>
                <p className="contact-success__sub">
                  We'll be in touch shortly.
                </p>
                <button
                  className="contact-success__reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={onSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label eyebrow">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      value={fields.name}
                      onChange={onChange}
                      autoComplete="name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="form-error" role="alert">{errors.name}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label eyebrow">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      value={fields.email}
                      onChange={onChange}
                      autoComplete="email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="form-error" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label eyebrow">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    value={fields.subject}
                    onChange={onChange}
                    placeholder="e.g. Question about RAGE"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label eyebrow">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    value={fields.message}
                    onChange={onChange}
                    rows={7}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="form-error" role="alert">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                  <span className="btn__inner">Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
