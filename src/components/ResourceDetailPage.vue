<script setup lang="ts">
import { ArrowDownToLine, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  column: {
    title: string
    description: string
    gallery?: string[]
    items: Array<{
      title: string
      type: string
      href: string
      disabled: boolean
      description: string
    }>
  }
}>()

const activeSlide = ref(0)
let timer: ReturnType<typeof window.setInterval> | undefined

function goToSlide(index: number) {
  const slides = props.column.gallery ?? []
  if (!slides.length)
    return

  activeSlide.value = (index + slides.length) % slides.length
}

onMounted(() => {
  timer = window.setInterval(() => {
    goToSlide(activeSlide.value + 1)
  }, 4200)
})

onUnmounted(() => {
  if (timer)
    window.clearInterval(timer)
})
</script>

<template>
  <DefaultLayout>
    <section class="container-page py-14 md:py-20" data-motion="section">
      <RouterLink to="/" class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground font-700 focus-visible:h-focus hover:text-foreground" data-motion="text">
        <ArrowLeft :size="16" />
        返回主页
      </RouterLink>
      <div data-motion="section-heading">
        <p class="eyebrow">
          作品集
        </p>
        <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
          {{ column.title }}
        </h1>
        <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
          {{ column.description }}
        </p>
      </div>
    </section>

    <section class="container-page border-t border-border pb-24 pt-8" data-motion="section">
      <div v-if="column.gallery?.length" class="wine-panel mb-8 border rounded-[8px] p-4" data-motion="media">
        <div class="wine-surface relative overflow-hidden border rounded-[8px]">
          <img
            class="wine-image-bright aspect-[16/9] w-full object-cover"
            :src="column.gallery[activeSlide]"
            :alt="`${column.title}轮播图`"
          >
          <div class="absolute inset-x-0 bottom-0 flex items-center justify-between from-foreground/58 to-transparent bg-gradient-to-t p-3">
            <div class="flex gap-1.5">
              <button
                v-for="(_, index) in column.gallery"
                :key="index"
                type="button"
                class="h-1.5 rounded-full transition-all"
                :class="index === activeSlide ? 'w-6 bg-primary' : 'w-1.5 bg-primary/42'"
                :aria-label="`跳转到第 ${index + 1} 张`"
                @click="goToSlide(index)"
              />
            </div>
            <div class="flex gap-1">
              <button
                type="button"
                class="wine-inset grid h-8 w-8 place-items-center border rounded-[8px] text-foreground focus-visible:h-focus hover:border-primary"
                aria-label="上一张"
                @click="goToSlide(activeSlide - 1)"
              >
                <ChevronLeft :size="16" />
              </button>
              <button
                type="button"
                class="wine-inset grid h-8 w-8 place-items-center border rounded-[8px] text-foreground focus-visible:h-focus hover:border-primary"
                aria-label="下一张"
                @click="goToSlide(activeSlide + 1)"
              >
                <ChevronRight :size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <component
          :is="item.disabled ? 'div' : 'a'"
          v-for="item in column.items"
          :key="item.title"
          :href="item.disabled ? undefined : item.href"
          :target="item.disabled ? undefined : '_blank'"
          :rel="item.disabled ? undefined : 'noreferrer'"
          class="wine-panel group border rounded-[8px] p-5 focus-visible:h-focus transition-colors"
          :class="item.disabled ? 'opacity-72' : 'hover:border-primary/70'"
          data-motion="card"
        >
          <AppBadge variant="outline">
            {{ item.type }}
          </AppBadge>
          <h2 class="mt-5 text-2xl font-620 leading-tight">
            {{ item.title }}
          </h2>
          <p class="mt-3 text-muted-foreground">
            {{ item.description }}
          </p>
          <div class="mt-6 flex items-center gap-2 text-sm text-muted-foreground font-700 transition-colors group-hover:text-foreground">
            {{ item.disabled ? '即将开放' : '打开文件' }}
            <ArrowDownToLine v-if="!item.disabled" :size="16" />
          </div>
        </component>
      </div>
    </section>
  </DefaultLayout>
</template>
