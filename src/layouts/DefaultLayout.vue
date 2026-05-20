<script setup lang="ts">
import { Github, Mail, Rss } from 'lucide-vue-next'
import { onMounted, onUnmounted } from 'vue'
import { profile } from '~/data/profile'
import { initScrollMotion } from '~/lib/scrollMotion'

let cleanupScrollMotion: (() => void) | undefined

onMounted(() => {
  cleanupScrollMotion = initScrollMotion()
})

onUnmounted(() => {
  cleanupScrollMotion?.()
})
</script>

<template>
  <div class="site-shell min-h-screen overflow-hidden">
    <div class="scroll-progress" aria-hidden="true" />
    <SiteHeader />
    <main>
      <slot />
    </main>
    <footer class="container-page border-t border-border py-8">
      <div class="flex flex-col justify-between gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© 2026 {{ profile.name }}. Built with Vitesse Lite.</p>
        <div class="flex items-center gap-2">
          <a class="grid h-9 w-9 place-items-center rounded-[8px] focus-visible:h-focus hover:bg-secondary hover:text-foreground" :href="`mailto:${profile.email}`" aria-label="Email">
            <Mail :size="17" />
          </a>
          <a class="grid h-9 w-9 place-items-center rounded-[8px] focus-visible:h-focus hover:bg-secondary hover:text-foreground" :href="profile.github" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github :size="17" />
          </a>
          <a class="grid h-9 w-9 place-items-center rounded-[8px] focus-visible:h-focus hover:bg-secondary hover:text-foreground" href="#" aria-label="RSS">
            <Rss :size="17" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
