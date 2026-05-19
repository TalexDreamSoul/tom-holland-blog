<script setup lang="ts">
import { ArrowUpRight, BookOpen, Sparkles } from 'lucide-vue-next'
import { principles, profile, stats } from '~/data/profile'
</script>

<template>
  <section class="relative grid container-page min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:py-24">
    <div class="pointer-events-none absolute inset-x-[-20vw] top-0 h-[560px] overflow-hidden">
      <div class="hero-grid absolute inset-0 opacity-70" />
      <div class="hero-glow absolute left-1/2 top-12 h-76 w-76 rounded-full bg-primary/12 blur-3xl -translate-x-1/2" />
    </div>

    <div class="relative z-10">
      <AppBadge variant="outline" class="mb-6 gap-2">
        <Sparkles :size="14" />
        Portfolio / Blog / Studio Notes
      </AppBadge>
      <h1 class="max-w-4xl text-[clamp(3.6rem,10vw,8.5rem)] font-680 leading-[0.88] tracking-normal">
        {{ profile.name }}
      </h1>
      <p class="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        {{ profile.intro }}
      </p>
      <div class="mt-9 flex flex-wrap gap-3">
        <AppButton to="/work">
          View work
          <ArrowUpRight :size="16" />
        </AppButton>
        <AppButton to="/blog" variant="secondary">
          Read notes
          <BookOpen :size="16" />
        </AppButton>
      </div>
    </div>

    <AppCard class="relative z-10 p-5">
      <div class="aspect-[4/5] overflow-hidden border border-border rounded-[8px] bg-secondary p-4">
        <div class="relative h-full rounded-[8px] bg-card p-5">
          <div class="absolute inset-5 border border-border rounded-[8px]" />
          <div class="relative h-full flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <p class="eyebrow">
                  Current focus
                </p>
                <h2 class="mt-3 max-w-72 text-3xl font-620 leading-tight">
                  Designing calm tools for ambitious people.
                </h2>
              </div>
              <span class="h-3 w-3 rounded-full bg-primary" />
            </div>
            <div class="grid gap-3">
              <div
                v-for="item in principles"
                :key="item"
                class="border border-border rounded-[8px] bg-background/70 p-3 text-sm text-muted-foreground"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppCard>

    <div class="relative z-10 grid gap-3 border-y border-border py-5 lg:col-span-2 sm:grid-cols-3">
      <div v-for="item in stats" :key="item.label" class="flex items-end justify-between gap-4 sm:block">
        <p class="text-4xl font-650 leading-none">
          {{ item.value }}
        </p>
        <p class="mt-2 text-sm text-muted-foreground">
          {{ item.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(to right, hsl(var(--border) / 0.82) 1px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--border) / 0.82) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, black, transparent 72%);
}

.hero-glow {
  animation: drift 9s ease-in-out infinite alternate;
}

@keyframes drift {
  from {
    transform: translateX(-56%) translateY(0);
  }

  to {
    transform: translateX(-44%) translateY(28px);
  }
}
</style>
