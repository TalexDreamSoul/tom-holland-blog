<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { cn } from '~/lib/utils'

const props = withDefaults(defineProps<{
  to?: RouteLocationRaw
  href?: string
  variant?: 'default' | 'secondary' | 'ghost'
  size?: 'default' | 'sm'
  class?: string
}>(), {
  variant: 'default',
  size: 'default',
})

const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-sm font-600 transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:h-focus'
const variants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/88',
  secondary: 'border border-border bg-card text-foreground hover:bg-secondary',
  ghost: 'text-muted-foreground hover:bg-secondary hover:text-foreground',
}
const sizes = {
  default: 'h-10 px-4',
  sm: 'h-9 px-3',
}
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="cn(base, variants[variant], sizes[size], props.class)"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    :class="cn(base, variants[variant], sizes[size], props.class)"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    :class="cn(base, variants[variant], sizes[size], props.class)"
  >
    <slot />
  </button>
</template>
