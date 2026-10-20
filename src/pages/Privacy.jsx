import { useState } from 'react';
import PageBanner from '../PageBanner';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useScrollTop } from '../hooks';

function buildSections(company) {
  return [
    {
      h: '1. Introduction',
      p: [
        `This Privacy Policy explains how ${company.legalName} ("${company.name}", "we", "us") collects, uses, stores and protects information when you visit our website or contact us. By using this website, you agree to the practices described in this policy.`,
      ],
    },
    {
      h: '2. Information We Collect',
      p: [
        'Information you provide to us: when you submit the inquiry / quote form or subscribe to our newsletter, we collect the details you enter, such as your name, email address, company name and message content.',
        'Information collected automatically: when you browse the website, we may collect technical data such as your IP address, browser type, device information, pages visited and referral source through cookies and similar technologies (see Section 4).',
      ],
    },
    {
      h: '3. How We Use Your Information',
      p: [
        'To respond to your inquiries and provide quotations;',
        'To process and deliver your orders and BOM requests;',
        'To send you newsletters or product updates you have requested;',
        'To improve our website content, user experience and customer service;',
        'To comply with legal obligations and prevent fraud.',
      ],
    },
    {
      h: '4. Cookies and Similar Technologies',
      p: [
        'We use cookies to remember your preferences, understand how the website is used, and improve its performance. The categories of cookies we may use are:',
        'Necessary cookies — required for the basic functioning of the website. These cannot be disabled.',
        'Analytics cookies — help us understand how visitors interact with the website (e.g. page views, traffic sources). These are only activated after you give your consent via the cookie banner.',
        'You can accept or decline non-necessary cookies at any time through the cookie banner. You can also clear cookies through your browser settings.',
      ],
    },
    {
      h: '5. Third-Party Services',
      p: [
        'We may use third-party analytics providers (such as Google Analytics, Google Tag Manager or Matomo) to measure site traffic. These providers may process data collected by cookies under their own privacy policies. We do not sell your personal information to third parties.',
      ],
    },
    {
      h: '6. Data Retention and Security',
      p: [
        'We retain inquiry and order information only as long as necessary for the purposes described in this policy or as required by applicable law. We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure or destruction.',
      ],
    },
    {
      h: '7. Your Rights',
      p: [
        'Depending on your jurisdiction (including the EU GDPR and China PIPL), you may have the right to access, correct, delete or restrict the processing of your personal data, and to object to or withdraw consent for processing at any time. To exercise any of these rights, contact us using the details below.',
      ],
    },
    {
      h: "8. Children's Privacy",
      p: [
        'Our website is not directed to children under the age of 16, and we do not knowingly collect personal information from children.',
      ],
    },
    {
      h: '9. Changes to This Policy',
      p: [
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.',
      ],
    },
    {
      h: '10. Contact Us',
      p: [
        'If you have any questions about this Privacy Policy or your personal data, please contact us at:',
        company.legalName,
        'Room 2501-2503, Tower A, New Asia Guoli Building, No. 18 Zhonghang Road, Futian District, Shenzhen, Guangdong, China. 518031',
        'Email: Jessie@yixinouchips.com',
        'Tel: +86 18516133798',
      ],
    },
  ];
}

export default function Privacy() {
  const { t } = useI18n();
  const { company } = useConfig();
  useScrollTop();
  const sections = buildSections(company);

  return (
    <>
      <PageBanner
        img="/assets/images/about-sidebanner.jpg"
        title={t('privacy.bannerTitle')}
        crumb={{ href: '/privacy', label: t('privacy.bannerTitle') }}
      />
      <div className="container main privacy-page">
        <article>
          {/* the page <h1> lives in PageBanner, so this repeats at h2 level */}
          <h2>{t('privacy.bannerTitle')}</h2>
          <p className="privacy-updated">
            <em>Effective date: September 2026</em>
          </p>
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={`${s.h}-${i}`}>{para}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
