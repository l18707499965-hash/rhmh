import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE, absUrl } from '@/lib/site';
import { BaiduAnalytics } from '@/components/baidu-analytics';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s - ${SITE.name}官网`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name }],
  applicationName: SITE.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: absUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF8A00',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <BaiduAnalytics />
      </body>
    </html>
  );
}