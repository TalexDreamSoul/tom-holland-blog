<script setup lang="ts">
import type { GameExperienceItem } from '~/data/profile'
import { useHead } from '@unhead/vue'
import { Search } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { gameExperience } from '~/data/profile'

const ALL_PLATFORM = '\u5168\u90E8'
const PC_PLATFORM = 'PC\u6E38\u620F'
const MOBILE_PLATFORM = '\u624B\u673A\u6E38\u620F'

const copy = {
  title: '\u6E38\u620F\u7ECF\u5386',
  description: '\u6211\u73A9\u8FC7\u548C\u6301\u7EED\u89C2\u5BDF\u7684\u6E38\u620F\u5217\u8868\uFF0C\u53EF\u6309\u7C7B\u578B\u548C\u5173\u952E\u8BCD\u5FEB\u901F\u67E5\u8BE2\u3002',
  searchPlaceholder: '\u641C\u7D22\u6E38\u620F\u540D\u3001\u7C7B\u578B\u6216\u5173\u952E\u8BCD',
  pcTitle: 'PC\u6E38\u620F',
  mobileTitle: '\u624B\u673A\u6E38\u620F',
  totalTime: '\u603B\u65F6\u957F',
  achievements: '\u6210\u5C31\u6570',
  empty: '\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u6E38\u620F\u3002',
}

const query = ref('')
const activePlatform = ref(ALL_PLATFORM)
const platforms = [ALL_PLATFORM, PC_PLATFORM, MOBILE_PLATFORM]

const filteredGames = computed(() => {
  const keyword = query.value.trim().toLowerCase()

  return gameExperience.filter((game) => {
    const matchesPlatform = activePlatform.value === ALL_PLATFORM || game.platform === activePlatform.value
    const matchesQuery = !keyword
      || game.title.toLowerCase().includes(keyword)
      || game.platform.toLowerCase().includes(keyword)
      || game.description.toLowerCase().includes(keyword)

    return matchesPlatform && matchesQuery
  })
})

const pcGames = computed(() => filteredGames.value.filter(game => game.platform === PC_PLATFORM))
const mobileGames = computed(() => filteredGames.value.filter(game => game.platform === MOBILE_PLATFORM))

function formatHours(hours?: number) {
  if (typeof hours !== 'number')
    return '--'

  return `${Number.isInteger(hours) ? hours.toFixed(0) : hours.toFixed(1)}h`
}

function progressWidth(progress?: number) {
  const safeProgress = Math.min(100, Math.max(0, progress ?? 0))

  return `${safeProgress}%`
}

function achievementsLabel(game: GameExperienceItem) {
  if (!game.achievements)
    return '--'

  return `${game.achievements.unlocked} / ${game.achievements.total}`
}

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
        {{ copy.title }}
      </h1>
      <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
        {{ copy.description }}
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
            :placeholder="copy.searchPlaceholder"
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

      <div v-if="filteredGames.length" class="space-y-10">
        <section v-if="pcGames.length" aria-labelledby="pc-games-title">
          <div class="mb-4">
            <p class="eyebrow">
              PC
            </p>
            <h2 id="pc-games-title" class="mt-2 text-2xl font-650">
              {{ copy.pcTitle }}
            </h2>
          </div>

          <div class="overflow-hidden border border-border rounded-[8px] bg-card shadow-soft">
            <article
              v-for="game in pcGames"
              :key="game.title"
              class="grid grid-cols-[116px_minmax(0,1fr)] items-center gap-3 border-b border-border p-3 md:grid-cols-[180px_minmax(0,1fr)_108px] md:gap-4 last:border-b-0 md:p-4"
            >
              <img
                class="h-[76px] w-full border border-border rounded-[8px] object-cover md:h-[96px]"
                :src="game.icon"
                :alt="`${game.title} cover`"
              >

              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <h3 class="text-lg font-650 leading-tight md:text-2xl">
                    {{ game.title }}
                  </h3>
                  <span class="text-sm text-muted-foreground">
                    {{ copy.totalTime }} {{ formatHours(game.playtimeHours) }}
                  </span>
                </div>

                <p class="line-clamp-2 mt-2 hidden text-sm text-muted-foreground sm:block">
                  {{ game.description }}
                </p>

                <div class="grid mt-3 gap-2 sm:grid-cols-[minmax(0,1fr)_auto] md:mt-4 sm:items-center">
                  <div>
                    <div class="mb-1 text-right text-xs text-muted-foreground font-700">
                      <span>{{ game.progress ?? 0 }}%</span>
                    </div>
                    <div class="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        class="h-full rounded-full bg-primary"
                        :style="{ width: progressWidth(game.progress) }"
                      />
                    </div>
                  </div>

                  <div class="text-sm text-muted-foreground md:hidden sm:min-w-25 sm:text-right">
                    {{ copy.achievements }}
                    <span class="ml-1 text-foreground font-700">
                      {{ achievementsLabel(game) }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="hidden text-right md:block">
                <p class="text-xs text-muted-foreground font-700">
                  {{ copy.achievements }}
                </p>
                <p class="mt-2 text-xl font-650">
                  {{ achievementsLabel(game) }}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section v-if="mobileGames.length" aria-labelledby="mobile-games-title">
          <div class="mb-4">
            <p class="eyebrow">
              Mobile
            </p>
            <h2 id="mobile-games-title" class="mt-2 text-2xl font-650">
              {{ copy.mobileTitle }}
            </h2>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <AppCard v-for="game in mobileGames" :key="game.title" class="p-4">
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
                  <h3 class="mt-3 text-2xl font-620 leading-tight">
                    {{ game.title }}
                  </h3>
                  <p class="mt-3 text-sm text-muted-foreground">
                    {{ game.description }}
                  </p>
                </div>
              </div>
            </AppCard>
          </div>
        </section>
      </div>

      <div v-else class="border border-border rounded-[8px] bg-card p-8 text-center text-muted-foreground">
        {{ copy.empty }}
      </div>
    </section>
  </DefaultLayout>
</template>
