<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <article :class="cn('panel rounded-[8px]', props.class)">
    <slot />
  </article>
</template>
