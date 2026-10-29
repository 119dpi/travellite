// 자동 생성(scripts/make_sw.mjs). 앱 파일을 폰에 저장해서 오프라인에서도 열리게
const CACHE = 'tl-3dbc3fe437'
const FILES = ["./apple-touch-icon.png","./assets/engine.worker-DIcKQL8D.js","./assets/index-CxC9q61W.js","./assets/index-DREQNTEg.css","./assets/metromap-TKP-bHGw.js","./assets/metromap-fukuoka-gWyLcOHO.js","./assets/metromap-tokyo-Col1xJYj.js","./assets/stationinfo-fJ4Q4AjE.js","./cat/etc.png","./cat/food.png","./cat/move.png","./cat/shop.png","./cat/sight.png","./cat/stay.png","./clock/cap.png","./clock/dial.jpg","./clock/disc.jpg","./frog-open.png","./frog.png","./hero-boy.png","./hero-girl.png","./ic/card.png","./ic/clauty.png","./ic/exchange.png","./ic/fund.png","./ic/me.png","./ic/together.png","./ic/wallet.png","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./pack/adapter.png","./pack/adapter2.png","./pack/battery.png","./pack/bg_bag_closed.png","./pack/bg_bag_fold.png","./pack/bg_case_closed.png","./pack/bg_case_fold.png","./pack/bottle.png","./pack/camera.png","./pack/cap.png","./pack/card.png","./pack/cash.png","./pack/charger.png","./pack/comb.png","./pack/cosmetics.png","./pack/dutyfree.png","./pack/ecobag.png","./pack/gift.png","./pack/glasses.png","./pack/insurance.png","./pack/liquidbag.png","./pack/lock.png","./pack/medicine.png","./pack/note.png","./pack/other.png","./pack/pass.png","./pack/passport.png","./pack/phone.png","./pack/pillow.png","./pack/razor.png","./pack/room.png","./pack/shoes.png","./pack/sim.png","./pack/socks.png","./pack/sunglasses.png","./pack/ticket.png","./pack/toiletry.png","./pack/top.png","./pack/towel.png","./pack/umbrella.png","./pack/underwear.png","./pack/visitjapan.png","./purse-open.png","./purse.png","./theme/kobe/bg.jpg","./theme/kobe/m1.png","./theme/kobe/m2.png","./theme/kobe/m3.png","./theme/kobe/m4.png","./theme/kobe/m5.png","./theme/kobe/m6.png","./theme/kyoto/bg.jpg","./theme/kyoto/m1.png","./theme/kyoto/m2.png","./theme/kyoto/m3.png","./theme/kyoto/m4.png","./theme/kyoto/m5.png","./theme/kyoto/m6.png","./theme/nara/bg.jpg","./theme/nara/m1.png","./theme/nara/m2.png","./theme/nara/m3.png","./theme/nara/m4.png","./theme/nara/m5.png","./theme/nara/m6.png","./theme/osaka/bg.jpg","./theme/osaka/m1.png","./theme/osaka/m2.png","./theme/osaka/m3.png","./theme/osaka/m4.png","./theme/osaka/m5.png","./theme/osaka/m6.png"]
self.addEventListener('install', (e) => {
  // cache: 'reload' = 브라우저에 담아 둔 옛 파일 말고 서버에서 새로(GitHub Pages는 10분 담아 둠)
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()))
})
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('tl-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()))
})
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url)
  // 💬 클로티 폰 엔진(파이썬 Pyodide + 엔진 묶음): 한 번 받으면 따로 이름 붙인 보관함에(앱 업데이트에도 남음) — 인터넷 없이도
  if (e.request.method === 'GET' && ((u.hostname === 'cdn.jsdelivr.net' && u.pathname.startsWith('/pyodide/')) || (u.origin === location.origin && u.pathname.includes('/clauty/engine.zip')))) { // engine.json(버전)은 늘 인터넷에서
    e.respondWith(caches.open('clauty-engine').then((c) => c.match(e.request, { ignoreSearch: false }).then((r) => r || fetch(e.request).then((res) => { if (res.ok) c.put(e.request, res.clone()); return res }))))
    return
  }
  if (e.request.method !== 'GET' || u.origin !== location.origin) return // 환율 등 바깥 요청은 그대로
  if (u.pathname.includes('/api/')) return
  if (u.pathname.endsWith('/version.json') || u.pathname.endsWith('/release.json')) return // 새 버전·알림 번호 확인은 늘 인터넷에서
  if (u.pathname.includes('/pachi/') && !self.location.pathname.includes('/pachi/')) return // 파칭코 전용 앱(/pachi/)은 그 앱 서비스 워커가
  // 화면 이동도 저장본을 바로(신호 약한 지하에서 기다리지 않게). 새 버전은 서비스 워커 업데이트로 다음에 열 때 반영
  if (e.request.mode === 'navigate') {
    e.respondWith(caches.match(new URL('./', self.location).href).then((r) => r || fetch(e.request)))
    return
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)))
})
// 웹 푸시(새 버전 알림): 알림 띄우고 앱 아이콘 배지 1, 새 버전도 미리 받아 둠
self.addEventListener('push', (e) => {
  let d = {}
  try { d = e.data ? e.data.json() : {} } catch {}
  e.waitUntil(Promise.all([
    self.registration.showNotification(d.title || '여행간사이', { body: d.body || '', tag: d.tag || 'update', icon: './icon-192.png', badge: './icon-192.png', data: { url: d.url || './' } }),
    self.navigator && self.navigator.setAppBadge ? self.navigator.setAppBadge(1).catch(() => {}) : null,
    d.tag === 'update' ? self.registration.update().catch(() => {}) : null,
  ]))
})
self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  const url = (e.notification.data && e.notification.data.url) || './' // ⏳ 공금 확인 요청은 './#fundq' → 앱이 영수증을 엶
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => (cs[0] ? (url !== './' && cs[0].navigate ? cs[0].navigate(new URL(url, self.registration.scope).href).then((c) => c && c.focus()) : cs[0].focus()) : self.clients.openWindow(url))))
})
