<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'LXR - 游戏策划作品集',
  meta: [
    {
      name: 'description',
      content: 'LXR 的游戏策划作品集，展示系统拆解、策划文档、游戏演示与游玩经历。',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <HeroSection />
    <ResourcesSection />
  </DefaultLayout>
</template>
