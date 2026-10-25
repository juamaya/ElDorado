<script setup lang="ts">
import Footer from "~/componentes/Footer.vue";
import Navbar from "~/componentes/Navbar.vue";
</script>

<template>
  <div>
    <navbar />
    <slot />
     <Footer/>
  </div>
</template>
