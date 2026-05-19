<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { projects } from '~/data/profile'

useHead({
  title: 'Work - Tom Holland',
  meta: [
    {
      name: 'description',
      content: 'Selected portfolio projects by Tom Holland across product design, blogs, systems, and frontend interfaces.',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <section class="container-page py-16 md:py-24">
      <p class="eyebrow">
        Portfolio
      </p>
      <h1 class="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] font-680 leading-[0.9]">
        Selected projects with a quiet point of view.
      </h1>
      <p class="mt-7 max-w-2xl text-lg text-muted-foreground">
        Product surfaces, personal publishing systems, and visual experiments made with a preference for clarity and restraint.
      </p>
    </section>

    <section class="container-page border-t border-border pb-24 pt-8">
      <div class="grid gap-5 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </section>

    <ResourcesSection />
  </DefaultLayout>
</template>
