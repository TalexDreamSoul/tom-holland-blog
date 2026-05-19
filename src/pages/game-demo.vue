<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { resources } from '~/data/profile'

const column = resources.columns.find(item => item.id === 'game-demo')!

useHead({
  title: '游戏 Demo - Tom Holland',
})
</script>

<template>
  <ResourceDetailPage :column="column" />
</template>
