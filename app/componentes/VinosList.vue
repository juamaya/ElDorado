
<script setup lang="ts">
interface Vino {
  id: number
  nombre: string
  tipo: string
  denominacion: string
  precio: number
}

const vinos: Vino[] = [
  {
    id: 1,
    nombre: 'Rioja Crianza',
    tipo: 'Tinto',
    denominacion: 'D.O.Ca. Rioja',
    precio: 3.50,
  },
  {
    id: 2,
    nombre: 'Ribera del Duero',
    tipo: 'Tinto',
    denominacion: 'D.O. Ribera del Duero',
    precio: 4.00,
  },
  {
    id: 3,
    nombre: 'Verdejo',
    tipo: 'Blanco',
    denominacion: 'D.O. Rueda',
    precio: 3.00,
  },
  {
    id: 4,
    nombre: 'Albariño',
    tipo: 'Blanco',
    denominacion: 'D.O. Rías Baixas',
    precio: 4.00,
  },
  {
    id: 5,
    nombre: 'Rosado de Navarra',
    tipo: 'Rosado',
    denominacion: 'D.O. Navarra',
    precio: 3.00,
  },
  {
    id: 6,
    nombre: 'Cava Brut',
    tipo: 'Espumoso',
    denominacion: 'D.O. Cava',
    precio: 4.50,
  },
]

const formatoPrecio = (precio: number) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(precio)
</script>

<template>
  <section
    class="mx-auto w-full max-w-lg rounded-2xl border
           border-gray-200 bg-white p-6 shadow-sm"
  >
    <div class="mb-6">
      <div class="mb-2 flex items-center gap-2">
        <span class="text-2xl">🍷</span>
        <h2 class="text-2xl font-bold text-gray-900">
          Nuestra carta de vinos
        </h2>
      </div>

      <p class="text-sm text-gray-500">
        Una selección para cada ocasión
      </p>
    </div>

    <ul class="divide-y divide-gray-100">
      <li
        v-for="vino in vinos"
        :key="vino.id"
        class="flex items-center justify-between gap-4 py-4"
      >
        <div class="min-w-0">
          <p class="font-semibold text-gray-800">
            {{ vino.nombre }}
          </p>

          <p class="mt-1 text-xs text-gray-500">
            {{ vino.denominacion }}
          </p>

          <span
            class="mt-2 inline-flex rounded-full bg-rose-50
                   px-2.5 py-1 text-xs font-medium text-rose-700"
          >
            {{ vino.tipo }}
          </span>
        </div>

        <span
          class="shrink-0 rounded-lg bg-amber-50 px-3 py-1.5
                 font-semibold text-amber-800"
        >
          {{ formatoPrecio(vino.precio) }}
        </span>
      </li>
    </ul>

    <div class="mt-4 border-t border-gray-200 pt-4">
      <p class="text-sm text-gray-500">
        {{ vinos.length }} vinos disponibles
      </p>
    </div>
  </section>
</template>
