<script setup lang="ts">
import Navbar from "~/componentes/Navbar.vue";
</script>

<template>
  <div>
    <navbar />
    <slot />
    <footer>FOOTER</footer>
  </div>
</template>
