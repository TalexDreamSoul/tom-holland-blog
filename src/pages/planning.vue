<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { resources } from '~/data/profile'

const column = resources.columns.find(item => item.id === 'planning')!

useHead({
  title: '策划 - Tom Holland',
})
</script>

<template>
  <ResourceDetailPage :column="column" />
</template>
