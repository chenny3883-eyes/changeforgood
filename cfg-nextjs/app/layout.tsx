import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import ChatBot from '@/components/ChatBot';

export const metadata: Metadata = {
  title: 'Change For Good Consulting',
  description: 'Strategies that transform. Results that endure.',
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.cfgconsultingph.com/#organization',
      name: 'Change For Good Consulting',
      url: 'https://www.cfgconsultingph.com',
      logo: 'https://www.cfgconsultingph.com/photos/cfg-logo-transparent.png',
      email: 'chenny@cfgconsultingph.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit No. 5401, Corporate Finance Plaza, Ruby & Topaz Road',
        addressLocality: 'Ortigas Center, Pasig City',
        addressCountry: 'PH',
      },
      sameAs: ['https://www.linkedin.com/in/chenny-galano'],
      description: 'Change For Good Consulting is a Philippine-based strategy and leadership consulting firm helping organisations and leaders transform with clarity, courage, and lasting results.',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.cfgconsultingph.com/#localbusiness',
      name: 'Change For Good Consulting',
      url: 'https://www.cfgconsultingph.com',
      telephone: '',
      email: 'chenny@cfgconsultingph.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit No. 5401, Corporate Finance Plaza, Ruby & Topaz Road',
        addressLocality: 'Ortigas Center, Pasig City',
        addressCountry: 'PH',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 14.5876,
        longitude: 121.0581,
      },
      priceRange: '$$',
      areaServed: { '@type': 'Country', name: 'Philippines' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.cfgconsultingph.com/#chenny',
      name: 'Chenny Galano',
      jobTitle: 'Founder & Principal Consultant',
      worksFor: { '@id': 'https://www.cfgconsultingph.com/#organization' },
      url: 'https://www.cfgconsultingph.com/about',
      sameAs: ['https://www.linkedin.com/in/chenny-galano'],
      description: 'Chenny Galano is a leadership consultant, executive coach, and organisational development practitioner based in the Philippines.',
    },
    {
      '@type': 'Person',
      '@id': 'https://www.cfgconsultingph.com/#jimbo',
      name: 'Jose Emmanuel Reverente',
      alternateName: 'Jimbo Reverente',
      jobTitle: 'Co-Founder & Systems Architect',
      worksFor: { '@id': 'https://www.cfgconsultingph.com/#organization' },
      url: 'https://www.cfgconsultingph.com/about',
      description: 'Jimbo Reverente is a systems architect, innovation strategist, and institution builder with experience across government, corporate finance, and academia in the Philippines.',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.cfgconsultingph.com/#services',
      name: 'Strategy and Leadership Consulting',
      provider: { '@id': 'https://www.cfgconsultingph.com/#organization' },
      serviceType: ['Strategy Consulting', 'Leadership Development', 'Organisational Development', 'Executive Coaching', 'Innovation Consulting'],
      areaServed: { '@type': 'Country', name: 'Philippines' },
      url: 'https://www.cfgconsultingph.com/services',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <div className="site-wrap">
          <Nav />
          {children}
        </div>
        <ChatBot />
      </body>
    </html>
  );
}
