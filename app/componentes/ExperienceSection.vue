<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

import experienceImage from '/images/dorado1.jpg'
</script>

<template>
  <section id="nosotros" class="bg-ink text-cream">
    <div
      class="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-12"
    >
      <div class="relative">
        <img
          :src="experienceImage"
          alt="Ambiente elegante de nuestro restaurante"
          width="800"
          height="1000"
          loading="lazy"
          class="aspect-4/5 w-full object-cover"
        />

        <div
          class="absolute -bottom-5 right-0 bg-terracotta px-6 py-5 sm:-right-5"
        >
          <p class="font-display text-3xl italic">Sin prisas.</p>
          <p class="mt-1 text-xs tracking-widest">SOLO DISFRUTA</p>
        </div>
      </div>

      <div class="py-5 lg:py-10">
        <SectionHeading
          eyebrow="Nuestra filosofía"
          title="Los pequeños detalles hacen los grandes momentos."
          description="Creemos en el producto de temporada, en el placer de compartir y en convertir cada visita en un recuerdo. Una cocina honesta con un espíritu contemporáneo."
        />

        Platos destacados
        <div class="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-7">
          <div>
            <p class="font-display text-3xl text-terracotta">01</p>
            <h3 class="mt-3 text-sm font-semibold">Pescaíto frito</h3>
            <p class="mt-2 text-sm leading-6 text-white/55">
              Cazón en adobo, chocos fritos, pijotas, acedias, puntillitas y
              tortillitas de camarones.
            </p>
          </div>

          <div>
            <p class="font-display text-3xl text-terracotta">02</p>
            <h3 class="mt-3 text-sm font-semibold">Mariscos y plancha</h3>
            <p class="mt-2 text-sm leading-6 text-white/55">
              Gambas a la plancha, almejas a la marinera, chipirones e higaditos
              de conejo a la plancha (conocidos como tachuelas o gachuelas).
            </p>
          </div>
          <div>
            <p class="font-display text-3xl text-terracotta">03</p>
            <h3 class="mt-3 text-sm font-semibold">Especialidades</h3>
            <p class="mt-2 text-sm leading-6 text-white/55">
              Atún encebollado o ventresca
            </p>
          </div>
        </div>

        <div class="mt-9">
          <BaseButton to="/foods" variant="outline"
            >Explorar la carta</BaseButton
          >
        </div>
      </div>
    </div>
  </section>
</template>
