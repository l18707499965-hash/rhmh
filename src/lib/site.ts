// 站点全局配置：集中管理品牌、下载链接、统计 ID 与站点元信息
export const SITE = {
  name: '日韩漫画',
  shortName: '日韩漫画',
  slogan: '海量日漫 · 韩漫 · 二次元在线看',
  description:
    '日韩漫画是专为二次元爱好者打造的漫画阅读平台，聚合海量日漫、韩漫、国漫高清资源，支持在线看、离线缓存、漫画订阅，极速加载，界面清爽，让你畅享每一部作品。',
  keywords: [
    '日韩漫画',
    '日漫',
    '韩漫',
    '漫画',
    '免费漫画',
    '在线漫画',
    '漫画下载',
    'comic',
    'manga',
    'manhwa',
  ],
  // 对外访问域名（由沙箱注入，禁止硬编码）
  url:
    process.env.COZE_PROJECT_DOMAIN_DEFAULT ||
    'https://47924d78-4ddb-49c0-88c4-81437259bfbf.dev.coze.site',
  // iOS 桌面图标 / 安卓 APK 下载地址
  downloadUrl:
    'https://bos.liao-hai.chat/manhua/%e6%97%a5%e9%9f%a9%e6%bc%ab%e7%94%bb.apk',
  // 百度统计 ID
  baiduStatId: '2726192ba946001494d06f0add907194',
  copyright: '© 日韩漫画 保留所有权利',
};

// 辅助：拼接绝对 URL
export const absUrl = (path = '') => `${SITE.url}${path}`;