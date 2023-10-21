<template>
  <li
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
    >
      <VIcon
        v-bind="item.icon"
        class="nav-item-icon"
      />
      <TransitionGroup name="transition-slide-x">
        <!-- 👉 Title -->
        <span
          key="title"
          class="nav-item-title"
        >
          {{ item.title }}
        </span>

        <!-- 👉 Badge -->
        <span
          v-if="item.badgeContent"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >
          {{ item.badgeContent }}
        </span>
      </TransitionGroup>
    </Component>
  </li>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components'
import { TransitionGroup } from 'vue';

import type { NavLink } from '../types'
import { getComputedNavLinkToProp } from '../utils'

const props = defineProps<{ item: NavLink }>()
</script>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
