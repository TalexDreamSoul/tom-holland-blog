export const profile = {
  name: 'LXR',
  title: '游戏策划 / 体验拆解 / 前端作品集',
  location: '上海 / 远程协作',
  email: 'hello@lxr.dev',
  github: 'https://github.com/',
  availability: '欢迎游戏策划、系统拆解与交互原型方向的交流',
  intro:
    '这里整理我的游戏拆解、策划文档、演示原型与游玩经历，用结构化分析记录我对体验、系统和节奏的理解。',
  bio:
    '我关注游戏系统如何支撑长期体验，也关注界面、叙事与反馈如何共同塑造玩家感受。这个网站作为作品集与资料库，集中展示拆解文档、策划方案、演示内容和个人游玩观察。',
}

export const navItems = [
  { label: '主页', to: '/' },
  { label: '拆解', to: '/analysis' },
  { label: '策划', to: '/planning' },
  { label: '游戏演示', to: '/game-demo' },
  { label: '游戏经历', to: '/experience' },
]

export const principles = [
  '用结构化拆解理解系统关系',
  '用可验证原型打磨核心体验',
  '用玩家视角判断节奏与反馈',
]

export const posts = [
  {
    title: '如何把角色系统拆成可复用的分析框架',
    date: '2026-04-18',
    readTime: '6 分钟阅读',
    category: '系统拆解',
    excerpt:
      '从定位、养成、战斗循环和长期驱动出发，梳理角色系统拆解时最容易忽略的关联层级。',
  },
  {
    title: '从演示版到策划案：核心循环应该先回答什么',
    date: '2026-03-02',
    readTime: '8 分钟阅读',
    category: '策划方法',
    excerpt:
      '记录将玩法灵感整理为可沟通方案的过程，包括体验目标、验证路径和内容边界的取舍。',
  },
  {
    title: '让作品集更像资料库，而不是展示墙',
    date: '2026-01-21',
    readTime: '5 分钟阅读',
    category: '作品集',
    excerpt:
      '用清晰的分类、文档入口和可浏览的细节，让作品集真正服务于沟通与复盘。',
  },
]

export const projects = [
  {
    title: '角色系统拆解库',
    year: '2026',
    kind: '系统拆解',
    image: '/images/project-northstar.png',
    summary:
      '围绕角色定位、养成路径、技能结构和长期追求建立拆解模板，沉淀为可复用的分析文档。',
    tags: ['角色系统', 'XMind', '长期驱动'],
  },
  {
    title: '《彩》策划文档',
    year: '2025',
    kind: '游戏策划',
    image: '/images/project-atlas.png',
    summary:
      '完整游戏方案，覆盖核心玩法、关卡节奏、系统结构、内容规划与差异化亮点。',
    tags: ['核心循环', '关卡节奏', 'PDF'],
  },
  {
    title: '演示展示页',
    year: '2025',
    kind: '交互原型',
    image: '/images/project-lumen.png',
    summary:
      '为可玩版本、视频演示与关键画面预留展示入口，方便后续持续补充项目进展。',
    tags: ['演示版', '原型', '演示'],
  },
  {
    title: '游戏经历索引',
    year: '2024',
    kind: '体验记录',
    image: '/images/project-signal.png',
    summary:
      '按平台、时长、成就与关键词整理个人游玩经历，作为体验分析与竞品观察的基础材料。',
    tags: ['游玩记录', '成就统计', '体验观察'],
  },
]

export const resources = {
  columns: [
    {
      title: '拆解',
      id: 'analysis',
      path: '/analysis',
      description: '角色与系统研究文档',
      icon: 'analysis',
      items: [
        {
          title: '《原神》角色系统拆解',
          type: 'XMind',
          href: '/resources/genshin-character-system.xmind',
          disabled: false,
          description: '围绕角色养成、战斗定位、系统关联与长期驱动做结构化拆解。',
        },
        {
          title: '第五人格角色系统拆解',
          type: 'XMind',
          href: '/resources/identity-v-character-system.xmind',
          disabled: false,
          description: '拆解非对称竞技中的角色定位、技能关系与差异化体验。',
        },
      ],
    },
    {
      title: '策划',
      id: 'planning',
      path: '/planning',
      description: '游戏策划与项目总结',
      icon: 'planning',
      items: [
        {
          title: '《彩》完整游戏策划书',
          type: 'PDF',
          href: '/resources/cai-complete-game-design.pdf',
          disabled: false,
          description: '完整游戏方案，覆盖核心玩法、系统设计、内容结构与体验目标。',
        },
        {
          title: '《彩》核心亮点13页总结',
          type: 'PDF',
          href: '/resources/cai-core-highlights-13p.pdf',
          disabled: false,
          description: '浓缩展示项目卖点、核心循环与差异化亮点的策划摘要。',
        },
      ],
    },
    {
      title: '游戏演示',
      id: 'game-demo',
      path: '/game-demo',
      description: '可玩版本与演示链接',
      icon: 'demo',
      gallery: [
        '/images/demo-slide-01.png',
        '/images/demo-slide-02.png',
        '/images/demo-slide-03.png',
      ],
      items: [
        {
          title: '《彩》游戏演示版',
          type: '演示',
          href: '',
          disabled: true,
          description: '预留的演示展示位，后续可替换为可玩版本、视频或线上链接。',
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

const PC_PLATFORM = '电脑游戏'
const MOBILE_PLATFORM = '手机游戏'

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
  createPcGame('星露谷物语', 106.1, [22, 49]),
  createPcGame('泰拉瑞亚', 47.2, [80, 115]),
  createPcGame('黑神话：悟空', 45.3, [81, 81]),
  createPcGame('鹅鸭杀', 45.1, [13, 38]),
  createPcGame('CS2', 43.5, [1, 1]),
  createPcGame('行尸走肉', 43.3, [19, 23]),
  createPcGame('寂静岭f', 42.6, [56, 56]),
  createPcGame('杀手：暗杀世界', 41, [30, 83]),
  createPcGame('霍格沃兹之遗', 32.1, [26, 45]),
  createPcGame('奇异人生', 29.5, [60, 60]),
  createPcGame('生化危机2 重制版', 27.9, [28, 44]),
  createPcGame('寂静岭2', 27.5, [43, 43]),
  createPcGame('新弹丸论破v3', 27.3, [19, 41]),
  createPcGame('森林', 26.2, [18, 45]),
  createPcGame('生化危机9：安魂曲', 25, [38, 49]),
  createPcGame('弹丸论破', 22.9, [11, 38]),
  createPcGame('生化危机4 重制版', 21.8, [17, 46]),
  createPcGame('弹丸论破2', 21.5, [11, 47]),
  createPcGame('茶杯头', 21.1, [25, 42]),
  createPcGame('奇异人生：暴风前夕', 19.8, [34, 34]),
  createPcGame('奇异人生2', 19.6, [46, 46]),
  createPcGame('生化危机6', 18.5, [20, 70]),
  createPcGame('恶灵附身', 17.1, [19, 71]),
  createPcGame('生化危机7', 17, [19, 58]),
  createPcGame('古墓丽影', 16.6, [12, 50]),
  createPcGame('生化危机3 重制版', 14.7, [20, 32]),
  createPcGame('恶灵附身2', 14.1, [29, 51]),
  createPcGame('古墓丽影：崛起', 13.6, [33, 143]),
  createPcGame('黎明杀机', 13.2, [25, 288]),
  createPcGame('我们之间', 13.1, [16, 33]),
  createPcGame('这是我的战争', 12.3, [20, 55]),
  createPcGame('底特律：化身为人', 11.4, [30, 48]),
  createPcGame('古墓丽影：暗影', 11.3, [32, 99]),
  createPcGame('影子战术：将军之刃', 10.2, [10, 44]),
  createPcGame('暴雨', 9.5, [33, 56]),
  createPcGame('糖豆人', 9.3, [14, 34]),
  createPcGame('生化危机8：村庄', 8.6, [25, 56]),
  createPcGame('小小梦魇', 7.3, [7, 22]),
  createPcGame('女鬼桥二 释魂路', 7.1, [24, 26]),
  createPcGame('议案追声', 6.7, [12, 12]),
  createPcGame('巫师3：狂猎', 6.6, [2, 78]),
  createPcGame('饥荒联机版', 6.4),
  createPcGame('模拟人生4', 6.2),
  createPcGame('小小梦魇2', 5.9),
  createPcGame('揍击派对', 5.5, [7, 31]),
  createPcGame('恐鬼症', 5, [2, 54]),
  createPcGame('永劫无间', 4.8, [6, 40]),
  createPcGame('城市：天际线', 4.7, [9, 124]),
  createPcGame('灵魂摆渡人', 4.7, [3, 39]),
  createPcGame('女鬼桥 开魂路', 4, [17, 22]),
  createPcGame('森林之子', 3.2, [1, 32]),
  createPcGame('无主之地2', 2.7, [5, 75]),
  createPcGame('刺客信条：大革命', 2.5, [0, 57]),
  createPcGame('消逝的光芒', 2.1, [3, 78]),
  createPcGame('缺氧', 1.1, [1, 45]),
  createPcGame('收获日2', 0.6, [5, 1314]),
  createPcGame('人类一败涂地', 0.3, [1, 155]),
  createPcGame('最后的生还者'),
  createPcGame('英雄联盟'),
  createPcGame('CF'),
  createPcGame('双人成行'),
  createPcGame('我的世界'),
  createPcGame('无畏契约'),
  createPcGame('植物大战僵尸'),
  createMobileGame('洛克王国'),
  createMobileGame('第五人格'),
  createMobileGame('王者荣耀'),
  createMobileGame('潜水员戴夫'),
  createMobileGame('阴阳师'),
  createMobileGame('金铲铲之战'),
  createMobileGame('元神'),
  createMobileGame('光遇'),
  createMobileGame('英雄联盟手游'),
  createMobileGame('鹅鸭杀手游'),
  createMobileGame('暗区突围'),
  createMobileGame('开罗系列'),
  createMobileGame('和平精英'),
  createMobileGame('球球大作战'),
  createMobileGame('贪吃蛇大作战'),
  createMobileGame('火影忍者'),
  createMobileGame('部落战争：皇室战争'),
  createMobileGame('开心消消乐'),
  createMobileGame('纪念碑谷'),
  createMobileGame('元气骑士'),
  createMobileGame('疯狂动物园'),
  createMobileGame('三国杀'),
  createMobileGame('地铁跑酷'),
  createMobileGame('植物大战僵尸2'),
]
