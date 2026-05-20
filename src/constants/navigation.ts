export type NavMatch = 'exact' | 'prefix'

export type MainNavItem = {
  label: string
  to: string
  match?: NavMatch
}

export const MAIN_NAV: MainNavItem[] = [
  { label: '首頁', to: '/', match: 'exact' },
  { label: '關於', to: '/about', match: 'prefix' },
  { label: '經歷', to: '/experience', match: 'prefix' },
  { label: '內容', to: '/content', match: 'prefix' },
  { label: '聯絡', to: '/contact', match: 'prefix' },
]

export type SectionKey = 'about' | 'experience' | 'content' | 'contact'

export type SectionTab = {
  label: string
  to: string
  match: NavMatch
}

export type SectionConfig = {
  key: SectionKey
  title: string
  base: string
  tabs: SectionTab[]
}

export const SECTIONS: Record<SectionKey, SectionConfig> = {
  about: {
    key: 'about',
    title: '關於',
    base: '/about',
    tabs: [
      { label: '總覽', to: '/about', match: 'exact' },
      { label: '排球', to: '/about/volleyball', match: 'exact' },
      { label: '工程', to: '/about/engineer', match: 'exact' },
    ],
  },
  experience: {
    key: 'experience',
    title: '經歷',
    base: '/experience',
    tabs: [
      { label: '總覽', to: '/experience', match: 'exact' },
      { label: '排球', to: '/experience/volleyball', match: 'exact' },
      { label: '工程', to: '/experience/engineer', match: 'exact' },
    ],
  },
  content: {
    key: 'content',
    title: '內容',
    base: '/content',
    tabs: [
      { label: '總覽', to: '/content', match: 'exact' },
      { label: '排球', to: '/content/volleyball', match: 'prefix' },
      { label: '工程', to: '/content/engineer', match: 'exact' },
    ],
  },
  contact: {
    key: 'contact',
    title: '聯絡',
    base: '/contact',
    tabs: [
      { label: '總覽', to: '/contact', match: 'exact' },
      { label: '排球', to: '/contact/volleyball', match: 'exact' },
      { label: '工程', to: '/contact/engineer', match: 'exact' },
    ],
  },
}

export function isNavActive(item: MainNavItem, path: string): boolean {
  if (item.match === 'prefix') {
    if (item.to === '/') return path === '/'
    return path === item.to || path.startsWith(`${item.to}/`)
  }
  return path === item.to
}

export function isTabActive(tab: SectionTab, path: string): boolean {
  if (tab.match === 'prefix') {
    return path === tab.to || path.startsWith(`${tab.to}/`)
  }
  return path === tab.to
}
