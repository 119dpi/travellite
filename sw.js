// 자동 생성(scripts/make_sw.mjs). 앱 파일을 폰에 저장해서 오프라인에서도 열리게
const CACHE = 'tl-80dd25c0cc'
const FILES = ["./apple-touch-icon.png","./assets/Pachi-BpEby6Hc.css","./assets/Pachi-DlB-Xk03.js","./assets/ball-CNKGjRN5.png","./assets/base-DD_jb8Wn.png","./assets/bgm-Da2ImwFM.m4a","./assets/bgm2-Dcw0-D6D.m4a","./assets/bgm3-DRQZmeeZ.m4a","./assets/bgm4-DPtwZR1H.m4a","./assets/frame-Dmj5GLFb.png","./assets/gate_tulip-oGoOum3H.png","./assets/index-BBl67cz8.js","./assets/index-Bfu5JKu0.css","./assets/jan_bg-DLuyZzF0.jpg","./assets/jan_btn1-DGSTJL_3.png","./assets/jan_btn2-DEH2AIZd.png","./assets/jan_btn3-CTp3J0hz.png","./assets/jan_foe1-1j0qVHzN.png","./assets/jan_foe2-6tbXKaZU.png","./assets/jan_foe3-BB7EnRG4.png","./assets/jan_foe4-BVEOG5-E.png","./assets/jan_frame-BH7ystuA.png","./assets/jan_hf_jji-eUc9BY8t.png","./assets/jan_hf_muk-Boy7TsSA.png","./assets/jan_hf_ppa-De9kWGwi.png","./assets/jan_hm_jji-BYKfh6d4.png","./assets/jan_hm_muk-EweNCTL8.png","./assets/jan_hm_ppa-Bv-F4xNZ.png","./assets/jan_me_f-D1ohDv3T.png","./assets/jan_me_m-DI0UqQPd.png","./assets/jan_side_l--U2rFEFN.png","./assets/jan_side_r-DHXSqjAv.png","./assets/knob_leek-BoejanHj.png","./assets/knob_ring-BLgJR9g1.png","./assets/lcd_bg-0CcSEGpO.png","./assets/lcd_spin-B5Ejz5fG.png","./assets/logo_bigwin-BkqsjxHc.png","./assets/logo_kakuhen-DdGEjSiJ.png","./assets/logo_reach-DqY7oUS9.png","./assets/miku_idle-wD-0KfUu.png","./assets/miku_idle2-BBh8PgjH.png","./assets/miku_kakuhen-Dqtk7y3D.png","./assets/miku_reach-BiTZfJqs.png","./assets/miku_win-64WK9LXb.png","./assets/mill-BUbl_dZ4.png","./assets/reel_1-n0Qf7HQF.png","./assets/reel_2-D71CXLwN.png","./assets/reel_3-aHHGsK7-.png","./assets/reel_4-CzzP0HQy.png","./assets/reel_5-Bw7i4i9F.png","./assets/reel_6-D3AMda0M.png","./assets/reel_7-DlRJaq2U.png","./assets/reel_8-BkStPuAI.png","./assets/reel_9-CaYwG2IS.png","./assets/slot_bottom-DrAi5fgU.png","./assets/slot_btn1-DXCrDHsy.png","./assets/slot_btn2-C-nQCqcW.png","./assets/slot_btn3-CpXlzzLG.png","./assets/slot_frame-CxHGtM7u.png","./assets/slot_lever-BggkVEpc.png","./assets/slot_top-C5muPYtP.png","./assets/tray_box-shQAeju7.png","./cat/etc.png","./cat/food.png","./cat/move.png","./cat/shop.png","./cat/sight.png","./cat/stay.png","./clock/cap.png","./clock/dial.jpg","./clock/disc.jpg","./frog-open.png","./frog.png","./hero-boy.png","./hero-girl.png","./ic/card.png","./ic/exchange.png","./ic/fund.png","./ic/me.png","./ic/together.png","./ic/wallet.png","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./","./manifest.webmanifest","./pack/adapter.png","./pack/adapter2.png","./pack/battery.png","./pack/bg_bag_closed.png","./pack/bg_bag_fold.png","./pack/bg_case_closed.png","./pack/bg_case_fold.png","./pack/bottle.png","./pack/camera.png","./pack/cap.png","./pack/card.png","./pack/cash.png","./pack/charger.png","./pack/comb.png","./pack/cosmetics.png","./pack/dutyfree.png","./pack/ecobag.png","./pack/gift.png","./pack/glasses.png","./pack/insurance.png","./pack/liquidbag.png","./pack/lock.png","./pack/medicine.png","./pack/note.png","./pack/other.png","./pack/pass.png","./pack/passport.png","./pack/phone.png","./pack/pillow.png","./pack/razor.png","./pack/room.png","./pack/shoes.png","./pack/sim.png","./pack/socks.png","./pack/sunglasses.png","./pack/ticket.png","./pack/toiletry.png","./pack/top.png","./pack/towel.png","./pack/umbrella.png","./pack/underwear.png","./pack/visitjapan.png","./purse-open.png","./purse.png","./theme/kobe/bg.jpg","./theme/kobe/m1.png","./theme/kobe/m2.png","./theme/kobe/m3.png","./theme/kobe/m4.png","./theme/kobe/m5.png","./theme/kobe/m6.png","./theme/kyoto/bg.jpg","./theme/kyoto/m1.png","./theme/kyoto/m2.png","./theme/kyoto/m3.png","./theme/kyoto/m4.png","./theme/kyoto/m5.png","./theme/kyoto/m6.png","./theme/nara/bg.jpg","./theme/nara/m1.png","./theme/nara/m2.png","./theme/nara/m3.png","./theme/nara/m4.png","./theme/nara/m5.png","./theme/nara/m6.png","./theme/osaka/bg.jpg","./theme/osaka/m1.png","./theme/osaka/m2.png","./theme/osaka/m3.png","./theme/osaka/m4.png","./theme/osaka/m5.png","./theme/osaka/m6.png"]
self.addEventListener('install', (e) => {
  // cache: 'reload' = 브라우저에 담아 둔 옛 파일 말고 서버에서 새로(GitHub Pages는 10분 담아 둠)
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()))
})
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('tl-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()))
})
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url)
  if (e.request.method !== 'GET' || u.origin !== location.origin) return // 환율 등 바깥 요청은 그대로
  if (u.pathname.includes('/api/')) return
  if (u.pathname.endsWith('/version.json')) return // 새 버전 확인은 늘 인터넷에서
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
    self.registration.showNotification(d.title || '여행간사이', { body: d.body || '', tag: d.tag || 'update', icon: './icon-192.png', badge: './icon-192.png', data: { url: './' } }),
    self.navigator && self.navigator.setAppBadge ? self.navigator.setAppBadge(1).catch(() => {}) : null,
    d.tag === 'update' ? self.registration.update().catch(() => {}) : null,
  ]))
})
self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => (cs[0] ? cs[0].focus() : self.clients.openWindow('./'))))
})
