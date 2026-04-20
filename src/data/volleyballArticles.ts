export interface VolleyballArticle {
  slug: string
  title: string
  subtitle: string
  image: string
  content: string[]
}

export const volleyballArticles: VolleyballArticle[] = [
  {
    slug: 'uvl-college-league',
    title: '大專盃甲級聯賽',
    subtitle: '先發主攻手 / 負責戰術執行與防守核心',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%230d6efd"/><stop offset="1" stop-color="%2305224c"/></linearGradient></defs><rect width="1200" height="700" fill="url(%23g)"/><circle cx="930" cy="220" r="120" fill="white" fill-opacity="0.12"/><circle cx="1020" cy="320" r="65" fill="white" fill-opacity="0.09"/><text x="90" y="320" font-size="78" font-family="Arial, sans-serif" fill="white" font-weight="700">UVL LEAGUE</text><text x="90" y="395" font-size="36" font-family="Arial, sans-serif" fill="white" fill-opacity="0.82">Volleyball Match Story</text></svg>',
    content: [
      '這個賽季擔任先發主攻手，主要任務是接發球穩定與四號位終結。面對高張力的對手時，我們重新調整輪次與攻擊節奏，讓球隊在落後時依然能維持系統運作。',
      '準決賽關鍵局中，我們透過更積極的攔網站位與短平快搭配，成功限制對手主力攻擊。這段經歷讓我更確定，個人表現再強，也必須建立在團隊溝通與信任上。',
    ],
  },
  {
    slug: 'national-volleyball-championship',
    title: '全國排球錦標賽',
    subtitle: '決勝局關鍵攔網與重扣得分',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%231d2736"/><stop offset="1" stop-color="%230d6efd"/></linearGradient></defs><rect width="1200" height="700" fill="url(%23g)"/><rect x="70" y="85" width="1060" height="530" rx="24" fill="white" fill-opacity="0.07"/><text x="120" y="320" font-size="72" font-family="Arial, sans-serif" fill="white" font-weight="700">NATIONAL CHAMPIONSHIP</text><text x="120" y="390" font-size="34" font-family="Arial, sans-serif" fill="white" fill-opacity="0.82">Pressure, Focus, and Teamwork</text></svg>',
    content: [
      '這場比賽的節奏非常快，雙方都在發球端施加壓力。我們中段一度落後，但透過暫停後的戰術切換，逐步把防守反擊效率拉回來。',
      '在決勝局裡，靠著全隊對戰術口令的高度一致，完成幾次關鍵攔網與反擊。比賽結束後我最大的收穫是：穩定的判斷，來自平時反覆訓練與比賽中的冷靜執行。',
    ],
  },
]
