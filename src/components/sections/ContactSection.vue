<script setup lang="ts">
import { ArrowUpRight, Mail } from 'lucide-vue-next'
import { profile } from '~/data/profile'
</script>

<template>
  <section class="container-page border-t border-border py-18 md:py-24">
    <div class="grid gap-8 border border-border rounded-[8px] bg-foreground p-6 text-background md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-8">
      <div>
        <p class="text-sm text-background/62 font-700 uppercase">
          Contact
        </p>
        <h2 class="mt-5 max-w-2xl text-[clamp(2.4rem,6vw,5.2rem)] font-620 leading-[0.95]">
          Let the next project feel quieter and sharper.
        </h2>
      </div>
      <a
        class="h-11 inline-flex items-center justify-center gap-2 rounded-[8px] bg-background px-5 text-sm text-foreground font-700 focus-visible:h-focus transition-colors hover:bg-background/90"
        :href="`mailto:${profile.email}`"
      >
        <Mail :size="17" />
        {{ profile.email }}
        <ArrowUpRight :size="17" />
      </a>
    </div>
  </section>
</template>
