<script setup lang="ts">
import { ArrowDownToLine, FileText, Gamepad2, GitBranch } from 'lucide-vue-next'
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
        {{ '\u4f5c\u54c1\u96c6' }}
      </h2>
    </div>

    <div class="grid gap-5 xl:grid-cols-3">
      <AppCard v-for="column in resources.columns" :key="column.title" class="overflow-hidden">
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

        <div class="grid">
          <component
            :is="item.disabled ? 'div' : 'a'"
            v-for="item in column.items"
            :key="item.href"
            :href="item.disabled ? undefined : item.href"
            :target="item.disabled ? undefined : '_blank'"
            :rel="item.disabled ? undefined : 'noreferrer'"
            class="group grid gap-4 border-b border-border p-5 focus-visible:h-focus transition-colors 2xl:grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-1 last:border-b-0"
            :class="item.disabled ? 'cursor-default opacity-72' : 'hover:bg-secondary/55'"
          >
            <div>
              <div class="mb-3 flex flex-wrap items-center gap-2">
                <AppBadge variant="outline">
                  {{ item.type }}
                </AppBadge>
              </div>
              <h4 class="text-xl font-620 leading-tight">
                {{ item.title }}
              </h4>
              <p class="mt-3 text-sm text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
            <div class="flex items-center gap-2 text-sm text-muted-foreground font-700 transition-colors group-hover:text-foreground">
              {{ item.disabled ? 'Coming soon' : 'Open' }}
              <ArrowDownToLine v-if="!item.disabled" :size="16" />
            </div>
          </component>
        </div>
      </AppCard>
    </div>
  </section>
</template>
