<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { resources } from '~/data/profile'

const column = resources.columns.find(item => item.id === 'analysis')!

useHead({
  title: '拆解 - Tom Holland',
})
</script>

<template>
  <ResourceDetailPage :column="column" />
</template>
