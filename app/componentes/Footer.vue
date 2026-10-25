
<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const menu = [
  { name: 'Foods', path: '/foods' },
  { name: 'Drinks', path: '/drinks' },
]
</script>

<template>
  <footer class="bg-slate-950 text-gray-300">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">

      <!-- Contenido principal -->
      <div
        class="grid grid-cols-1 gap-10 sm:grid-cols-2
               lg:grid-cols-4"
      >
        <!-- Logo y descripción -->
        <div class="lg:col-span-2">
          <NuxtLink
            to="/"
            class="inline-block text-2xl font-extrabold
                   tracking-tight text-emerald-400
                   transition hover:text-emerald-300"
          >
         <span class="text-white">El</span>Dorado
          </NuxtLink>

          <p class="mt-4 max-w-md text-sm leading-7 text-gray-400">
            Descubre una experiencia gastronómica única,
            con deliciosas comidas y bebidas para disfrutar
            en cada momento.
          </p>

          <!-- Redes sociales -->
          <div class="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="rounded-lg p-2 transition hover:bg-white/10
                     hover:text-emerald-400 focus:outline-none
                     focus:ring-2 focus:ring-emerald-400"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="rounded-lg p-2 transition hover:bg-white/10
                     hover:text-emerald-400 focus:outline-none
                     focus:ring-2 focus:ring-emerald-400"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M13.5 21v-8h2.7l.4-3h-3.1V8.1
                     c0-.9.3-1.5 1.6-1.5h1.7V3.9
                     c-.3 0-1.3-.1-2.5-.1-2.5
                     0-4.2 1.5-4.2 4.3V10H7.3v3
                     h2.8v8h3.4Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navegación -->
        <div>
          <h2 class="text-sm font-bold uppercase tracking-wider
                     text-white">
            Navegación
          </h2>

          <ul class="mt-5 space-y-3">
            <li v-for="link in navigation" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-sm transition hover:text-emerald-400"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Menú -->
        <div>
          <h2 class="text-sm font-bold uppercase tracking-wider
                     text-white">
            Nuestro menú
          </h2>

          <ul class="mt-5 space-y-3">
            <li v-for="item in menu" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-sm transition hover:text-emerald-400"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Separador -->
      <div class="my-10 border-t border-white/10"></div>

      <!-- Copyright -->
      <div
        class="flex flex-col items-center justify-between gap-4
               text-center sm:flex-row sm:text-left"
      >
        <p class="text-sm text-gray-500">
         Juamaya © {{ currentYear }} El Dorado.
          Todos los derechos reservados.
        </p>

        <NuxtLink
          to="/contact"
          class="text-sm transition hover:text-emerald-400"
        >
          Contacta con nosotros
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
