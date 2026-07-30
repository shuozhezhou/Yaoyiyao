/* 爻一爻 · Service Worker
 * HTML 网络优先（在线always最新，离线回退缓存）；静态资源缓存优先。
 */
const CACHE = 'yaoyiyao-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isHTML) {
    // 网络优先：拿最新的 index.html；离线时回退缓存
    e.respondWith(
      fetch(req).then(resp => {
        const cp = resp.clone();
        caches.open(CACHE).then(c => c.put('./index.html', cp));
        return resp;
      }).catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
  } else {
    // 静态资源：缓存优先
    e.respondWith(
      caches.match(req).then(r => r || fetch(req).then(resp => {
        const cp = resp.clone();
        caches.open(CACHE).then(c => c.put(req, cp));
        return resp;
      }))
    );
  }
});
