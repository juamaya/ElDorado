
<script setup lang="ts">
import type { Dish } from '~/data/restaurant'

defineProps<{ dish: Dish }>()
</script>

<template>
  <article class="group">
    <div class="relative overflow-hidden">
      <img
        :src="dish.image"
        :alt="dish.name"
        width="900"
        height="675"
        loading="lazy"
        class="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <span class="absolute left-4 top-4 bg-cream px-3 py-2 text-[10px] uppercase tracking-widest">
        {{ dish.category }}
      </span>
    </div>

    <div class="flex items-start justify-between gap-4 pt-5">
      <div>
        <h3 class="font-display text-2xl">{{ dish.name }}</h3>
        <p class="mt-2 max-w-sm text-sm leading-6 text-muted">
          {{ dish.description }}
        </p>
      </div>

      <span class="shrink-0 text-sm font-semibold">{{ dish.price }}</span>
    </div>
  </article>
</template>