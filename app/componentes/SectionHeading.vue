
<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="centered ? 'mx-auto text-center' : 'text-left'" class="max-w-2xl">
    <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
      {{ eyebrow }}
    </p>

    <h2 class="font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
      {{ title }}
    </h2>

    <p
      v-if="description"
      :class="centered ? 'mx-auto' : ''"
      class="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>