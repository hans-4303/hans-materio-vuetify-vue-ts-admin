<template>
  <li class="nav-section-title">
    <div class="title-wrapper">
      <Transition
        name="vertical-nav-section-title"
        mode="out-in"
      >
        <!-- eslint-disable vue/no-v-text-v-html-on-component -->
        <span
          class="title-text"
          v-text="item.heading"
        />
        <!-- eslint-enable vue/no-v-text-v-html-on-component -->
      </Transition>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { NavSectionTitle } from '../types'
import { defineProps } from 'vue'

defineProps<{ item: NavSectionTitle }>()
</script>
