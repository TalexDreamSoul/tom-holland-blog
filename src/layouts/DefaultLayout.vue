<script setup lang="ts">
import { Github, Mail, Rss } from 'lucide-vue-next'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { profile } from '~/data/profile'
import { initScrollMotion } from '~/lib/scrollMotion'

const route = useRoute()
let cleanupScrollMotion: (() => void) | undefined

function restartScrollMotion() {
  cleanupScrollMotion?.()
  cleanupScrollMotion = initScrollMotion()
}

onMounted(() => {
  restartScrollMotion()
})

watch(() => route.fullPath, async () => {
  await nextTick()
  restartScrollMotion()
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
    <footer class="container-page border-t border-border py-8" data-motion="standalone">
      <div class="flex flex-col justify-between gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© 2026 {{ profile.name }}。使用 Vitesse Lite 构建。</p>
        <div class="flex items-center gap-2">
          <a class="grid h-9 w-9 place-items-center rounded-[8px] focus-visible:h-focus hover:bg-secondary hover:text-foreground" :href="`mailto:${profile.email}`" aria-label="发送邮件">
            <Mail :size="17" />
          </a>
          <a class="grid h-9 w-9 place-items-center rounded-[8px] focus-visible:h-focus hover:bg-secondary hover:text-foreground" :href="profile.github" target="_blank" rel="noreferrer" aria-label="打开 GitHub">
            <Github :size="17" />
          </a>
          <a class="grid h-9 w-9 place-items-center rounded-[8px] focus-visible:h-focus hover:bg-secondary hover:text-foreground" href="#" aria-label="订阅 RSS">
            <Rss :size="17" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
