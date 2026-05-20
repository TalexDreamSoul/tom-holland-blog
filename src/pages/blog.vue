<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { CalendarDays } from 'lucide-vue-next'
import { posts } from '~/data/profile'

useHead({
  title: 'Blog - LXR',
  meta: [
    {
      name: 'description',
      content: 'Essays and notes about design, frontend craft, and personal publishing.',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <section class="container-page py-16 md:py-24" data-motion="section">
      <div data-motion="section-heading">
        <p class="eyebrow">
          Blog
        </p>
        <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
          Notes on design and building.
        </h1>
        <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
          A small archive of essays, product reflections, and implementation notes for people who care about interface craft.
        </p>
      </div>
    </section>

    <section class="container-page border-t border-border pb-24 pt-8" data-motion="section">
      <div class="grid gap-4">
        <AppCard v-for="post in posts" :key="post.title" class="wine-panel p-5" data-motion="card">
          <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div class="max-w-3xl">
              <AppBadge variant="outline">
                {{ post.category }}
              </AppBadge>
              <h2 class="mt-5 text-3xl font-620 leading-tight">
                {{ post.title }}
              </h2>
              <p class="mt-3 text-muted-foreground">
                {{ post.excerpt }}
              </p>
            </div>
            <div class="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays :size="16" />
              <span>{{ post.date }}</span>
              <span>/</span>
              <span>{{ post.readTime }}</span>
            </div>
          </div>
        </AppCard>
      </div>
    </section>
  </DefaultLayout>
</template>
