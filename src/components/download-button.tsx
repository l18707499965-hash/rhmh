'use client';

import { SITE } from '@/lib/site';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  label?: string;
  subLabel?: string;
  className?: string;
  size?: 'default' | 'lg';
}

/**
 * 下载按钮：点击跳转 APK 下载地址，并上报百度统计事件。
 */
export function DownloadButton({
  label = '获取下载地址',
  subLabel,
  className,
  size = 'default',
}: DownloadButtonProps) {
  const track = () => {
    try {
      const hmt = (window as unknown as Record<string, unknown[] | undefined>)
        ._hmt;
      hmt?.push?.(['_trackEvent', '下载', 'click', 'download']);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <a
        href={SITE.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={track}
        aria-label={`下载${SITE.name}App`}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-xl',
          size === 'lg'
            ? 'gap-2 px-8 py-3.5 text-base'
            : 'gap-1.5 px-5 py-2.5 text-sm',
        )}
      >
        <Download className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
        {label}
      </a>
      {subLabel && <span className="text-xs text-slate-500">{subLabel}</span>}
    </div>
  );
}