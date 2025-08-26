<template>
  <div class="user-finder-page py-8 px-5 xl:px-60 2xl:px-80">
    <header>
      <Header />
    </header>
    <DataConfiguration />
    <div class="grid grid-cols-12 gap-4">
      <div class="xl:col-span-4 col-span-12 ">
        <SearchBar />
      </div>
      <div class="xl:col-span-4 col-span-12 ">
        <SortControls />
      </div>
      <div class="xl:col-span-4 col-span-12  flex justify-end">
        <Button
          label="Generar nuevo perfil"
          @click="mainStore.toggleNewUserDialog"
          icon="pi pi-plus"
        />
      </div>
    </div>
    <UserList class="mt-5 mb-50" />
    <footer>
      <Footer />
    </footer>
  </div>
  <NewUserModal />
  <ViewUserModal />
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import SearchBar from '@/components/ui/SearchBar.vue'
import SortControls from '@/components/ui/SortControls.vue'
import DataConfiguration from '@/components/ui/DataConfiguration.vue'
import Button from 'primevue/button'
import UserList from '@/components/users/UserList.vue'
import Footer from '@/components/layout/Footer.vue'
import UserModal from '@/components/users/NewUserModal.vue'
import { useMainStore } from '@/stores/mainStore.js'
import { mount } from '@vue/test-utils'
import { onMounted } from 'vue'
import NewUserModal from '@/components/users/NewUserModal.vue'
import ViewUserModal from '@/components/users/ViewUserModal.vue'
const mainStore = useMainStore()

let isLoading = false

onMounted(() => {
  mainStore.getCachData()
  window.addEventListener('scroll', () => {
    if (!mainStore.infiniteScroll) return
    const scrollPosition = window.scrollY + window.innerHeight
    const bottomPosition = document.documentElement.scrollHeight
    if (scrollPosition >= bottomPosition - 500 && !isLoading) {
      isLoading = true
      mainStore.fetchUsers().finally(() => {
        isLoading = false
      })
    }
  })
})
</script>

<style scoped></style>
