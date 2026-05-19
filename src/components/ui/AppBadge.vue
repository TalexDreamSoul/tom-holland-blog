<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  variant?: 'default' | 'outline'
}>(), {
  variant: 'default',
})

const variants = {
  default: 'border-primary/28 bg-primary/18 text-foreground',
  outline: 'border-primary/22 bg-primary/8 text-muted-foreground',
}
</script>

<template>
  <span :class="cn('inline-flex min-h-7 items-center rounded-full border px-2.5 text-xs font-600', variants[variant], props.class)">
    <slot />
  </span>
</template>
