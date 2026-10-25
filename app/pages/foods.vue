<script setup lang="ts">
import DishCard from '~/componentes/DishCard.vue';
import { restaurant } from '~/data/restaurant';
import { raciones } from '~/data/raciones';
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-12">
    <h1 class="text-4xl font-bold text-slate-900">
      Nuestras raciones
    </h1>
    
    <h1 class="text-2xl font-bold text-slate-600">
La fritura de pescado y marisco (o pescaíto frito) es uno de los platos más emblemáticos de la gastronomía andaluza. Su secreto reside en conseguir una textura exterior muy crujiente y un interior jugoso, sin que el alimento quede grasiento.
  </h1>
    <p class="mt-4 text-lg text-slate-600">
      Descubre nuestra selección de platos.
    </p>

 <div id="carta" class="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
  <DishCard
              v-for="dish in raciones"
              :key="dish.id"
              :dish="dish"
            />
             

            <DishCard
              v-for="dish in restaurant.dishes"
              :key="dish.id"
              :dish="dish"
            />
             
           
          </div>

  </section>
</template>