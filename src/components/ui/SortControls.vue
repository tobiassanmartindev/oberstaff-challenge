<template>
  <div class="card flex gap-4">
    <Select
      v-model="mainStore.sortOption"
      :options="filterOptions"
      optionLabel="name"
      placeholder="Nombre (A-Z)"
      class="w-full md:w-56 sort-control"
      @change="mainStore.sortUsers($event.value)"
    />
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'
import { ref } from 'vue'
import Select from 'primevue/select'

const mainStore = useMainStore()

const filterOptions = ref([
  { name: 'Nombre (A-Z)', code: 'name-asc' },
  { name: 'Nombre (Z-A)', code: 'name-desc' },
  { name: 'País (A-Z)', code: 'country-asc' },
  { name: 'País (Z-A)', code: 'country-desc' },
])
</script>