import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '页面未找到',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-extrabold text-amber-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-800">
        抱歉，您访问的页面不存在
      </h1>
      <p className="mt-2 text-slate-500">
        该链接可能已失效，或内容已移动。
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-amber-500 px-6 py-2.5 font-bold text-white transition-transform hover:scale-105"
      >
        返回 {SITE.name} 首页
      </Link>
    </div>
  );
}