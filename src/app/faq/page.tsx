import type { Metadata } from 'next';
import { SITE, absUrl } from '@/lib/site';
import { DownloadButton } from '@/components/download-button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: '常见问题',
  description: `${SITE.name}常见问题FAQ：如何下载安装App、支持哪些设备、如何离线缓存、漫画更新频率等一网打尽。`,
  alternates: { canonical: absUrl('/faq') },
};

const faqs = [
  {
    q: `${SITE.name}如何下载安装？`,
    a: `点击页面上的「获取下载地址」按钮即可获取${SITE.name}Android版安装包，下载完成后点击安装包，在系统提示时允许「安装未知来源应用」即可完成安装。`,
  },
  {
    q: '支持哪些设备？',
    a: '目前提供 Android 版安装包（APK），支持主流 Android 手机与平板设备。iOS 版本正在积极筹备中，敬请期待。',
  },
  {
    q: 'App 收费吗？',
    a: `${SITE.name}基础阅读完全免费，海量漫画资源免费畅读，无隐藏收费，放心使用。`,
  },
  {
    q: '如何离线缓存漫画？',
    a: '在漫画阅读页面点击「下载」按钮即可缓存当前章节或整部作品，缓存后的漫画可在无网络环境下离线阅读。',
  },
  {
    q: '漫画多久更新一次？',
    a: '热门连载漫画保持实时同步更新，站内资源每日持续补充，开启订阅提醒即可第一时间收到新章节推送。',
  },
  {
    q: '在阅读中遇到问题怎么办？',
    a: '如遇到加载失败、闪退等问题，可先尝试清理缓存或重启 App；若仍无法解决，欢迎通过官网联系我们反馈。',
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
          常见问题
        </h1>
        <p className="mt-3 text-slate-500">
          关于 {SITE.name} 的常见疑问，这里都有答案
        </p>
      </div>

      <Accordion type="single" collapsible className="mt-10 w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-semibold text-slate-800">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-14 flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">还有其他问题？</h2>
        <p className="text-sm text-slate-500">
          立即下载 {SITE.name}，开启畅快追漫之旅。
        </p>
        <DownloadButton label="获取下载地址" size="lg" />
      </div>
    </div>
  );
}