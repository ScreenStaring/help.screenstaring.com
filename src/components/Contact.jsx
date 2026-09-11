import {useEffect, useState} from 'react';

// The address is assembled at runtime from parts so that the site's static
// HTML never contains the plaintext email/phone. Scrapers that only fetch the
// HTML (the vast majority) find nothing; the value is only revealed in the
// browser, after a short delay that also defeats naive "snapshot on load"
// harvesters. This is a deterrent, not a guarantee: anything shown in a
// browser can be read by a determined scraper or a human. For stronger
// protection, put the site behind Cloudflare and enable its free "Email
// Address Obfuscation" feature, which rewrites mailto: links at the edge.
const EMAIL_PARTS = ['hel', 'p@', 'scr', 'eens', 'tar', 'ing', '.com'];
const PHONE_PARTS = ['+1 (626) 227 ', '5433'];

function useReveal(parts) {
  const [value, setValue] = useState();
  useEffect(() => {
    const timer = setTimeout(() => setValue(parts.join('')), 200);
    return () => clearTimeout(timer);
  }, [parts]);
  return value;
}

export function SupportEmail({subject, children, className}) {
  const email = useReveal(EMAIL_PARTS);
  if (!email) {
    return <span className={className}>{children ?? 'email us'}</span>;
  }
  const href = `mailto:${email}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ''
  }`;
  return (
    <a className={className} href={href}>
      {children ?? email}
    </a>
  );
}

export function SupportPhone({children, className}) {
  const phone = useReveal(PHONE_PARTS);
  if (!phone) {
    return <span className={className}>{children ?? 'call us'}</span>;
  }
  const href = `tel:${phone.replace(/[^\d+]/g, '')}`;
  return (
    <a className={className} href={href}>
      {children ?? phone}
    </a>
  );
}
