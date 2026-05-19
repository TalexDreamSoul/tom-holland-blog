import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['container-page', 'w-[min(1120px,calc(100%-32px))] mx-auto'],
    ['panel', 'border border-border bg-card text-card-foreground shadow-soft'],
    ['eyebrow', 'text-[0.78rem] font-700 uppercase text-muted-foreground'],
    ['h-focus', 'outline-none ring-2 ring-ring ring-offset-2 ring-offset-background'],
  ],
  theme: {
    colors: {
      'background': 'hsl(var(--background))',
      'foreground': 'hsl(var(--foreground))',
      'card': 'hsl(var(--card))',
      'card-foreground': 'hsl(var(--card-foreground))',
      'border': 'hsl(var(--border))',
      'input': 'hsl(var(--input))',
      'ring': 'hsl(var(--ring))',
      'primary': 'hsl(var(--primary))',
      'primary-foreground': 'hsl(var(--primary-foreground))',
      'secondary': 'hsl(var(--secondary))',
      'secondary-foreground': 'hsl(var(--secondary-foreground))',
      'muted': 'hsl(var(--muted))',
      'muted-foreground': 'hsl(var(--muted-foreground))',
      'accent': 'hsl(var(--accent))',
      'accent-foreground': 'hsl(var(--accent-foreground))',
    },
    boxShadow: {
      soft: '0 18px 50px rgba(21, 24, 22, 0.07)',
    },
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      serif: 'Georgia, "Times New Roman", serif',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
