import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE, absUrl } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: '关于我们',
  description: `关于${SITE.name}：了解我们是谁、我们坚持的产品理念，以及为漫友打造纯净阅读平台的初心。`,
  alternates: { canonical: absUrl('/about') },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg shadow-amber-200/50 ring-1 ring-amber-100">
          <Image
            src="/logo.png"
            alt={`${SITE.name} logo`}
            width={64}
            height={64}
            className="h-16 w-16 rounded-xl object-cover"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
          关于 {SITE.name}
        </h1>
        <p className="mt-3 text-slate-500">
          让每一位漫友都能轻松畅享优质漫画
        </p>
      </div>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-600">
        <p>
          {SITE.name} 是一款专注于日漫、韩漫、国漫阅读的漫画 App，
          我们汇聚了海量高清漫画资源，覆盖热血、恋爱、奇幻、悬疑、搞笑等丰富题材，致力于为二次元爱好者提供极致的追漫体验。
        </p>
        <p>
          自上线以来，{SITE.name}
          始终坚持「纯净、极速、海量、贴心」的产品理念：去除无效广告干扰，采用智能图源调度实现秒开加载，
          支持离线缓存与漫画订阅更新提醒，让每一次阅读都轻松、畅快、沉浸。
        </p>
        <p>
          我们相信，好的漫画能连接人与情感。未来，{SITE.name}{' '}
          将持续扩充漫画库、优化阅读体验，陪伴每一位漫友度过美好的追漫时光。
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-amber-50 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">加入我们，一起追漫</h2>
        <p className="text-sm text-slate-500">
          {SITE.description}
        </p>
        <DownloadButton label="获取下载地址" size="lg" />
      </div>
    </div>
  );
}