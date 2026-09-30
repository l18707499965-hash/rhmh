import type { Metadata } from 'next';
import { SITE, absUrl } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';
import { BookOpen, Download, Zap, Shield, Smartphone, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '特色功能',
  description: `了解${SITE.name}App特色功能：海量日漫韩漫资源、离线缓存下载、漫画订阅提醒、极速加载与纯净无广告阅读体验。`,
  alternates: { canonical: absUrl('/features') },
};

const features = [
  {
    icon: BookOpen,
    title: '海量高清漫画库',
    desc: '聚合日漫、韩漫、国漫上亿篇幅高清资源，热门连载与经典老番一站尽收，满足不同口味漫友需求。',
  },
  {
    icon: Download,
    title: '章节离线缓存',
    desc: '一键缓存整部作品，无网也能离线畅读，通勤、旅行再也不怕断网。',
  },
  {
    icon: Zap,
    title: '极速智能加载',
    desc: '多线路智能接驳图源，翻页跟手不卡顿，秒开高清漫画，阅读体验丝般顺滑。',
  },
  {
    icon: Sparkles,
    title: '订阅与追更提醒',
    desc: '收藏喜爱的作品并开启订阅，新章节上线立即推送提醒，追更永不错过。',
  },
  {
    icon: Shield,
    title: '纯净安全无广告',
    desc: '严格控制广告干扰，纯净阅读界面，账号与数据安全加密，用得安心。',
  },
  {
    icon: Smartphone,
    title: '多端多屏适配',
    desc: '手机、平板、横竖屏自由切换，护眼深色模式，夜间阅读更舒适。',
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
          {SITE.name}特色功能
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          专注打磨每一个阅读细节，只为让漫友享受更纯粹的漫画时光。
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <f.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg font-extrabold text-slate-800">
              {f.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-bold text-slate-800">体验全部功能</h3>
        <p className="max-w-xl text-sm text-slate-500">
          立即下载 {SITE.name} App，解锁完整漫画阅读体验。
        </p>
        <DownloadButton label="获取下载地址" size="lg" />
      </div>
    </div>
  );
}