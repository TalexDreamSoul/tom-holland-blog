<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  project: {
    title: string
    year: string
    kind: string
    image: string
    summary: string
    tags: string[]
  }
}>()
</script>

<template>
  <RouterLink
    to="/work"
    class="group portfolio-pop-card wine-panel block overflow-hidden border rounded-[8px] focus-visible:h-focus transition-(colors shadow transform) hover:-translate-y-1"
  >
    <img
      class="wine-image aspect-[16/11] w-full object-cover"
      :src="project.image"
      :alt="`${project.title}项目预览`"
      data-motion="media"
    >
    <div class="grid gap-4 p-5">
      <div class="flex items-center justify-between gap-4 text-xs text-muted-foreground font-700 uppercase">
        <span>{{ project.kind }}</span>
        <span>{{ project.year }}</span>
      </div>
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-2xl font-620 leading-tight">
          {{ project.title }}
        </h3>
        <ArrowUpRight class="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground group-hover:-translate-y-0.5" :size="18" />
      </div>
      <p class="text-muted-foreground">
        {{ project.summary }}
      </p>
      <div class="flex flex-wrap gap-2">
        <AppBadge v-for="tag in project.tags" :key="tag" variant="outline">
          {{ tag }}
        </AppBadge>
      </div>
    </div>
  </RouterLink>
</template>
