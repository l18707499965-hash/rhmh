import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

const cols = [
  {
    title: '快速导航',
    links: [
      { href: '/', label: '首页' },
      { href: '/download', label: 'App下载' },
      { href: '/comics', label: '漫画分类' },
    ],
  },
  {
    title: '了解更多',
    links: [
      { href: '/features', label: '特色功能' },
      { href: '/about', label: '关于我们' },
      { href: '/faq', label: '常见问题' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-amber-50/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
            />
            <span className="text-lg font-extrabold text-amber-600">
              {SITE.name}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {SITE.description}
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold text-slate-700">{col.title}</h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 transition-colors hover:text-amber-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-amber-100">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-slate-400">
          <p>{SITE.copyright} · 本站内容仅供个人学习与交流，请文明交友、理性阅读</p>
        </div>
      </div>
    </footer>
  );
}