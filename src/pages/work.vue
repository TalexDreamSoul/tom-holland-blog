<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { projects } from '~/data/profile'

useHead({
  title: '作品 - LXR',
  meta: [
    {
      name: 'description',
      content: 'LXR 的游戏策划作品归档，包含系统拆解、策划文档、游戏演示与体验记录。',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <section class="container-page py-16 md:py-24" data-motion="section">
      <div data-motion="section-heading">
        <p class="eyebrow">
          作品集
        </p>
        <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
          围绕拆解、策划和游戏演示的作品归档。
        </h1>
        <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
          以清晰入口整理文档、方案与体验记录，方便快速了解项目内容和思考过程。
        </p>
      </div>
    </section>

    <section class="container-page border-t border-border pb-24 pt-8" data-motion="section">
      <div class="grid gap-5 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
          data-motion="card"
        />
      </div>
    </section>

    <ResourcesSection />
  </DefaultLayout>
</template>
