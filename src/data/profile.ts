export const profile = {
  name: 'Tom Holland',
  title: 'Designer, writer, and frontend maker',
  location: 'Shanghai / Remote',
  email: 'hello@tomholland.dev',
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

export const stats = [
  { label: 'Years building', value: '08' },
  { label: 'Selected projects', value: '24' },
  { label: 'Essays published', value: '36' },
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
  icon: string
  description: string
  playtimeHours?: number
  progress?: number
  achievements?: GameAchievementStats
}

export const gameExperience: GameExperienceItem[] = [
  {
    title: '\u751F\u5316\u5371\u673A2\u91CD\u5236\u7248',
    platform: 'PC\u6E38\u620F',
    icon: '/images/game-re2.png',
    playtimeHours: 28.5,
    progress: 72,
    achievements: {
      unlocked: 31,
      total: 44,
    },
    description: '\u7ECF\u5178\u751F\u5B58\u6050\u6016\u91CD\u5236\uFF0C\u5173\u6CE8\u5730\u56FE\u63A2\u7D22\u3001\u8D44\u6E90\u538B\u529B\u4E0E\u6C1B\u56F4\u8282\u594F\u3002',
  },
  {
    title: '\u751F\u5316\u5371\u673A3\u91CD\u5236\u7248',
    platform: 'PC\u6E38\u620F',
    icon: '/images/game-re3.png',
    playtimeHours: 16.2,
    progress: 58,
    achievements: {
      unlocked: 24,
      total: 32,
    },
    description: '\u66F4\u504F\u884C\u52A8\u5316\u7684\u91CD\u5236\u4F5C\uFF0C\u4F53\u9A8C\u8FFD\u9010\u538B\u8FEB\u611F\u548C\u7EBF\u6027\u5173\u5361\u8282\u594F\u3002',
  },
  {
    title: '\u751F\u5316\u5371\u673A4\u91CD\u5236\u7248',
    platform: 'PC\u6E38\u620F',
    icon: '/images/game-re4.png',
    playtimeHours: 42.8,
    progress: 84,
    achievements: {
      unlocked: 39,
      total: 46,
    },
    description: '\u5173\u6CE8\u7B2C\u4E09\u4EBA\u79F0\u6218\u6597\u624B\u611F\u3001\u7ECF\u6D4E\u6210\u957F\u548C\u7ECF\u5178\u5173\u5361\u73B0\u4EE3\u5316\u3002',
  },
  {
    title: '\u6D1B\u514B\u738B\u56FD',
    platform: '\u624B\u673A\u6E38\u620F',
    icon: '/images/game-rock-kingdom.png',
    description: '\u6536\u96C6\u517B\u6210\u5411\u4F53\u9A8C\uFF0C\u5173\u6CE8\u5BA0\u7269\u6210\u957F\u3001\u957F\u7EBF\u76EE\u6807\u548C\u8F7B\u5EA6\u793E\u4EA4\u3002',
  },
  {
    title: '\u7B2C\u4E94\u4EBA\u683C',
    platform: '\u624B\u673A\u6E38\u620F',
    icon: '/images/game-identity-v.png',
    description: '\u975E\u5BF9\u79F0\u7ADE\u6280\u4F53\u9A8C\uFF0C\u5173\u6CE8\u89D2\u8272\u5DEE\u5F02\u3001\u5BF9\u5C40\u8282\u594F\u4E0E\u56E2\u961F\u535A\u5F08\u3002',
  },
]
