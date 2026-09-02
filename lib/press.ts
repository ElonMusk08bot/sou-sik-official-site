export type PressItem = {
  title: string
  source: string
  url: string
  kind: 'media' | 'video' | 'retail'
  language: '繁中' | 'English' | 'Tiếng Việt'
  commercialLink?: boolean
  summary: {
    tw: string
    en: string
    jp: string
  }
}

export const pressItems: PressItem[] = [
  {
    title: 'P-1 Solo Makes Coffee Grinding Smooth, Steadier & Pleasurable',
    source: 'MEN’S GEAR',
    url: 'https://mensgear.net/sou-sik-p-1-solo',
    kind: 'media',
    language: 'English',
    commercialLink: true,
    summary: {
      tw: '從工業設計與操作手感切入，介紹 P-1 Solo 的行星齒輪、可替換刀盤與機械視覺語言。',
      en: 'An editorial look at P-1 Solo’s planetary gear drive, replaceable burrs, tactile operation, and mechanical design language.',
      jp: 'P-1 Soloの遊星歯車、交換式バー、操作感、メカニカルな造形を紹介するデザインメディア記事です。',
    },
  },
  {
    title: 'SOU SIK P-1 Solo: A Hardcore Coffee Toy',
    source: 'BackerBuzz',
    url: 'https://www.backerbuzz.com/post/sou-sik-p-1-solo-a-hardcore-coffee-toy',
    kind: 'media',
    language: 'English',
    commercialLink: true,
    summary: {
      tw: '群募專題從日常使用、外調刻度、模組化結構與清潔保養等面向整理 P-1 Solo。',
      en: 'A crowdfunding feature covering daily usability, external adjustment, modular construction, and maintenance.',
      jp: '日常性、外部調整、モジュール構造、メンテナンスの観点からまとめたクラウドファンディング特集です。',
    },
  },
  {
    title: '【全网首测】SOU SIK P-1 咖啡手摇磨豆机！老男孩的大玩具',
    source: '二哥咖啡說 · YouTube',
    url: 'https://www.youtube.com/watch?v=VbwUqa9xVbk',
    kind: 'video',
    language: '繁中',
    summary: {
      tw: '中文影音首測，透過實機畫面觀察 P-1 的外觀、操作方式與機械結構。',
      en: 'A Chinese-language first-look video showing the grinder’s physical design, operation, and mechanical construction.',
      jp: '実機映像で外観、操作方法、機械構造を確認できる中国語のファーストルック動画です。',
    },
  },
  {
    title: 'Trên tay chiếc cối xay cà phê thủ công Sou Sik P-1',
    source: 'YouTube · Vietnam',
    url: 'https://www.youtube.com/watch?v=JVwO_x1ImAk',
    kind: 'video',
    language: 'Tiếng Việt',
    summary: {
      tw: '越南創作者的實機上手影片，提供不同市場玩家觀看產品比例、細節與操作的角度。',
      en: 'A Vietnamese hands-on video offering another market’s view of the grinder’s proportions, details, and operation.',
      jp: 'ベトナムのクリエイターによる実機動画で、製品のサイズ感、細部、操作を別の視点から確認できます。',
    },
  },
  {
    title: 'SOU SIK P-1 Solo: A Hardcore Coffee Toy',
    source: 'INNOVATIONS · YouTube',
    url: 'https://www.youtube.com/watch?v=TQszTTa4tjY',
    kind: 'video',
    language: 'English',
    commercialLink: true,
    summary: {
      tw: '英文影音介紹，聚焦 P-1 Solo 的滑順手搖體驗、全範圍刻度與可替換刀盤。',
      en: 'An English video introduction focused on smooth cranking, full-range adjustment, and replaceable burrs.',
      jp: '滑らかなクランク操作、広い調整範囲、交換式バーを中心に紹介する英語動画です。',
    },
  },
  {
    title: 'LEBREW × SOU SIK P-1 行星齒輪手搖磨豆機完整解析',
    source: 'Matrix · 台灣通路',
    url: 'https://www.matrix.com.tw/sou-sik-p1-planetary-gear-hand-grinder',
    kind: 'retail',
    language: '繁中',
    commercialLink: true,
    summary: {
      tw: '台灣通路從行星齒輪、刀盤、模組化拆卸與適用玩家角度整理產品；文章包含銷售資訊。',
      en: 'A Taiwan retailer’s technical overview of the planetary gear, burrs, modular disassembly, and target users; includes sales information.',
      jp: '台湾販売店による遊星歯車、バー、モジュール分解、想定ユーザーの技術解説です。販売情報を含みます。',
    },
  },
]
