import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';

const nav = [
  { href: '/', label: '首页' },
  { href: '/download', label: 'App下载' },
  { href: '/comics', label: '漫画分类' },
  { href: '/features', label: '特色功能' },
  { href: '/about', label: '关于我们' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt={`${SITE.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl"
            priority
          />
          <span className="text-lg font-extrabold text-amber-600">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="主导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0">
          <DownloadButton label="立即下载" className="scale-90" />
        </div>
      </div>

      {/* 移动端底部快捷下载 */}
      <div className="border-t border-amber-100 p-2 md:hidden">
        <nav className="flex items-center justify-around" aria-label="移动导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-slate-600 active:text-amber-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}