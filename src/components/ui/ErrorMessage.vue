<template>
    <div class="text-center text-red-500 mt-10 mb-60 text-xl" v-if="mainStore.errorMessage">
        <i class="pi pi-exclamation-triangle"></i> Ocurrió un error al cargar los usuarios. Por favor, inténtelo de nuevo más tarde.
    </div>
</template>
<script setup>
import { useMainStore } from '@/stores/mainStore';
const mainStore = useMainStore();
</script>