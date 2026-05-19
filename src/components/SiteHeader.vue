<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navItems, profile } from '~/data/profile'

const route = useRoute()
const isOpen = ref(false)

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
        <span class="grid h-8 w-8 place-items-center rounded-[8px] bg-foreground text-sm text-background font-800">
          TH
        </span>
        <span class="hidden text-sm font-700 sm:inline">{{ profile.name }}</span>
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
        <AppButton href="mailto:hello@tomholland.dev" variant="secondary" size="sm">
          Start a conversation
        </AppButton>
      </div>

      <button
        class="inline-grid h-9 w-9 place-items-center border border-border rounded-[8px] bg-card text-foreground focus-visible:h-focus md:hidden"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" :size="18" />
        <Menu v-else :size="18" />
      </button>
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
