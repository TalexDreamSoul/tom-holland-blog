export const profile = {
  name: 'Tom Holland',
  title: 'Designer, writer, and frontend maker',
  location: 'Shanghai / Remote',
  email: 'hello@tomholland.dev',
  github: 'https://github.com/',
  availability: 'Open for thoughtful collaborations',
  intro:
    'I design quiet digital products, write about the craft behind them, and build polished interfaces that feel calm under pressure.',
  bio:
    'Tom works across product strategy, interface systems, and frontend implementation. His work favors restraint, legibility, and details that make complex tools easier to live with every day.',
}

export const navItems = [
  { label: '\u4E3B\u9875', to: '/' },
  { label: '\u62C6\u89E3', to: '/analysis' },
  { label: '\u7B56\u5212', to: '/planning' },
  { label: '\u6E38\u620F Demo', to: '/game-demo' },
  { label: '\u6E38\u620F\u7ECF\u5386', to: '/experience' },
]

export const principles = [
  'Calm systems over loud decoration',
  'Readable interfaces for repeated use',
  'Writing as a tool for better product judgment',
]

export const posts = [
  {
    title: 'Designing a portfolio that still feels human',
    date: '2026-04-18',
    readTime: '6 min read',
    category: 'Design',
    excerpt:
      'Notes on letting a portfolio feel selective, personal, and useful without turning it into a performance of busyness.',
  },
  {
    title: 'What I learned rebuilding my blog with Vitesse',
    date: '2026-03-02',
    readTime: '8 min read',
    category: 'Frontend',
    excerpt:
      'A practical look at file-based routing, component auto-imports, and keeping a personal site light enough to enjoy maintaining.',
  },
  {
    title: 'A quieter dashboard language',
    date: '2026-01-21',
    readTime: '5 min read',
    category: 'Product',
    excerpt:
      'How spacing, hierarchy, and empty states can make dense product surfaces feel composed instead of compressed.',
  },
]

export const projects = [
  {
    title: 'Northstar Notes',
    year: '2026',
    kind: 'Writing system',
    image: '/images/project-northstar.png',
    summary:
      'A fast personal publishing system for essays, project logs, reading notes, and newsletter drafts.',
    tags: ['Vue', 'Content', 'Typography'],
  },
  {
    title: 'Atlas Portfolio',
    year: '2025',
    kind: 'Portfolio',
    image: '/images/project-atlas.png',
    summary:
      'A modular portfolio framework that lets case studies, writing, and short experiments share one visual rhythm.',
    tags: ['Design System', 'Vite', 'Motion'],
  },
  {
    title: 'Lumen Desk',
    year: '2025',
    kind: 'Product UI',
    image: '/images/project-lumen.png',
    summary:
      'A focused dashboard for independent studios to track clients, deadlines, invoices, and creative capacity.',
    tags: ['SaaS', 'UX', 'Data UI'],
  },
  {
    title: 'Signal Garden',
    year: '2024',
    kind: 'Lab',
    image: '/images/project-signal.png',
    summary:
      'A visual experiment about ambient status, subtle motion, and non-intrusive feedback in personal tools.',
    tags: ['Creative Code', 'Research', 'Interaction'],
  },
]

export const resources = {
  columns: [
    {
      title: '\u62C6\u89E3',
      id: 'analysis',
      path: '/analysis',
      description: '\u89D2\u8272\u4E0E\u7CFB\u7EDF\u7814\u7A76\u6587\u6863',
      icon: 'analysis',
      items: [
        {
          title: '\u300A\u539F\u795E\u300B\u89D2\u8272\u7CFB\u7EDF\u62C6\u89E3',
          type: 'XMind',
          href: '/resources/genshin-character-system.xmind',
          disabled: false,
          description: '\u56F4\u7ED5\u89D2\u8272\u517B\u6210\u3001\u6218\u6597\u5B9A\u4F4D\u3001\u7CFB\u7EDF\u5173\u8054\u4E0E\u957F\u671F\u9A71\u52A8\u505A\u7ED3\u6784\u5316\u62C6\u89E3\u3002',
        },
        {
          title: '\u7B2C\u4E94\u4EBA\u683C\u89D2\u8272\u7CFB\u7EDF\u62C6\u89E3',
          type: 'XMind',
          href: '/resources/identity-v-character-system.xmind',
          disabled: false,
          description: '\u62C6\u89E3\u975E\u5BF9\u79F0\u7ADE\u6280\u4E2D\u7684\u89D2\u8272\u5B9A\u4F4D\u3001\u6280\u80FD\u5173\u7CFB\u4E0E\u5DEE\u5F02\u5316\u4F53\u9A8C\u3002',
        },
      ],
    },
    {
      title: '\u7B56\u5212',
      id: 'planning',
      path: '/planning',
      description: '\u6E38\u620F\u7B56\u5212\u4E0E\u9879\u76EE\u603B\u7ED3',
      icon: 'planning',
      items: [
        {
          title: '\u300A\u5F69\u300B\u5B8C\u6574\u6E38\u620F\u7B56\u5212\u4E66',
          type: 'PDF',
          href: '/resources/cai-complete-game-design.pdf',
          disabled: false,
          description: '\u5B8C\u6574\u6E38\u620F\u65B9\u6848\uFF0C\u8986\u76D6\u6838\u5FC3\u73A9\u6CD5\u3001\u7CFB\u7EDF\u8BBE\u8BA1\u3001\u5185\u5BB9\u7ED3\u6784\u4E0E\u4F53\u9A8C\u76EE\u6807\u3002',
        },
        {
          title: '\u300A\u5F69\u300B\u6838\u5FC3\u4EAE\u70B913\u9875\u603B\u7ED3',
          type: 'PDF',
          href: '/resources/cai-core-highlights-13p.pdf',
          disabled: false,
          description: '\u6D53\u7F29\u5C55\u793A\u9879\u76EE\u5356\u70B9\u3001\u6838\u5FC3\u5FAA\u73AF\u4E0E\u5DEE\u5F02\u5316\u4EAE\u70B9\u7684\u7B56\u5212\u6458\u8981\u3002',
        },
      ],
    },
    {
      title: '\u6E38\u620F Demo',
      id: 'game-demo',
      path: '/game-demo',
      description: '\u53EF\u73A9\u7248\u672C\u4E0E\u6F14\u793A\u94FE\u63A5',
      icon: 'demo',
      gallery: [
        '/images/demo-slide-01.png',
        '/images/demo-slide-02.png',
        '/images/demo-slide-03.png',
      ],
      items: [
        {
          title: '\u300A\u5F69\u300B\u6E38\u620F Demo',
          type: 'Demo',
          href: '',
          disabled: true,
          description: '\u9884\u7559\u7684 Demo \u5C55\u793A\u4F4D\uFF0C\u540E\u7EED\u53EF\u66FF\u6362\u4E3A\u53EF\u73A9\u7248\u672C\u3001\u89C6\u9891\u6216\u7EBF\u4E0A\u94FE\u63A5\u3002',
        },
      ],
    },
  ],
}

export interface GameAchievementStats {
  unlocked: number
  total: number
}

export interface GameExperienceItem {
  title: string
  platform: string
  icon?: string
  description: string
  playtimeHours?: number
  progress?: number
  achievements?: GameAchievementStats
}

const PC_PLATFORM = 'PC\u6E38\u620F'
const MOBILE_PLATFORM = '\u624B\u673A\u6E38\u620F'

function createPcGame(title: string, playtimeHours?: number, achievementsTuple?: [number, number]): GameExperienceItem {
  const achievements = achievementsTuple
    ? {
        unlocked: achievementsTuple[0],
        total: achievementsTuple[1],
      }
    : undefined

  return {
    title,
    platform: PC_PLATFORM,
    ...(typeof playtimeHours === 'number' ? { playtimeHours } : {}),
    ...(achievements
      ? {
          progress: achievements.total > 0 ? Math.round((achievements.unlocked / achievements.total) * 100) : 0,
          achievements,
        }
      : {}),
    description: '',
  }
}

function createMobileGame(title: string): GameExperienceItem {
  return {
    title,
    platform: MOBILE_PLATFORM,
    description: '',
  }
}

export const gameExperience: GameExperienceItem[] = [
  createPcGame('\u661F\u9732\u8C37\u7269\u8BED', 106.1, [22, 49]),
  createPcGame('\u6CF0\u62C9\u745E\u4E9A', 47.2, [80, 115]),
  createPcGame('\u9ED1\u795E\u8BDD\uFF1A\u609F\u7A7A', 45.3, [81, 81]),
  createPcGame('\u9E45\u9E2D\u6740', 45.1, [13, 38]),
  createPcGame('CS2', 43.5, [1, 1]),
  createPcGame('\u884C\u5C38\u8D70\u8089', 43.3, [19, 23]),
  createPcGame('\u5BC2\u9759\u5CADf', 42.6, [56, 56]),
  createPcGame('\u6740\u624B\uFF1A\u6697\u6740\u4E16\u754C', 41, [30, 83]),
  createPcGame('\u970D\u683C\u6C83\u5179\u4E4B\u9057', 32.1, [26, 45]),
  createPcGame('\u5947\u5F02\u4EBA\u751F', 29.5, [60, 60]),
  createPcGame('\u751F\u5316\u5371\u673A2 \u91CD\u5236\u7248', 27.9, [28, 44]),
  createPcGame('\u5BC2\u9759\u5CAD2', 27.5, [43, 43]),
  createPcGame('\u65B0\u5F39\u4E38\u8BBA\u7834v3', 27.3, [19, 41]),
  createPcGame('\u68EE\u6797', 26.2, [18, 45]),
  createPcGame('\u751F\u5316\u5371\u673A9\uFF1A\u5B89\u9B42\u66F2', 25, [38, 49]),
  createPcGame('\u5F39\u4E38\u8BBA\u7834', 22.9, [11, 38]),
  createPcGame('\u751F\u5316\u5371\u673A4 \u91CD\u5236\u7248', 21.8, [17, 46]),
  createPcGame('\u5F39\u4E38\u8BBA\u78342', 21.5, [11, 47]),
  createPcGame('\u8336\u676F\u5934', 21.1, [25, 42]),
  createPcGame('\u5947\u5F02\u4EBA\u751F\uFF1A\u66B4\u98CE\u524D\u5915', 19.8, [34, 34]),
  createPcGame('\u5947\u5F02\u4EBA\u751F2', 19.6, [46, 46]),
  createPcGame('\u751F\u5316\u5371\u673A6', 18.5, [20, 70]),
  createPcGame('\u6076\u7075\u9644\u8EAB', 17.1, [19, 71]),
  createPcGame('\u751F\u5316\u5371\u673A7', 17, [19, 58]),
  createPcGame('\u53E4\u5893\u4E3D\u5F71', 16.6, [12, 50]),
  createPcGame('\u751F\u5316\u5371\u673A3 \u91CD\u5236\u7248', 14.7, [20, 32]),
  createPcGame('\u6076\u7075\u9644\u8EAB2', 14.1, [29, 51]),
  createPcGame('\u53E4\u5893\u4E3D\u5F71\uFF1A\u5D1B\u8D77', 13.6, [33, 143]),
  createPcGame('\u9ECE\u660E\u6740\u673A', 13.2, [25, 288]),
  createPcGame('\u6211\u4EEC\u4E4B\u95F4', 13.1, [16, 33]),
  createPcGame('\u8FD9\u662F\u6211\u7684\u6218\u4E89', 12.3, [20, 55]),
  createPcGame('\u5E95\u7279\u5F8B\uFF1A\u5316\u8EAB\u4E3A\u4EBA', 11.4, [30, 48]),
  createPcGame('\u53E4\u5893\u4E3D\u5F71\uFF1A\u6697\u5F71', 11.3, [32, 99]),
  createPcGame('\u5F71\u5B50\u6218\u672F\uFF1A\u5C06\u519B\u4E4B\u5203', 10.2, [10, 44]),
  createPcGame('\u66B4\u96E8', 9.5, [33, 56]),
  createPcGame('\u7CD6\u8C46\u4EBA', 9.3, [14, 34]),
  createPcGame('\u751F\u5316\u5371\u673A8\uFF1A\u6751\u5E84', 8.6, [25, 56]),
  createPcGame('\u5C0F\u5C0F\u68A6\u9B47', 7.3, [7, 22]),
  createPcGame('\u5973\u9B3C\u6865\u4E8C \u91CA\u9B42\u8DEF', 7.1, [24, 26]),
  createPcGame('\u8BAE\u6848\u8FFD\u58F0', 6.7, [12, 12]),
  createPcGame('\u5DEB\u5E083\uFF1A\u72C2\u730E', 6.6, [2, 78]),
  createPcGame('\u9965\u8352\u8054\u673A\u7248', 6.4),
  createPcGame('\u6A21\u62DF\u4EBA\u751F4', 6.2),
  createPcGame('\u5C0F\u5C0F\u68A6\u9B472', 5.9),
  createPcGame('\u63CD\u51FB\u6D3E\u5BF9', 5.5, [7, 31]),
  createPcGame('\u6050\u9B3C\u75C7', 5, [2, 54]),
  createPcGame('\u6C38\u52AB\u65E0\u95F4', 4.8, [6, 40]),
  createPcGame('\u57CE\u5E02\uFF1A\u5929\u9645\u7EBF', 4.7, [9, 124]),
  createPcGame('\u7075\u9B42\u6446\u6E21\u4EBA', 4.7, [3, 39]),
  createPcGame('\u5973\u9B3C\u6865 \u5F00\u9B42\u8DEF', 4, [17, 22]),
  createPcGame('\u68EE\u6797\u4E4B\u5B50', 3.2, [1, 32]),
  createPcGame('\u65E0\u4E3B\u4E4B\u57302', 2.7, [5, 75]),
  createPcGame('\u523A\u5BA2\u4FE1\u6761\uFF1A\u5927\u9769\u547D', 2.5, [0, 57]),
  createPcGame('\u6D88\u901D\u7684\u5149\u8292', 2.1, [3, 78]),
  createPcGame('\u7F3A\u6C27', 1.1, [1, 45]),
  createPcGame('\u6536\u83B7\u65E52', 0.6, [5, 1314]),
  createPcGame('\u4EBA\u7C7B\u4E00\u8D25\u6D82\u5730', 0.3, [1, 155]),
  createPcGame('\u6700\u540E\u7684\u751F\u8FD8\u8005'),
  createPcGame('\u82F1\u96C4\u8054\u76DF'),
  createPcGame('CF'),
  createPcGame('\u53CC\u4EBA\u6210\u884C'),
  createPcGame('\u6211\u7684\u4E16\u754C'),
  createPcGame('\u65E0\u754F\u5951\u7EA6'),
  createPcGame('\u690D\u7269\u5927\u6218\u50F5\u5C38'),
  createMobileGame('\u6D1B\u514B\u738B\u56FD'),
  createMobileGame('\u7B2C\u4E94\u4EBA\u683C'),
  createMobileGame('\u738B\u8005\u8363\u8000'),
  createMobileGame('\u6F5C\u6C34\u5458\u6234\u592B'),
  createMobileGame('\u9634\u9633\u5E08'),
  createMobileGame('\u91D1\u94F2\u94F2\u4E4B\u6218'),
  createMobileGame('\u5143\u795E'),
  createMobileGame('\u5149\u9047'),
  createMobileGame('\u82F1\u96C4\u8054\u76DF\u624B\u6E38'),
  createMobileGame('\u9E45\u9E2D\u6740\u624B\u6E38'),
  createMobileGame('\u6697\u533A\u7A81\u56F4'),
  createMobileGame('\u5F00\u7F57\u7CFB\u5217'),
  createMobileGame('\u548C\u5E73\u7CBE\u82F1'),
  createMobileGame('\u7403\u7403\u5927\u4F5C\u6218'),
  createMobileGame('\u8D2A\u5403\u86C7\u5927\u4F5C\u6218'),
  createMobileGame('\u706B\u5F71\u5FCD\u8005'),
  createMobileGame('\u90E8\u843D\u6218\u4E89\uFF1A\u7687\u5BA4\u6218\u4E89'),
  createMobileGame('\u5F00\u5FC3\u6D88\u6D88\u4E50'),
  createMobileGame('\u7EAA\u5FF5\u7891\u8C37'),
  createMobileGame('\u5143\u6C14\u9A91\u58EB'),
  createMobileGame('\u75AF\u72C2\u52A8\u7269\u56ED'),
  createMobileGame('\u4E09\u56FD\u6740'),
  createMobileGame('\u5730\u94C1\u8DD1\u9177'),
  createMobileGame('\u690D\u7269\u5927\u6218\u50F5\u5C382'),
]
