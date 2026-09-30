import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, absUrl } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';
import {
  Sparkles,
  BookOpen,
  Download,
  Zap,
  Shield,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: `${SITE.name} - ${SITE.slogan}`,
  description: SITE.description,
  alternates: { canonical: absUrl('/') },
  openGraph: {
    type: 'website',
    title: `${SITE.name} - ${SITE.slogan}`,
    description: SITE.description,
    url: absUrl('/'),
    siteName: SITE.name,
    locale: 'zh_CN',
  },
};

const features = [
  {
    icon: BookOpen,
    title: '海量国漫日漫韩漫',
    desc: '聚合日漫、韩漫、国漫海量高清资源，每天更新，热门连载第一时间同步。',
  },
  {
    icon: Zap,
    title: '极速加载',
    desc: '智能图源调度，翻页流畅不卡顿，秒开高清漫画页，畅滑阅读体验。',
  },
  {
    icon: Download,
    title: '离线缓存下载',
    desc: '支持章节离线缓存，地铁、飞行途中无网也能随心追更。',
  },
  {
    icon: Sparkles,
    title: '漫画订阅提醒',
    desc: '收藏并订阅喜爱的作品，新章节上线第一时间推送提醒，不再错过更新。',
  },
  {
    icon: Shield,
    title: '安全纯净',
    desc: '无广告弹窗打扰，纯净阅读环境，账号数据安全加密保护。',
  },
  {
    icon: Smartphone,
    title: '多端适配',
    desc: '手机、平板完美适配，横竖屏随心切换，体验流畅细腻。',
  },
];

const categories = [
  { name: '热血日漫', emoji: '🔥', href: '/download' },
  { name: '唯美韩漫', emoji: '🌸', href: '/download' },
  { name: '恋爱漫画', emoji: '💗', href: '/download' },
  { name: '奇幻冒险', emoji: '⚔️', href: '/download' },
  { name: '搞笑日常', emoji: '😂', href: '/download' },
  { name: '悬疑推理', emoji: '🕵️', href: '/download' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              <Sparkles className="h-3.5 w-3.5" />
              超人气漫画阅读平台
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl">
              {SITE.name}
              <span className="block text-amber-600">海量日漫 · 韩漫免费看</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-500 md:text-lg">
              一键下载 {SITE.name} App，畅享海量高清漫画资源，支持离线缓存、漫画订阅与极速阅读，专为二次元爱好者精心打造。
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 md:items-start">
              <DownloadButton
                label="获取下载地址"
                subLabel="Android 版 · 免费下载"
                size="lg"
              />
            </div>
            <p className="mt-6 text-xs text-slate-400">
              支持 Android / iOS 设备 · 无广告 · 每日更新
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-amber-200/60 ring-1 ring-amber-100">
              <Image
                src="/logo.png"
                alt={`${SITE.name} App 图标`}
                width={260}
                height={260}
                className="h-56 w-56 rounded-2xl object-cover md:h-64 md:w-64"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 漫画分类 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-slate-800 md:text-3xl">
            热门漫画分类
          </h2>
          <p className="mt-2 text-slate-500">总有一部适合你的胃</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{c.emoji}</span>
                <span className="font-bold text-slate-700">{c.name}</span>
              </span>
              <ChevronRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* 特色功能 */}
      <section className="bg-amber-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-800 md:text-3xl">
              {SITE.name}特色功能
            </h2>
            <p className="mt-2 text-slate-500">为漫友而生，越用越懂你</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-800">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/features"
              className="text-sm font-semibold text-amber-600 hover:underline"
            >
              查看完整功能详情 →
            </Link>
          </div>
        </div>
      </section>

      {/* 下载 CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-2xl font-extrabold text-slate-800 md:text-3xl">
          现在就下载 {SITE.name}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          海量日漫、韩漫一站畅读，立即下载安装，开启你的漫画追更之旅。
        </p>
        <div className="mt-8 flex justify-center">
          <DownloadButton label="获取下载地址" size="lg" />
        </div>
      </section>
    </>
  );
}