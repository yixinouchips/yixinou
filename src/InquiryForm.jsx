import { useState, useRef } from 'react';
import { useI18n } from './i18n';
import { CheckCircle2, AlertCircle, Mail, Send, RotateCcw } from 'lucide-react';

// Inquiry recipient
const INQUIRY_TO = 'Jessie@yixinouchips.com';

// Optional form backend endpoint. When set (e.g. a Formspree/Web3Forms/Cloudflare Worker URL),
// the inquiry is sent silently over HTTP instead of opening the mail client.
const INQUIRY_ENDPOINT = '';

export default function InquiryForm() {
  const { t } = useI18n();
  const [values, setValues] = useState({ email: '', name: '', company: '', message: '', _gotcha: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) {
      setErrors((prev) => ({ ...prev, [k]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    const emailTrim = values.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailTrim) {
      errs.email = t('inquiry.emailPh') || 'Please enter your email address';
    } else if (!emailRegex.test(emailTrim)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!values.message.trim()) {
      errs.message = t('inquiry.messagePh') || 'Please enter your message';
    }

    setErrors(errs);

    if (errs.email && emailInputRef.current) {
      emailInputRef.current.focus();
    } else if (errs.message && messageInputRef.current) {
      messageInputRef.current.focus();
    }

    return Object.keys(errs).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    // Honeypot bot check
    if (values._gotcha) return;

    if (!validate()) return;

    setSubmitting(true);

    const subject = `Website inquiry${values.name ? ` from ${values.name}` : ''}${values.company ? ` (${values.company})` : ''}`;
    const body = [
      `Name: ${values.name || '-'}`,
      `Company: ${values.company || '-'}`,
      `Email: ${values.email}`,
      '',
      'Message:',
      values.message,
      '',
      '---',
      `Sent from the YIXINOU website (${typeof window !== 'undefined' ? window.location.origin : ''})`,
    ].join('\n');

    if (INQUIRY_ENDPOINT) {
      try {
        const res = await fetch(INQUIRY_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email: values.email,
            name: values.name,
            company: values.company,
            message: values.message,
          }),
        });
        if (!res.ok) throw new Error('Network response was not ok');
      } catch {
        /* backend unreachable - fallback to mail client */
        openMailClient(subject, body);
      }
    } else {
      openMailClient(subject, body);
    }

    setSubmitting(false);
    setDone(true);
  };

  const openMailClient = (subject, body) => {
    window.location.href = `mailto:${INQUIRY_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const resetForm = () => {
    setValues({ email: '', name: '', company: '', message: '', _gotcha: '' });
    setErrors({});
    setDone(false);
  };

  if (done) {
    return (
      <div className="crm_inquiry_form_box" style={{ borderRadius: '8px', textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', marginBottom: '20px' }}>
          <CheckCircle2 size={36} />
        </div>
        <h2 className="inqury_title_text" style={{ fontSize: '24px', marginBottom: '12px' }}>
          {t('inquiry.title')}
        </h2>
        <p style={{ fontSize: '16px', color: '#4b5563', maxWidth: '480px', margin: '0 auto 24px', lineHeight: '1.6' }}>
          {t('inquiry.done')}
        </p>
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px 20px', maxWidth: '480px', margin: '0 auto 28px', textAlign: 'left', fontSize: '14px', color: '#4b5563' }}>
          <div style={{ fontWeight: '600', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={16} /> Direct Contact / 直接联系
          </div>
          <div>Recipient: <strong>{INQUIRY_TO}</strong></div>
          <div style={{ marginTop: '4px' }}>Your Email: {values.email}</div>
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => {
              const subject = `Website inquiry from ${values.name || values.email}`;
              const body = `Email: ${values.email}\nName: ${values.name || '-'}\nCompany: ${values.company || '-'}\n\nMessage:\n${values.message}`;
              openMailClient(subject, body);
            }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '6px', background: '#002a6c', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
          >
            <Send size={16} /> Resend via Email App
          </button>
          <button
            type="button"
            onClick={resetForm}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '6px', background: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
          >
            <RotateCcw size={16} /> Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="crm_inquiry_form_box" style={{ borderRadius: '8px' }}>
      <div className="container">
        <div className="inqury_title_box text-center">
          <h2 className="inqury_title_text">{t('inquiry.title')}</h2>
          <div className="inqury_titl_desc">{t('inquiry.desc')}</div>
        </div>
        <form className="inqury-form" noValidate onSubmit={submit}>
          {/* Honeypot field for bot spam prevention */}
          <input
            type="text"
            name="_gotcha"
            value={values._gotcha}
            onChange={set('_gotcha')}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="input-wrap text-wrap full">
            <label className="input-label required" htmlFor="inquiry-email">{t('inquiry.email')}</label>
            <div className="input-wrap-box">
              <input
                id="inquiry-email"
                ref={emailInputRef}
                name="email"
                type="email"
                className="one-line-input"
                placeholder={t('inquiry.emailPh')}
                required
                maxLength={100}
                value={values.email}
                onChange={set('email')}
                style={errors.email ? { borderColor: '#ef4444', boxShadow: '0 0 0 1px #ef4444' } : undefined}
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && (
              <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <AlertCircle size={14} /> {errors.email}
              </div>
            )}
          </div>

          <div className="input-wrap text-wrap full">
            <label className="input-label" htmlFor="inquiry-name">{t('inquiry.name')}</label>
            <div className="input-wrap-box">
              <input
                id="inquiry-name"
                name="name"
                type="text"
                className="one-line-input"
                placeholder={t('inquiry.namePh')}
                maxLength={100}
                value={values.name}
                onChange={set('name')}
              />
            </div>
          </div>

          <div className="input-wrap text-wrap full">
            <label className="input-label" htmlFor="inquiry-company">{t('inquiry.company')}</label>
            <div className="input-wrap-box">
              <input
                id="inquiry-company"
                name="company"
                type="text"
                className="one-line-input"
                placeholder={t('inquiry.companyPh')}
                maxLength={200}
                value={values.company}
                onChange={set('company')}
              />
            </div>
          </div>

          <div className="input-wrap textarea-wrap full">
            <label className="input-label required" htmlFor="inquiry-message">{t('inquiry.message')}</label>
            <textarea
              id="inquiry-message"
              ref={messageInputRef}
              name="message"
              cols="30"
              rows="6"
              className="textarea-input"
              maxLength={1000}
              placeholder={t('inquiry.messagePh')}
              required
              value={values.message}
              onChange={set('message')}
              style={errors.message ? { borderColor: '#ef4444', boxShadow: '0 0 0 1px #ef4444' } : undefined}
              aria-invalid={!!errors.message}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              {errors.message ? (
                <div style={{ color: '#ef4444', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={14} /> {errors.message}
                </div>
              ) : <div />}
              <span className="char-count" style={{ fontSize: '12px', color: '#9ca3af' }}>{values.message.length}/1000</span>
            </div>
          </div>

          <div className="input-wrap full">
            <div className="text-center">
              <button
                type="submit"
                className="inqury_submit submit"
                disabled={submitting}
                style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
              >
                {submitting ? 'Submitting...' : t('inquiry.submit')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
