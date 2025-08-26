<template>
  <Dialog
    v-model:visible="mainStore.dialogViewUser"
    modal
    header="Detalles del Usuario"
    class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5"
  >
    <div class="flex flex-col gap-6 p-2">
      <!-- Perfil -->
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-10 xl:col-span-10">
          <div class="flex items-center gap-4 mb-2">
            <Avatar :image="mainStore.userSelected.picture.large" shape="circle" size="xlarge" />
            <div>
              <div class="text-xl font-semibold col-span-6">
                {{ mainStore.userSelected.name.first }} {{ mainStore.userSelected.name.last }}
              </div>
              <div class="text-surface-500 dark:text-surface-400">
                {{ mainStore.userSelected.gender === 'female' ? 'Femenino' : 'Masculino' }}
              </div>
              <div class="text-surface-500 dark:text-surface-400">
                {{ mainStore.userSelected.dob.age }} Años
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-2 xl:col-span-2">
          <Button
            :label="mainStore.userCopied ? 'Copiado!' : 'Copiar'"
            :icon="mainStore.userCopied ? 'pi pi-check' : 'pi pi-copy'"
            @click="mainStore.copyUser"
            :severity="mainStore.userCopied ? 'green-500' : 'secondary'"
          />
        </div>
      </div>
      <Divider />
      <div>
        <div class="flex items-center gap-2 mb-2">
          <i class="pi pi-envelope text-lg text-primary"></i>
          <span class="font-semibold text-lg">Información de Contacto</span>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-1 xl:grid-cols-2">
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-envelope text-primary"></i>
            <span>{{ mainStore.userSelected.email }}</span>
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-phone text-primary"></i>
            <span>{{ mainStore.userSelected.phone }}</span>
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-mobile text-primary"></i>
            <span>{{ mainStore.userSelected.cell }}</span>
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-user text-primary"></i>
            <span>@{{ mainStore.userSelected.login.username }}</span>
          </div>
        </div>
      </div>
      <Divider />

      <div>
        <div class="flex items-center gap-2 mb-2">
          <i class="pi pi-map-marker text-lg text-primary"></i>
          <span class="font-semibold text-lg">Detalles de Ubicación</span>
        </div>
        <div class="grid grid-cols-2">
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <i class="pi pi-home text-primary"></i>
            <span>
              {{ mainStore.userSelected.location.street.number }}
              {{ mainStore.userSelected.location.street.name }},
              {{ mainStore.userSelected.location.city }},
              {{ mainStore.userSelected.location.state }},
              {{ mainStore.userSelected.location.country }},
              {{ mainStore.userSelected.location.postcode }}
            </span>
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-compass text-primary"></i>
            <span
              >{{ mainStore.userSelected.location.coordinates.latitude }},
              {{ mainStore.userSelected.location.coordinates.longitude }}</span
            >
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-clock text-primary"></i>
            <span
              >{{ mainStore.userSelected.location.timezone.offset }} -
              {{ mainStore.userSelected.location.timezone.description }}</span
            >
          </div>
        </div>
        <div class="mt-4">
          <iframe
            :src="`https://maps.google.com/maps?q=${mainStore.userSelected.location.coordinates.latitude},${mainStore.userSelected.location.coordinates.longitude}&z=15&output=embed`"
            width="100%"
            height="200"
            style="border: 0; border-radius: 8px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Divider />

      <div class="mb-4">
        <div class="flex items-center gap-2 mb-2">
          <i class="pi pi-info-circle text-lg text-primary"></i>
          <span class="font-semibold text-lg">Otros Detalles</span>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-calendar text-primary"></i>
            <span>Nacimiento: {{ formatDate(mainStore.userSelected.dob.date) }}</span>
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-id-card text-primary"></i>
            <span
              >ID:
              {{
                mainStore.userSelected.id.value == null
                  ? 'Id no encontrado'
                  : mainStore.userSelected.id.value
              }}</span
            >
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-calendar-plus text-primary"></i>
            <span>Registrado: {{ formatDate(mainStore.userSelected.registered.date) }}</span>
          </div>
          <div class="bg-surface-50 p-3 rounded flex items-center gap-2">
            <i class="pi pi-flag text-primary"></i>
            <span>Nacionalidad: {{ mainStore.userSelected.nat }}</span>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import { useMainStore } from '@/stores/mainStore'
const mainStore = useMainStore()

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString()
}
</script>

<style scoped></style>
