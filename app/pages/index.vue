<script setup lang="ts">
 
import BaseButton from '~/componentes/BaseButton.vue';
 
import ExperienceSection from '~/componentes/ExperienceSection.vue';
import SectionHeading from '~/componentes/SectionHeading.vue';
 

 

useSeoMeta({
  title: 'El Dorado | Cerveceria',
  description: 'Descubre nuestra cocina de temporada, vinos seleccionados y coctelería de autor.',
  ogTitle: 'ATELIER — Cocina, vino y momentos',
  ogDescription: 'Una experiencia gastronómica contemporánea.',
  ogType: 'website',
})

import heroImage from '/images/dorado.jpg'

</script>

<template>
  <div class="bg-gray-300">
    <section
      id="inicio"
      class="relative flex min-h-[90svh] items-center overflow-hidden bg-ink text-white lg:min-h-195"
    >
      <img
        :src="heroImage"
        alt="Interior cálido y elegante de un restaurante"
        width="2400"
        height="1600"
        fetchpriority="high"
        class="absolute inset-0 size-full object-cover"
      />

      <div class="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/15" />
      <div class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />

 
     

      <div class="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-36 sm:px-8 lg:px-12">
        <div class="max-w-3xl">
          <p class="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-white/80">
            <span class="h-px w-10 bg-terracotta" />
          El Bar "El Dorado" es un clásico y popular establecimiento en Puerto Real (Cádiz), famoso por su pescado frito de la Bahía y su ambiente tradicional.
          </p>

          <h1 class="font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            El arte de
            <span class="block italic text-terracotta">disfrutar</span>
            sin prisas.
          </h1>

          <p class="mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Una mesa, una buena copa y sabores que cuentan historias.
            Bienvenido a una forma diferente de disfrutar.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <BaseButton to="/contact">Reserva tu mesa</BaseButton>
            <BaseButton to="/foods" variant="outline">Explorar la carta</BaseButton>
            
          </div>
        </div>

        <div class="mt-20 flex items-end justify-between border-t border-white/25 pt-5 sm:mt-28">
          <p class="text-[10px] uppercase tracking-[0.2em] text-white/65 sm:text-xs">
            Buena cocina. Mejores momentos.
          </p>
        
        </div>
      </div>
    </section>

    <main>
      <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <SectionHeading
              eyebrow="Una carta con personalidad"
              title="El sabor está en los detalles."
              description="Platos que respetan el producto, ingredientes de temporada y una manera muy nuestra de entender la cocina."
            />
           

            <NuxtLink
             to="/foods"
              class="inline-flex items-center gap-3 pb-1 text-xs font-semibold uppercase tracking-widest transition hover:text-terracotta"
            >
              Consultar la carta <span>↗</span>
            </NuxtLink>
          </div>
 
        </div>
      </section>

      <ExperienceSection/>>

      <section class="bg-terracotta px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
        <div class="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div class="max-w-2xl">
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
              Tu próxima experiencia
            </p>
            <h2 class="font-display text-4xl leading-tight sm:text-5xl">
              Hay momentos que merecen una buena mesa.
            </h2>
            <p class="mt-4 max-w-xl text-sm leading-7 text-white/80">
              Una cena especial, una celebración o simplemente las ganas
              de disfrutar. Nosotros ponemos el resto.
            </p>
          </div>

          <div class="shrink-0">
            <BaseButton to="/contact" variant="light">
              Reserva tu mesa
            </BaseButton>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>