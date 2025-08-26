<template>
  <div class="grid grid-cols-4 gap-7 mt-6">
    <div 
      v-for="user in mainStore.filteredUsers" 
      :key="user.login.uuid"
      class="fade-in-wrapper"
    >
      <UserCard 
        @click="mainStore.toggleViewUserDialog(user)" 
        :user="user" 
        class="card-user"
      />
    </div>
  </div>
  <EmptyState />
  <ErrorMessage />
  <LoadMoreButton />
</template>



<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/mainStore.js'
import UserCard from './UserCard.vue'
import LoadMoreButton from '../ui/LoadMoreButton.vue'
import EmptyState from '../ui/EmptyState.vue'
import ErrorMessage from '../ui/ErrorMessage.vue'
const mainStore = useMainStore()

onMounted(() => {
  mainStore.getCachData()
  if (mainStore.users.length === 0) {
    mainStore.fetchUsers()
  }
})
</script>


<style scoped>
.fade-in-wrapper {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.5s ease forwards;
  animation-fill-mode: forwards;
}

.card-user {
  width: 100%;
  overflow: hidden;
  background-color: #f5f7fb;
  border: 1px solid #e9e9e9;
  transition:
    box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
}

.card-user:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: scale(1.01);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: none;
  }
}
</style>

