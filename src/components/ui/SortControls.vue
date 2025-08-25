<template>
  <div class="card flex gap-4">
    <Select
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Nombre (A-Z)"
      class="w-full md:w-56"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>
