<template>
    <div class="text-center text-gray-500 mt-10 mb-60 text-xl" v-if="mainStore.filteredUsers.length === 0">
        <i class="pi pi-eye-slash"></i> No se encontraron usuarios que coincidan con la búsqueda.
    </div>
</template>
<script setup>
import { useMainStore } from '@/stores/mainStore';
const mainStore = useMainStore();
</script>