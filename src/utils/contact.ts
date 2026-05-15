import { PERSONAL } from '@/utils/constants';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/** Opens the visitor's email client — fully local, no API. */
export function openContactMailto(data: ContactFormData): void {
  const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
  const body = encodeURIComponent(
    `Hi Avishek,\n\n${data.message}\n\n---\nFrom: ${data.name}\nReply-to: ${data.email}`,
  );
  window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
}
