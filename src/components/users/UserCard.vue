<template>
  <Card class="card-user">
    <template #header>
      <div class="flex items-center justify-center">
        <img alt="user header" class="w-25 rounded-full mt-10" :src="user.picture.large" />
      </div>
    </template>
    <template #title>
      <h2 class="text-center text-xl font-medium mb-2">
        {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
      </h2>
    </template>
    <template #subtitle>
      <h6 class="text-center text-lg mt-2 mb-5 text-gray-600">
        <Tag severity="success" :value="user.nat"></Tag>
      </h6>
    </template>
    <template #content>
      <div class="grid grid-rows-3 gap-3">
        <div class="grid grid-cols-12">
          <div class="col-span-1">
            <i class="pi pi-map-marker"></i>
          </div>
          <div class="col-span-11 text-[13px] text-gray-500 truncate" style="max-width: 260px">
            {{ user.location.city }}, {{ user.location.state }}, {{ user.location.country }}
          </div>
        </div>
        <div class="grid grid-cols-12">
          <div class="col-span-1 flex">
            <i class="pi pi-envelope"></i>
          </div>
          <div class="col-span-11 flex text-[13px] text-gray-500">
            {{ user.email }}
          </div>
        </div>
        <div class="grid grid-cols-12">
          <div class="col-span-1 flex">
            <i class="pi pi-phone"></i>
          </div>
          <div class="col-span-11 flex text-[13px] text-gray-500">{{ user.phone }}</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="gap-4 mt-2">
        <Divider />
        <div class="grid grid-cols-12 text-sm text-gray-500">
          <div class="col-span-6">Edad</div>
          <div class="col-span-6 text-end">{{ user.dob.age }} Años</div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>
