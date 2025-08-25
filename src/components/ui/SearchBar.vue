<template>
  <div class="card flex justify-center">
    <InputText type="text" class="w-full" v-model="value" placeholder="Buscar por nombre o país" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
const value = ref(null)
</script>
