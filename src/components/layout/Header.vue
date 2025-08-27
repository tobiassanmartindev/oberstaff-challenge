<template>
  <Card @contextmenu="onImageRightClick" class="mb-10 subtle-gradient-card">
    <template #title>
      <h1 class="text-center text-5xl mt-5 font-bold">
        <i class="pi pi-users" style="font-size: 2.5rem; color: #22c55e"></i>
        <span class="title-header"> Buscador de usuarios </span>
      </h1>
    </template>
    <template #content>
      <div class="grid grid-rows-2">
        <h6 class="text-center text-lg mt-2 text-gray-500">
          Descubra y administre perfiles de usuario con búsqueda y filtrado avanzados
        </h6>
        <div class="text-center text-md mt-2 mb-5 text-gray-400">
          <span class="text-green-600">
            <i style="font-size: 0.5rem" class="pi pi-circle-fill"></i>
          </span>
          <span class="mx-2"> Power by Random User API </span>
          <span class="text-green-600">
            <i style="font-size: 0.5rem" class="pi pi-circle-fill"></i>
          </span>
        </div>
      </div>
    </template>
  </Card>
  
</template>

<script setup>
import { Card } from 'primevue'
import { useMainStore } from '@/stores/mainStore.js'
import { ref } from 'vue'
const mainStore = useMainStore()
</script>

<style scoped>
.subtle-gradient-card {
  background: linear-gradient(135deg, #fff 10%, #f3f3f3 80%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0ffe0;
}
.title-header {
  background: linear-gradient(90deg, #1e8f4a 0%, #1fb556 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
