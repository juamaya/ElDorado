
<script setup lang="ts">
interface Bebida {
  id: number
  nombre: string
  precio: number
}

const bebidas: Bebida[] = [
  { id: 1, nombre: 'Agua mineral', precio: 1.50 },
  { id: 2, nombre: 'Coca-Cola', precio: 2.00 },
  { id: 3, nombre: 'Fanta Naranja', precio: 2.00 },
  { id: 4, nombre: 'Zumo de naranja', precio: 2.50 },
  { id: 5, nombre: 'Café', precio: 1.40 },
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
     
      <p class="mt-1 text-sm text-gray-500">
        Nuestras bebidas y sus precios
      </p>
    </div>

    <ul class="divide-y divide-gray-100">
      <li
        v-for="bebida in bebidas"
        :key="bebida.id"
        class="flex items-center justify-between gap-4 py-4"
      >
        <span class="font-medium text-gray-700">
          {{ bebida.nombre }}
        </span>

        <span class="shrink-0 rounded-lg bg-green-50 px-3 py-1.5
                     font-semibold text-green-700">
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
