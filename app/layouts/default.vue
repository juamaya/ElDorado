
<script setup lang="ts">
import Footer from "~/componentes/Footer.vue";
import Navbar from "~/componentes/Navbar.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
