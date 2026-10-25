<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "#app";

const route = useRoute();
const menuOpen = ref(false);

const links = [
  { name: "Home", path: "/" },
  { name: "Foods", path: "/foods" },
  { name: "Drinks", path: "/drinks" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const isActive = (path: string): boolean => {
  if (path === "/") return route.path === "/";
  return route.path === path || route.path.startsWith(`${path}/`);
};

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg backdrop-blur-xl"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      aria-label="Navegación principal"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-2xl font-extrabold tracking-tight text-emerald-400 transition hover:text-emerald-300"
        aria-label="Ir a Home"
      >
       <span class="text-white">El</span>Dorado
      </NuxtLink>

      <!-- Botón móvil -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg p-2 text-gray-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="navbar-menu"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="menuOpen = !menuOpen"
      >
        <!-- Icono hamburguesa -->
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <!-- Icono cerrar -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>

      <!-- Enlaces -->
      <ul
        id="navbar-menu"
        class="absolute left-0 right-0 top-full flex flex-col gap-2 border-b border-white/10 bg-slate-950 px-4 py-4 shadow-xl md:static md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
        :class="menuOpen ? 'flex' : 'hidden md:flex'"
      >
        <li v-for="link in links" :key="link.path">
          <NuxtLink
            :to="link.path"
            :aria-current="isActive(link.path) ? 'page' : undefined"
            class="block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200"
            :class="
              isActive(link.path)
                ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20'
                : 'text-gray-300 hover:bg-white/10 hover:text-emerald-300'
            "
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
