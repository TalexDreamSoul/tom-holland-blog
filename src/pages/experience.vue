<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { Search } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { gameExperience } from '~/data/profile'

const query = ref('')
const activePlatform = ref('\u5168\u90E8')
const platforms = ['\u5168\u90E8', 'PC\u6E38\u620F', '\u624B\u673A\u6E38\u620F']

const filteredGames = computed(() => {
  const keyword = query.value.trim().toLowerCase()

  return gameExperience.filter((game) => {
    const matchesPlatform = activePlatform.value === '\u5168\u90E8' || game.platform === activePlatform.value
    const matchesQuery = !keyword
      || game.title.toLowerCase().includes(keyword)
      || game.platform.toLowerCase().includes(keyword)
      || game.description.toLowerCase().includes(keyword)

    return matchesPlatform && matchesQuery
  })
})

useHead({
  title: '\u6E38\u620F\u7ECF\u5386 - Tom Holland',
})
</script>

<template>
  <DefaultLayout>
    <section class="container-page py-14 md:py-20">
      <p class="eyebrow">
        Experience
      </p>
      <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
        {{ '\u6E38\u620F\u7ECF\u5386' }}
      </h1>
      <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
        {{ '\u6211\u73A9\u8FC7\u548C\u6301\u7EED\u89C2\u5BDF\u7684\u6E38\u620F\u5217\u8868\uFF0C\u53EF\u6309\u7C7B\u578B\u548C\u5173\u952E\u8BCD\u5FEB\u901F\u67E5\u8BE2\u3002' }}
      </p>
    </section>

    <section class="container-page border-t border-border pb-24 pt-8">
      <div class="grid mb-8 gap-4 border border-border rounded-[8px] bg-card p-4 shadow-soft md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <label class="relative block">
          <Search class="pointer-events-none absolute left-3 top-1/2 text-muted-foreground -translate-y-1/2" :size="18" />
          <input
            v-model="query"
            class="h-11 w-full border border-input rounded-[8px] bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
            type="search"
            placeholder="搜索游戏名称、平台或关键词"
          >
        </label>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="platform in platforms"
            :key="platform"
            type="button"
            class="h-10 rounded-[8px] px-4 text-sm font-700 focus-visible:h-focus transition-colors"
            :class="activePlatform === platform ? 'bg-foreground text-background' : 'bg-secondary text-muted-foreground hover:text-foreground'"
            @click="activePlatform = platform"
          >
            {{ platform }}
          </button>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <AppCard v-for="game in filteredGames" :key="game.title" class="p-4">
          <div class="grid grid-cols-[76px_minmax(0,1fr)] gap-4">
            <img
              class="h-19 w-19 border border-border rounded-[8px] object-cover"
              :src="game.icon"
              :alt="`${game.title} icon`"
            >
            <div class="min-w-0">
              <AppBadge variant="outline">
                {{ game.platform }}
              </AppBadge>
              <h2 class="mt-3 text-2xl font-620 leading-tight">
                {{ game.title }}
              </h2>
              <p class="mt-3 text-sm text-muted-foreground">
                {{ game.description }}
              </p>
            </div>
          </div>
        </AppCard>
      </div>

      <div v-if="!filteredGames.length" class="border border-border rounded-[8px] bg-card p-8 text-center text-muted-foreground">
        {{ '\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u6E38\u620F\u3002' }}
      </div>
    </section>
  </DefaultLayout>
</template>
