<template>
  <div class="user-finder-page w-[1500px] mx-auto p-8">
    <header>
      <Header />
    </header>
    <DataConfiguration />
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-4">
        <SearchBar />
      </div>
      <div class="col-span-4">
        <SortControls />
      </div>
      <div class="col-span-4 flex justify-end">
        <Button label="Generar nuevo perfil" icon="pi pi-plus" />
      </div>
    </div>
    <UserList class="mt-5 mb-50" />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import SearchBar from '@/components/ui/SearchBar.vue'
import SortControls from '@/components/ui/SortControls.vue'
import DataConfiguration from '@/components/ui/DataConfiguration.vue'
import Button from 'primevue/button'
import UserList from '@/components/users/UserList.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style scoped>
</style>
