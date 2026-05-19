<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { projects } from '~/data/profile'
</script>

<template>
  <section class="container-page border-t border-border py-18 md:py-24">
    <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p class="eyebrow">
          Portfolio
        </p>
        <h2 class="mt-4 text-[clamp(2rem,5vw,4.5rem)] font-620 leading-[1]">
          Selected work
        </h2>
      </div>
      <AppButton to="/work" variant="secondary">
        Work archive
        <ArrowRight :size="16" />
      </AppButton>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
