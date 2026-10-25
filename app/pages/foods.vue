<script setup lang="ts">
import DishCard from '~/componentes/DishCard.vue';
import { restaurant } from '~/data/restaurant';
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-12">
    <h1 class="text-4xl font-bold text-slate-900">
      Nuestras comidas
    </h1>

    <p class="mt-4 text-lg text-slate-600">
      Descubre nuestra selección de platos.
    </p>

 <div id="carta" class="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <DishCard
              v-for="dish in restaurant.dishes"
              :key="dish.id"
              :dish="dish"
            />
             
           
          </div>

  </section>
</template>