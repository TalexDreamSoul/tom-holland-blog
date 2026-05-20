<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'LXR - Portfolio, Blog, and Work',
  meta: [
    {
      name: 'description',
      content: 'A minimal personal website for LXR, featuring selected work, writing, and portfolio notes.',
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
