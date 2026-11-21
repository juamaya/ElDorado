<script setup lang="ts">
import BebidasAlcoholicas from '~/componentes/BebidasAlcoholicas.vue'
import BebidasList from '~/componentes/BebidasList.vue'
import VinosList from '~/componentes/VinosList.vue'
</script>

<template>
  <main class="min-h-screen text-center bg-gray-300 px-4 py-12">
    <h1 class="text-4xl font-bold text-slate-900 mb-10">
      Nuestra seleccion de bebidas
    </h1>
    <section class="grid grid-cols-1 md:grid-cols-2 group rounded-2xl border-2 border-amber-500
             bg-terracotta
                p-4 gap-2
                shadow-lg shadow-amber-900/10
                transition-all duration-300
                hover:shadow-xl hover:shadow-amber-500/20
                hover:-translate-y-1" >
      <div>
        <BebidasList />
      </div>
      <div>
        <BebidasAlcoholicas />
      </div>
      <div>
        <VinosList />
      </div>
    </section>
  </main>
</template>
