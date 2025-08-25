<template>
  <div class="grid grid-cols-4 gap-7">
    <Card class="card-user">
      <template #header>
        <div class="flex items-center justify-center">
          <img alt="user header" class="w-32" src="https://api.dicebear.com/9.x/big-ears/svg" />
        </div>
      </template>
      <template #title>
        <h2 class="text-center text-xl font-medium mb-2">Ms Magdalena Guerrero</h2>
      </template>
      <template #subtitle>
        <h6 class="text-center text-lg mt-2 mb-5 text-gray-600">
          <Tag severity="success" value="País"></Tag>
        </h6>
      </template>
      <template #content>
        <div class="grid grid-rows-3 gap-3">
          <div class="grid grid-cols-12">
            <div class="col-span-1">
              <i class="pi pi-map-marker"></i>
            </div>
            <div class="col-span-11 text-[13px] text-gray-500">
              Palo Alto de Abajo, Chiapas 18432, Mexico
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-1 flex">
              <i class="pi pi-envelope"></i>
            </div>
            <div class="col-span-11 flex text-[13px] text-gray-500">
              magdalena.guerrero@example.com
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-1 flex">
              <i class="pi pi-phone"></i>
            </div>
            <div class="col-span-11 flex text-[13px] text-gray-500">(659) 528 0970</div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="gap-4 mt-2">
          <Divider />
          <div class="grid grid-cols-12 text-sm text-gray-500">
            <div class="col-span-6">Edad</div>
            <div class="col-span-6 text-end">34 Años</div>
          </div>
        </div>
      </template>
    </Card>    
  </div>
</template>
<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>

<style scoped>
.card-user {
  width: 100%;
  overflow: hidden;
  background-color: #f5f7fb;
  border: 1px solid #e9e9e9;
}
.card-user {
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
}
.card-user:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform: scale(1.03);
}
</style>
