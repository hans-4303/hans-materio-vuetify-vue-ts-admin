<template>
  <ThemeSwitcher :themes="themes" />
</template>

<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@/layouts/core/types'
import ThemeSwitcher from '@/components/compounds/ThemeSwitcher.vue'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'light',
    icon: 'mdi-weather-sunny',
  },
  {
    name: 'dark',
    icon: 'mdi-weather-night',
  },
]
</script>
