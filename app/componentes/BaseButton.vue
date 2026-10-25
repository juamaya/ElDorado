<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string;
    variant?: "primary" | "outline" | "light";
  }>(),
  {
    href: "/contact",
    variant: "primary",
  },
);

const variants = {
  primary: "bg-terracotta text-white hover:bg-ink",
  outline: "border border-current text-white hover:bg-white/10",
  light: "bg-cream text-ink hover:bg-white",
};
</script>

<template>
  <div>
    <NuxtLink
      :to="to"
      :class="[
        'inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-300',
        variants[variant],
      ]"
    >
      <slot />
      <span aria-hidden="true">↗</span>
    </NuxtLink>
  </div>
</template>
