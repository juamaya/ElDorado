<script setup lang="ts">
const reviews = [
  {
    name: "Carlos M.",
    text: "Buena cerveza, ambiente genial y atención de diez.",
  },
  {
    name: "Lucía R.",
    text: "Un sitio perfecto para tomar algo con amigos. ¡Volveremos!",
  },
   {
    name: "Silvia M.",
    text: "Es un sitio “especial”, de mantel de papel y tipo “cuéntame”,",
  },
     {
    name: "Camen L.",
    text: "Buen pescado, de mucha calidad porque tiene la plaza de abastos delante. Todo muy fresco, pero muy difícil reservar",
  },
];
</script>

<template>
  <section
    id="about"
    class="bg-[#171714] px-5 py-16 text-white sm:px-8 sm:py-20"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Título -->
      <div class="mb-10 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400"
        >
          Nuestra cervecería
        </p>

        <h2 class="text-4xl font-bold sm:text-5xl">
          Buena cerveza. <span class="text-amber-400">Buena gente.</span>
        </h2>

        <p class="mx-auto mt-4 max-w-xl leading-7 text-neutral-400">
          Cervezas bien tiradas, algo rico para picar y el mejor ambiente para
          compartir buenos momentos.
        </p>
      </div>

      <!-- Fotos -->
      <div class="grid grid-cols-2 gap-3 sm:gap-5">
        <img
          src="/images/ramon.jpg "
          alt="Vasos de cerveza"
          class="h-52 w-full rounded-xl object-cover sm:h-80"
          loading="lazy"
        />

        <img
          src="/images/ramon1.jpg "
          alt="Ambiente de bar"
          class="h-52 w-full rounded-xl object-cover sm:h-80"
          loading="lazy"
        />
      </div>
      <br />
      <div class="grid grid-cols-2 gap-3 sm:gap-5">
        <img
          src="/images/ramon2.jpg"
          alt="Vasos de cerveza"
          class="h-52 w-full rounded-xl object-cover sm:h-80"
          loading="lazy"
        />

        <img
          src=" /images/ramon4.jpg"
          alt="Ambiente de bar"
          class="h-52 w-full rounded-xl object-cover sm:h-80"
          loading="lazy"
        />
      </div>

      <h3 class="my-6 text-center text-xl font-semibold">
        El Bar "El Dorado" se encuentra en la Calle Nueva, 18, 11510 Puerto
        Real, Cádiz (junto al antiguo mercado de abastos).
      </h3>
      
        Información de interés:
        <p>• Teléfono de contacto: 956 83 03 60</p>
        <p>
          • Horario general: de martes a domingo de 8:00 a 18:00 y de 20:30 a
          1:00 (lunes cerrado).
        </p>
      
      <!-- Comentarios -->
      <div class="mt-14">
        <h3 class="mb-6 text-center text-2xl font-semibold">
          Lo que dice nuestra gente
        </h3>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="review in reviews"
            :key="review.name"
            class="rounded-xl border border-white/10 bg-white/4 p-6"
          >
            <p class="mb-3 text-lg text-amber-400" aria-label="5 estrellas">
              ★★★★★
            </p>

            <p class="leading-7 text-neutral-300">“{{ review.text }}”</p>

            <p class="mt-4 text-sm font-semibold text-white">
              {{ review.name }}
            </p>
          </article>
        </div>
      </div>

      <!-- Botón -->
      <div class="mt-10 text-center">
        <NuxtLink
         to="/contact"
          class="inline-block rounded-full bg-amber-400 px-7 py-3 font-bold text-black transition hover:bg-amber-300"
        >
          Ven a conocernos →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
