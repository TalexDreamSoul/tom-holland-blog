<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { posts } from '~/data/profile'
</script>

<template>
  <section class="container-page border-t border-border py-18 md:py-24" data-motion="section">
    <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end" data-motion="section-heading">
      <div>
        <p class="eyebrow">
          文章
        </p>
        <h2 class="mt-4 text-[clamp(2rem,5vw,4.5rem)] font-620 leading-[1]">
          最近记录
        </h2>
      </div>
      <AppButton to="/blog" variant="secondary">
        查看全部
        <ArrowRight :size="16" />
      </AppButton>
    </div>

    <div class="grid gap-3">
      <RouterLink
        v-for="post in posts"
        :key="post.title"
        to="/blog"
        class="wine-panel group grid gap-5 border rounded-[8px] p-5 focus-visible:h-focus transition-colors md:grid-cols-[180px_minmax(0,1fr)_auto]"
        data-motion="card"
      >
        <div class="text-sm text-muted-foreground">
          <p>{{ post.date }}</p>
          <p class="mt-1">
            {{ post.readTime }}
          </p>
        </div>
        <div>
          <AppBadge variant="outline" class="mb-4">
            {{ post.category }}
          </AppBadge>
          <h3 class="text-2xl font-620 leading-tight">
            {{ post.title }}
          </h3>
          <p class="mt-3 max-w-2xl text-muted-foreground">
            {{ post.excerpt }}
          </p>
        </div>
        <ArrowRight class="self-center text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" :size="18" />
      </RouterLink>
    </div>
  </section>
</template>
