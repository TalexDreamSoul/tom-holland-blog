<script setup lang="ts">
import { Github, Menu, Moon, Sun, X } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '~/composables/useTheme'
import { navItems, profile } from '~/data/profile'

const route = useRoute()
const isOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

function isActive(to: string) {
  return route.path === to
}

watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/80 bg-background/84 backdrop-blur-xl">
    <div class="container-page min-h-16 flex items-center justify-between gap-4">
      <RouterLink to="/" class="flex items-center gap-3 focus-visible:h-focus">
        <span class="lxr-brand-mark" aria-hidden="true">
          <svg viewBox="0 0 96 48" role="img">
            <path class="lxr-mark-red" d="M9 7v34h34" />
            <path class="lxr-mark-red" d="M36 14l26 27" />
            <path class="lxr-mark-light" d="M44 41 66 14h18c8 0 13 5 13 12s-5 12-13 12H72l18 20" />
          </svg>
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-[8px] px-3 py-2 text-sm text-muted-foreground focus-visible:h-focus transition-colors hover:bg-secondary hover:text-foreground"
          :class="isActive(item.to) ? 'bg-secondary text-foreground' : ''"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <a
          class="grid h-9 w-9 place-items-center border border-border rounded-[8px] bg-card text-muted-foreground focus-visible:h-focus transition-colors hover:bg-secondary hover:text-foreground"
          :href="profile.github"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github :size="17" />
        </a>
        <button
          class="grid h-9 w-9 place-items-center border border-border rounded-[8px] bg-card text-muted-foreground focus-visible:h-focus transition-colors hover:bg-secondary hover:text-foreground"
          type="button"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="isDark ? 'Light theme' : 'Dark theme'"
          @click="toggleTheme"
        >
          <Sun v-if="isDark" :size="17" />
          <Moon v-else :size="17" />
        </button>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <button
          class="grid h-9 w-9 place-items-center border border-border rounded-[8px] bg-card text-muted-foreground focus-visible:h-focus transition-colors hover:bg-secondary hover:text-foreground"
          type="button"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <Sun v-if="isDark" :size="17" />
          <Moon v-else :size="17" />
        </button>
        <button
          class="inline-grid h-9 w-9 place-items-center border border-border rounded-[8px] bg-card text-foreground focus-visible:h-focus"
          type="button"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" :size="18" />
          <Menu v-else :size="18" />
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="border-t border-border bg-background md:hidden">
      <nav class="grid container-page gap-1 py-3" aria-label="Mobile navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-[8px] px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          :class="isActive(item.to) ? 'bg-secondary text-foreground' : ''"
          @click="isOpen = false"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.lxr-brand-mark {
  display: grid;
  width: 42px;
  height: 24px;
  place-items: center;
}

.lxr-brand-mark svg {
  width: 42px;
  height: 24px;
  overflow: visible;
}

.lxr-brand-mark path {
  fill: none;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 6;
}

.lxr-mark-red {
  stroke: hsl(var(--primary));
}

.lxr-mark-light {
  stroke: hsl(var(--foreground));
}
</style>
