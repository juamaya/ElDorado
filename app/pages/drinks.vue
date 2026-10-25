<script setup lang="ts">
import BebidasAlcoholicas from '~/componentes/BebidasAlcoholicas.vue';
import BebidasList from '~/componentes/BebidasList.vue';
import VinosList from '~/componentes/VinosList.vue';

</script>

<template>
  
 <main class="min-h-screen text-center bg-gray-300 px-4 py-12">
     <h1 class="text-4xl font-bold text-slate-900 mb-4">
  Nuestra seleccion de bebidas
    </h1>
    <BebidasList />
    <br/>
     <BebidasAlcoholicas />
     <br/>
         <VinosList />
       
   
  </main>
 
</template>