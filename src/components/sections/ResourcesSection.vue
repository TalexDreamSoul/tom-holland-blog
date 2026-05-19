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
  <section class="container-page border-t border-border py-18 md:py-24">
    <div class="mb-10 max-w-3xl">
      <p class="eyebrow">
        Portfolio
      </p>
      <h2 class="mt-4 text-[clamp(2rem,5vw,4.5rem)] font-620 leading-[1]">
        {{ '\u4F5C\u54C1\u96C6' }}
      </h2>
    </div>

    <div class="grid gap-5 xl:grid-cols-3">
      <RouterLink
        v-for="column in resources.columns"
        :key="column.title"
        :to="column.path"
        class="group overflow-hidden border border-border rounded-[8px] bg-card shadow-soft focus-visible:h-focus transition-(colors transform) hover:bg-secondary/45 hover:-translate-y-1"
      >
        <div class="border-b border-border bg-secondary/70 p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="eyebrow">
                {{ column.description }}
              </p>
              <h3 class="mt-3 text-3xl font-620 leading-tight">
                {{ column.title }}
              </h3>
            </div>
            <div class="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-card text-primary">
              <component :is="iconMap[column.icon as keyof typeof iconMap]" :size="18" />
            </div>
          </div>
        </div>

        <div class="grid gap-5 p-5">
          <img
            v-if="column.gallery?.length"
            class="aspect-[16/9] w-full border border-border rounded-[8px] object-cover"
            :src="column.gallery[0]"
            :alt="`${column.title} preview`"
          >
          <div v-else class="grid gap-3">
            <div
              v-for="item in column.items.slice(0, 2)"
              :key="item.title"
              class="border border-border rounded-[8px] bg-background/70 p-4"
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

          <div class="flex items-center justify-between gap-4 border-t border-border pt-4 text-sm text-muted-foreground font-700 group-hover:text-foreground">
            <span>
              View details
            </span>
            <ArrowRight class="transition-transform group-hover:translate-x-1" :size="16" />
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
