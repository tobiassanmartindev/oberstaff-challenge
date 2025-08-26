<template>
  <div class="flex justify-center mt-6" v-if="!mainStore.infiniteScroll">
    <Button
      label="Cargar más"
      icon="pi pi-refresh"
      :loading="mainStore.loadingUsers"
      @click="mainStore.fetchUsers()"
    />
  </div>
</template>
<script setup>
import { useMainStore } from '@/stores/mainStore'
import Button from 'primevue/button'
import { ref } from 'vue'
const mainStore = useMainStore()
</script>
