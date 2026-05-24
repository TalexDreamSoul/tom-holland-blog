<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { CalendarDays } from 'lucide-vue-next'
import { posts } from '~/data/profile'

useHead({
  title: '文章 - LXR',
  meta: [
    {
      name: 'description',
      content: '关于游戏系统拆解、策划方法、体验观察与个人作品集整理的记录。',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <section class="container-page py-16 md:py-24" data-motion="section">
      <div data-motion="section-heading">
        <p class="eyebrow">
          文章
        </p>
        <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
          关于游戏拆解与策划思考的记录。
        </h1>
        <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
          这里保存一些系统分析、策划复盘和作品集整理过程中的方法笔记。
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
