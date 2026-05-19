<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import { profile } from '~/data/profile'
</script>

<template>
  <section class="grid container-page gap-10 border-t border-border py-18 md:grid-cols-[0.9fr_1.1fr] md:py-24">
    <div>
      <p class="eyebrow">
        About
      </p>
      <h2 class="mt-4 max-w-xl text-[clamp(2rem,5vw,4.5rem)] font-620 leading-[1]">
        A personal site for work, writing, and the details between them.
      </h2>
    </div>

    <div class="prose-copy grid gap-7 text-muted-foreground">
      <p class="text-lg">
        {{ profile.bio }}
      </p>
      <div class="grid gap-3">
        <div class="flex items-center gap-3 border border-border rounded-[8px] bg-card p-4">
          <MapPin :size="18" class="text-primary" />
          <span>{{ profile.location }}</span>
        </div>
        <div class="border border-border rounded-[8px] bg-card p-4">
          {{ profile.availability }}
        </div>
      </div>
    </div>
  </section>
</template>
