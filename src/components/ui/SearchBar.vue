<template>
  <div class="card flex justify-center">
    <InputText
      type="text"
      class="w-full"
      @update:model-value="mainStore.filterUsers($event)"
      v-model="mainStore.searchFilter"
      placeholder="Buscar por nombre o país"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { useMainStore } from '@/stores/mainStore.js'
const mainStore = useMainStore()
const value = ref(null)
</script>
