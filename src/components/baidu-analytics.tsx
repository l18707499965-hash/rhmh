'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { SITE } from '@/lib/site';

/**
 * 百度统计：根据百度统计 ID 加载统计脚本
 */
export function BaiduAnalytics() {
  useEffect(() => {
    const id = SITE.baiduStatId;
    if (!id) return;
    (window as unknown as Record<string, unknown>)._hmt =
      (window as unknown as Record<string, unknown>)._hmt || [];
    const hm = document.createElement('script');
    hm.src = `https://hm.baidu.com/hm.js?${id}`;
    const s = document.getElementsByTagName('script')[0];
    s?.parentNode?.insertBefore(hm, s);
  }, []);

  return (
    <Script
      id="baidu-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${SITE.baiduStatId}";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
        `,
      }}
    />
  );
}