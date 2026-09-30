import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, absUrl } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: '漫画分类',
  description: `在${SITE.name}浏览海量日漫、韩漫、国漫分类：热血、恋爱、奇幻、悬疑、搞笑等应有尽有，找到你最爱的那部漫画。`,
  alternates: { canonical: absUrl('/comics') },
};

const groups = [
  {
    name: '日漫专区',
    emoji: '🍥',
    desc: '经典与连载日漫高清连载同步',
    items: ['热血少年', '校园恋爱', '奇幻冒险', '科幻机甲', '治愈日常'],
  },
  {
    name: '韩漫专区',
    emoji: '🌸',
    desc: '画风唯美的韩漫海量一站畅读',
    items: ['都市恋爱', '狗血爽文', '古代言情', '悬疑惊悚', '重生逆袭'],
  },
  {
    name: '国漫专区',
    emoji: '🐉',
    desc: '东方国风精品原创国漫精选',
    items: ['玄幻修仙', '武侠江湖', '都市异能', '搞笑日常', '青春成长'],
  },
];

export default function ComicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
          {SITE.name}漫画分类
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          覆盖日漫、韩漫、国漫全品类，海量高清资源分类清晰，总有一部作品让你一见倾心。
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.name}
            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{g.emoji}</span>
              <div>
                <h2 className="text-lg font-extrabold text-slate-800">
                  {g.name}
                </h2>
                <p className="text-xs text-slate-400">{g.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-bold text-slate-800">
          想看的漫画都在这里
        </h3>
        <p className="max-w-xl text-sm text-slate-500">
          立即下载 {SITE.name} App，解锁全部漫画分类与高清资源，随时随地畅快追更。
        </p>
        <DownloadButton label="获取下载地址" size="lg" />
        <div className="mt-2">
          <Link href="/" className="text-sm text-amber-600 hover:underline">
            返回首页 →
          </Link>
        </div>
      </div>
    </div>
  );
}