<script setup lang="ts">
 
import DishCard1 from '~/componentes/DishCard1.vue'
 
import { raciones } from '~/data/raciones'
import BaseMarquee from '~/componentes/BaseMarquee.vue';

const config = useRuntimeConfig();

const tapas = [
  { src: "/images/atun.jpg", alt: "Atun" },
  { src: "/images/cazon.jpg", alt: "Cazon" },
  { src: "/images/boquerones.jpg", alt: "Boquerones" },
  { src: "/images/puntillitas.jpg", alt: "puntillitas" },
  { src: "/images/pescaito.jpg", alt: "pescaito" },
].map(image => ({
  ...image,
  src: `${config.app.baseURL}${image.src.replace(/^\//, '')}`
}));

</script>

<template>
  <main class="mx-auto bg-gray-300 max-w-7xl px-6 py-12">
    <h1 class="text-4xl text-center  font-bold text-slate-900">Nuestras raciones</h1>

    <h1 class="text-xl font-bold text-slate-600 mt-5">
      La fritura de pescado y marisco (o pescaíto frito) es uno de los platos
      más emblemáticos de la gastronomía andaluza. Su secreto reside en
      conseguir una textura exterior muy crujiente y un interior jugoso, sin que
      el alimento quede grasiento.
    </h1>
    <p class="mt-4 text-lg text-slate-600">
      Descubre nuestra selección de platos.
    </p>

    <div
      id="carta"
      class="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      <img
        src="/images/ramon.jpg "
        alt="Vasos de cerveza"
        class="h-52 w-full rounded-xl object-cover sm:h-80"
        loading="lazy"
      />
      <DishCard1 v-for="dish in raciones" :key="dish.id" :dish="dish" />
    </div>
    <h1 class="text-2xl font-bold text-slate-600 mt-10">
      Aquí tienes una selección de platos y tapas,
      para que elijas tu favorita
    </h1>

  <section class="container-fluid bg-terracotta/80 rounded-4xl mt-5 py-5">
 

    <BaseMarquee
      :images="tapas"
      :speed="30"
      direction="left"
      height="140px"
      image-width="200px"
      gap="24px"
      rounded="rounded-4"
      :pause-on-hover="true"
    />
     </section>
    <!--
  Este comentario ocupa
  varias líneas.
  
  
  <div
  id="carta"
  class="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
  >
  
  <DishCard v-for="dish in restaurant.dishes" :key="dish.id" :dish="dish" />  
  
</div>

-->
  </main>
</template>
