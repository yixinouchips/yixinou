import { useState } from 'react';
import { useI18n } from './i18n';

// Inquiry recipient
const INQUIRY_TO = 'Jessie@yixinouchips.com';

// Optional form backend endpoint. When set (e.g. a Formspree/FormSubmit URL),
// the inquiry is sent silently over HTTP instead of opening the mail client.
const INQUIRY_ENDPOINT = '';

export default function InquiryForm() {
  const { t } = useI18n();
  const [values, setValues] = useState({ email: '', name: '', company: '', message: '' });
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!values.email.trim() || !values.message.trim()) return;

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
      fetch(INQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          company: values.company,
          message: values.message,
        }),
      }).catch(() => {
        /* backend unreachable - fall through to mail client */
        openMailClient(subject, body);
      });
    } else {
      openMailClient(subject, body);
    }
    setDone(true);
  };

  const openMailClient = (subject, body) => {
    window.location.href = `mailto:${INQUIRY_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (done) {
    return (
      <div className="crm_inquiry_form_box">
        <div className="container">
          <div className="inqury_title_box text-center">
            <h2 className="inqury_title_text">{t('inquiry.title')}</h2>
            <div className="inqury_titl_desc">{t('inquiry.desc')}</div>
          </div>
          <p className="inquiry-done">{t('inquiry.done')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="crm_inquiry_form_box">
      <div className="container">
        <div className="inqury_title_box text-center">
          <h2 className="inqury_title_text">{t('inquiry.title')}</h2>
          <div className="inqury_titl_desc">{t('inquiry.desc')}</div>
        </div>
        <form className="inqury-form" noValidate onSubmit={submit}>
          <div className="input-wrap text-wrap full">
            <div className="input-label required">{t('inquiry.email')}</div>
            <div className="input-wrap-box">
              <input
                name="email"
                type="email"
                className="one-line-input"
                placeholder={t('inquiry.emailPh')}
                required
                maxLength={100}
                value={values.email}
                onChange={set('email')}
              />
            </div>
          </div>
          <div className="input-wrap text-wrap full">
            <div className="input-label">{t('inquiry.name')}</div>
            <div className="input-wrap-box">
              <input
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
            <div className="input-label">{t('inquiry.company')}</div>
            <div className="input-wrap-box">
              <input
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
            <div className="input-label required">{t('inquiry.message')}</div>
            <textarea
              name="message"
              cols="30"
              rows="6"
              className="textarea-input"
              maxLength={1000}
              placeholder={t('inquiry.messagePh')}
              required
              value={values.message}
              onChange={set('message')}
            />
            <span className="char-count">{values.message.length}/1000</span>
          </div>
          <div className="input-wrap full">
            <div className="text-center">
              <button type="submit" className="inqury_submit submit">
                {t('inquiry.submit')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
