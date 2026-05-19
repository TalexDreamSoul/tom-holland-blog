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
    <section class="container-page py-14 md:py-20">
      <RouterLink to="/" class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground font-700 focus-visible:h-focus hover:text-foreground">
        <ArrowLeft :size="16" />
        Back home
      </RouterLink>
      <p class="eyebrow">
        Portfolio
      </p>
      <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
        {{ column.title }}
      </h1>
      <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
        {{ column.description }}
      </p>
    </section>

    <section class="container-page border-t border-border pb-24 pt-8">
      <div v-if="column.gallery?.length" class="mb-8 border border-border rounded-[8px] bg-card p-4 shadow-soft">
        <div class="relative overflow-hidden border border-border rounded-[8px] bg-secondary">
          <img
            class="aspect-[16/9] w-full object-cover"
            :src="column.gallery[activeSlide]"
            :alt="`${column.title} slide`"
          >
          <div class="absolute inset-x-0 bottom-0 flex items-center justify-between from-foreground/58 to-transparent bg-gradient-to-t p-3">
            <div class="flex gap-1.5">
              <button
                v-for="(_, index) in column.gallery"
                :key="index"
                type="button"
                class="h-1.5 rounded-full transition-all"
                :class="index === activeSlide ? 'w-6 bg-background' : 'w-1.5 bg-background/54'"
                :aria-label="`Go to slide ${index + 1}`"
                @click="goToSlide(index)"
              />
            </div>
            <div class="flex gap-1">
              <button
                type="button"
                class="grid h-8 w-8 place-items-center rounded-[8px] bg-background/92 text-foreground focus-visible:h-focus hover:bg-background"
                aria-label="Previous slide"
                @click="goToSlide(activeSlide - 1)"
              >
                <ChevronLeft :size="16" />
              </button>
              <button
                type="button"
                class="grid h-8 w-8 place-items-center rounded-[8px] bg-background/92 text-foreground focus-visible:h-focus hover:bg-background"
                aria-label="Next slide"
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
          class="group border border-border rounded-[8px] bg-card p-5 shadow-soft focus-visible:h-focus transition-colors"
          :class="item.disabled ? 'opacity-72' : 'hover:bg-secondary/55'"
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
            {{ item.disabled ? 'Coming soon' : 'Open file' }}
            <ArrowDownToLine v-if="!item.disabled" :size="16" />
          </div>
        </component>
      </div>
    </section>
  </DefaultLayout>
</template>
