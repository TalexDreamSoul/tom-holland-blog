<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import { profile } from '~/data/profile'
</script>

<template>
  <section class="grid container-page gap-10 border-t border-border py-18 md:grid-cols-[0.9fr_1.1fr] md:py-24" data-motion="section">
    <div data-motion="section-heading">
      <p class="eyebrow">
        关于
      </p>
      <h2 class="mt-4 max-w-xl text-[clamp(2rem,5vw,4.5rem)] font-620 leading-[1]">
        一个用于沉淀拆解、策划和体验记录的个人站点。
      </h2>
    </div>

    <div class="prose-copy grid gap-7 text-muted-foreground" data-motion="card">
      <p class="text-lg" data-motion="text">
        {{ profile.bio }}
      </p>
      <div class="grid gap-3">
        <div class="wine-panel flex items-center gap-3 border rounded-[8px] p-4" data-motion="row">
          <MapPin :size="18" class="text-primary" />
          <span>{{ profile.location }}</span>
        </div>
        <div class="wine-panel border rounded-[8px] p-4" data-motion="row">
          {{ profile.availability }}
        </div>
      </div>
    </div>
  </section>
</template>
