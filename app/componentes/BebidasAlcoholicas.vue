
<script setup lang="ts">
interface BebidaAlcoholica {
  id: number
  nombre: string
  precio: number
  categoria: string
}

const bebidas: BebidaAlcoholica[] = [
  { id: 1, nombre: 'Cerveza', precio: 2.80, categoria: 'Cervezas' },
  { id: 2, nombre: 'Cerveza premium', precio: 3.50, categoria: 'Cervezas' },
  { id: 3, nombre: 'Vino tinto', precio: 3.00, categoria: 'Vinos' },
  { id: 4, nombre: 'Vino blanco', precio: 3.00, categoria: 'Vinos' },
  { id: 5, nombre: 'Copa de vermut', precio: 3.50, categoria: 'Vermut' },
  { id: 6, nombre: 'Gin tonic', precio: 7.00, categoria: 'Cócteles' },
  { id: 7, nombre: 'Mojito', precio: 7.50, categoria: 'Cócteles' },
  { id: 8, nombre: 'Copa de whisky', precio: 6.00, categoria: 'Destilados' },
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
          Bebidas alcohólicas
        </h2>
      </div>

      <p class="text-sm text-gray-500">
        Nuestra selección de bebidas
      </p>
    </div>

    <ul class="divide-y divide-gray-100">
      <li
        v-for="bebida in bebidas"
        :key="bebida.id"
        class="flex items-center justify-between gap-4 py-4"
      >
        <div>
          <p class="font-medium text-gray-800">
            {{ bebida.nombre }}
          </p>
          <p class="mt-1 text-xs text-gray-500">
            {{ bebida.categoria }}
          </p>
        </div>

        <span
          class="shrink-0 rounded-lg bg-amber-50 px-3 py-1.5
                 font-semibold text-amber-800"
        >
          {{ formatoPrecio(bebida.precio) }}
        </span>
      </li>
    </ul>

    <div class="mt-4 border-t border-gray-200 pt-4">
      <p class="text-sm text-gray-500">
        {{ bebidas.length }} bebidas disponibles
      </p>
    </div>
  </section>
</template>
