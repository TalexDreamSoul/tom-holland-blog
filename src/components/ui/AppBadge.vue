<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  variant?: 'default' | 'outline'
}>(), {
  variant: 'default',
})

const variants = {
  default: 'border-transparent bg-secondary text-secondary-foreground',
  outline: 'border-border bg-card text-muted-foreground',
}
</script>

<template>
  <span :class="cn('inline-flex min-h-7 items-center rounded-full border px-2.5 text-xs font-600', variants[variant], props.class)">
    <slot />
  </span>
</template>
