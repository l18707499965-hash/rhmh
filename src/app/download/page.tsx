import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE, absUrl } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';
import { Check, Smartphone, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App下载',
  description: `下载${SITE.name}App，海量日漫韩漫高清免费看，支持离线缓存与漫画订阅，立即获取下载地址，畅享极致漫画阅读体验。`,
  alternates: { canonical: absUrl('/download') },
  openGraph: {
    type: 'website',
    title: `${SITE.name}App下载`,
    description: `下载${SITE.name}App，海量日漫韩漫免费看。`,
    url: absUrl('/download'),
    siteName: SITE.name,
  },
};

const steps = [
  '点击上方「获取下载地址」按钮',
  '系统跳转下载日韩漫画安装包',
  '允许安装后打开 App 立即畅读',
];

const benefits = [
  '海量高清日漫韩漫资源',
  '极速加载 · 离线缓存',
  '无广告纯净阅读',
  '漫画订阅更新提醒',
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl shadow-amber-200/60 ring-1 ring-amber-100">
            <Image
              src="/logo.png"
              alt={`${SITE.name} App图标`}
              width={80}
              height={80}
              className="h-20 w-20 rounded-2xl object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
            {SITE.name} App 下载
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            海量日漫、韩漫高清资源免费畅读，支持离线缓存与订阅更新，立即下载体验最纯净的漫画阅读平台。
          </p>

          <div className="mt-8 flex justify-center">
            <DownloadButton
              label="获取下载地址"
              subLabel="Android · 免费无广告"
              size="lg"
            />
          </div>
        </div>

        {/* 下载步骤 */}
        <div className="mt-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
          <h2 className="text-xl font-extrabold text-slate-800">下载步骤</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-slate-600">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 应用优势 */}
        <div className="mt-8 rounded-3xl bg-amber-50 p-8">
          <h2 className="text-xl font-extrabold text-slate-800">{SITE.name}优势</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-slate-600">
                <Check className="h-4 w-4 text-amber-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* 说明 */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-amber-100 p-6 text-center">
          <div className="flex items-center gap-2 text-amber-600">
            <Smartphone className="h-5 w-5" />
            <span className="font-semibold">支持设备</span>
          </div>
          <p className="text-sm text-slate-500">
            本下载链接为 Android 版安装包（APK），支持主流 Android 手机/平板设备。iOS 用户请持续关注官网更新。
          </p>
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-1 text-xs text-slate-400">万千漫友的选择</span>
          </div>
        </div>
      </div>
    </div>
  );
}