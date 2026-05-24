<script setup lang="ts">
import { ArrowRight, FileText, Gamepad2, GitBranch } from 'lucide-vue-next'
import { resources } from '~/data/profile'

const iconMap = {
  analysis: GitBranch,
  demo: Gamepad2,
  planning: FileText,
}
</script>

<template>
  <section class="container-page border-t border-border py-18 md:py-24" data-motion="section">
    <div class="mb-10 max-w-3xl" data-motion="section-heading">
      <p class="eyebrow">
        作品入口
      </p>
      <h2 class="mt-4 text-[clamp(2rem,5vw,4.5rem)] font-620 leading-[1]">
        {{ '作品集' }}
      </h2>
    </div>

    <div class="grid gap-5 xl:grid-cols-3">
      <RouterLink
        v-for="column in resources.columns"
        :key="column.title"
        :to="column.path"
        class="group portfolio-pop-card wine-panel overflow-hidden border rounded-[8px] focus-visible:h-focus transition-(colors transform) hover:-translate-y-1"
        data-motion="card"
      >
        <div class="wine-surface border-b p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="eyebrow">
                {{ column.description }}
              </p>
              <h3 class="mt-3 text-3xl font-620 leading-tight">
                {{ column.title }}
              </h3>
            </div>
            <div class="wine-inset grid h-10 w-10 shrink-0 place-items-center border rounded-[8px] text-primary">
              <component :is="iconMap[column.icon as keyof typeof iconMap]" :size="18" />
            </div>
          </div>
        </div>

        <div class="grid gap-5 p-5">
          <img
            v-if="column.gallery?.length"
            class="wine-image-bright aspect-[16/9] w-full border border-primary/24 rounded-[8px] object-cover"
            :src="column.gallery[0]"
            :alt="`${column.title}预览图`"
            data-motion="media"
          >
          <div v-else class="grid gap-3">
            <div
              v-for="item in column.items.slice(0, 2)"
              :key="item.title"
              class="wine-inset border rounded-[8px] p-4"
              data-motion="row"
            >
              <AppBadge variant="outline">
                {{ item.type }}
              </AppBadge>
              <h4 class="mt-4 text-lg font-620 leading-tight">
                {{ item.title }}
              </h4>
              <p class="mt-2 text-sm text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between gap-4 border-t border-primary/18 pt-4 text-sm text-muted-foreground font-700 group-hover:text-foreground">
            <span>
              查看详情
            </span>
            <ArrowRight class="transition-transform group-hover:translate-x-1" :size="16" />
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
