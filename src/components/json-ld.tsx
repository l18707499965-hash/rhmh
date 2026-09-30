import { SITE } from '@/lib/site';

/**
 * 结构化数据 (JSON-LD)：提供 Organization、WebSite 语义，辅助谷歌/必应理解站点。
 */
const AppJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      logo: `${SITE.url}/logo.png`,
    },
    {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      inLanguage: 'zh-CN',
    },
    {
      '@type': 'SoftwareApplication',
      name: SITE.name,
      operatingSystem: 'Android',
      applicationCategory: 'EntertainmentApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
      description: SITE.description,
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(AppJsonLd) }}
    />
  );
}