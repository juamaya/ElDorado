
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

// Detectar el scroll
const handleScroll = () => {
  visible.value = window.scrollY > 300
}

// Volver al principio
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="scroll">
    <button
      v-if="visible"
      @click="scrollToTop"
      aria-label="Volver al principio"
      title="Ir al principio"
      class="fixed bottom-15 right-5 sm:bottom-15 sm:right-8
             z-50 w-12 h-12 sm:w-14 sm:h-14 cursor-pointer
             flex items-center justify-center
             rounded-full bg-indigo-600 text-white
             shadow-xl hover:bg-indigo-700
             hover:-translate-y-1
             active:scale-90
             transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 sm:w-7 sm:h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-enter-active,
.scroll-leave-active {
  transition: all 0.3s ease;
}

.scroll-enter-from,
.scroll-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
