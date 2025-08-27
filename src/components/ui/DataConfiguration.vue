<template>
  <Card class="card mb-5">
    <template #content>
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-6 xl:col-span-6 flex items-center text-gray-600">
          <div class="flex gap-2">
            <span>Cargar Manualmente</span>
            <ToggleSwitch v-model="mainStore.infiniteScroll" />
            <span>Scroll Infinito</span>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-6 items-center flex justify-end text-gray-600">
          <span>{{ mainStore.cachedUsers }} Usuarios guardados</span>
          <div class="flex justify-center ml-3">
            <Button
              type="button"
              icon="pi pi-cog"
              label="Datos"
              @click="toggle"
              aria-haspopup="true"
              aria-controls="overlay_menu"
              severity="success"
            />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
              <template #item="{ item, props }">
                <a class="flex items-center" v-bind="props.action">
                  <span :class="item.class">
                    <i :class="item.icon"></i>
                  </span>
                  <span :class="item.class">{{ item.label }}</span>
                </a>
              </template>
            </Menu>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { useMainStore } from '@/stores/mainStore.js'
const mainStore = useMainStore()

const menu = ref()
const items = ref([
  {
    label: 'Opciones',
    items: [
      {
        label: 'Exportar JSON',
        icon: 'pi pi-file',
        class: 'text-black',
        command: () => {
          mainStore.exportUsers()
        },
      },
      {
        label: 'Borrar todo',
        icon: 'pi pi-trash',
        class: 'text-red-600',
        command: () => {
          mainStore.clearUsers()
        },
      },
    ],
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>

<style scoped>
.card {
  background-color: #f5f7fb;
  box-shadow: none;
  border: 1px solid #e4e4e4;
}
.span-text {
  color: #334155;
}
</style>
