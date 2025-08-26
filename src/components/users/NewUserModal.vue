<template>
  <Dialog
    v-model:visible="mainStore.dialogNewUser"
    modal
    header="Nuevo Usuario"
    :style="{ width: '60rem' }"
  >
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <span class="text-surface-500 dark:text-surface-400 block mb-4">
          Agrega la información del nuevo usuario.
        </span>

        <!-- Sección: Información Personal -->
        <Divider />
        <div class="py-4">
          <div class="mb-2 flex items-center gap-2">
            <i class="pi pi-user text-primary"></i>
            <span class="font-semibold text-lg">Información Personal</span>
          </div>
          <div class="flex items-center gap-4 mb-4">
            <label for="gender" class="font-semibold w-32">Género *</label>
            <Select
              id="gender"
              v-model="form.gender"
              :options="genderOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Selecciona"
              class="flex-auto w-full"
              required
            />
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="title" class="font-semibold">Título *</label>
              <Select
                id="title"
                v-model="form.name.title"
                :options="titleOptions"
                placeholder="Selecciona"
                required
                class="w-full"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="first" class="font-semibold">Nombre *</label>
              <InputText id="first" v-model="form.name.first" required autocomplete="off" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="last" class="font-semibold">Apellido *</label>
              <InputText id="last" v-model="form.name.last" required autocomplete="off" />
            </div>
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="dob" class="font-semibold">Fecha Nacimiento *</label>
              <Calendar
                id="dob"
                v-model="form.dob.date"
                dateFormat="yy-mm-dd"
                showIcon
                required
                class="w-full"
              />
            </div>
          </div>
        </div>

        <!-- Sección: Información de Contacto -->
        <Divider />
        <div class="py-4">
          <div class="mb-2 flex items-center gap-2">
            <i class="pi pi-envelope text-primary"></i>
            <span class="font-semibold text-lg">Información de Contacto</span>
          </div>
          <div class="flex items-center gap-4 mb-4">
            <label for="email" class="font-semibold w-32">Email *</label>
            <InputText class="w-full" id="email" v-model="form.email" type="email" required autocomplete="off" />
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="phone" class="font-semibold">Teléfono *</label>
              <InputText id="phone" v-model="form.phone" required />
            </div>
            <div class="flex flex-col flex-1">
              <label for="cell" class="font-semibold">Celular *</label>
              <InputText id="cell" v-model="form.cell" required />
            </div>
          </div>
        </div>

        <!-- Sección: Usuario y Contraseña -->
        <Divider />
        <div class="py-4">
          <div class="mb-2 flex items-center gap-2">
            <i class="pi pi-id-card text-primary"></i>
            <span class="font-semibold text-lg">Usuario y Contraseña</span>
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="username" class="font-semibold">Usuario *</label>
              <InputText id="username" v-model="form.login.username" required autocomplete="off" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="password" class="font-semibold">Contraseña *</label>
              <InputText
                id="password"
                v-model="form.login.password"
                type="password"
                required
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        <!-- Sección: Dirección -->
        <Divider />
        <div class="py-4">
          <div class="mb-2 flex items-center gap-2">
            <i class="pi pi-map-marker text-primary"></i>
            <span class="font-semibold text-lg">Dirección</span>
          </div>
          <div class="flex gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="streetNumber" class="font-semibold">Número *</label>
              <InputText
                id="streetNumber"
                v-model="form.location.street.number"
                required
                type="number"
              />
            </div>
            <div class="flex flex-col flex-2">
              <label for="streetName" class="font-semibold">Calle *</label>
              <InputText id="streetName" v-model="form.location.street.name" required />
            </div>
          </div>
          <div class="flex gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="city" class="font-semibold">Ciudad *</label>
              <InputText id="city" v-model="form.location.city" required />
            </div>
            <div class="flex flex-col flex-1">
              <label for="state" class="font-semibold">Estado *</label>
              <InputText id="state" v-model="form.location.state" required />
            </div>
            <div class="flex flex-col flex-1">
              <label for="country" class="font-semibold">País *</label>
              <InputText id="country" v-model="form.location.country" required />
            </div>
          </div>
          <div class="flex gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="postcode" class="font-semibold">Código Postal *</label>
              <InputText id="postcode" v-model="form.location.postcode" required />
            </div>
            <div class="flex flex-col flex-1">
              <label for="latitude" class="font-semibold">Latitud</label>
              <InputText id="latitude" v-model="form.location.coordinates.latitude" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="longitude" class="font-semibold">Longitud</label>
              <InputText id="longitude" v-model="form.location.coordinates.longitude" />
            </div>
          </div>
          <div class="flex gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="offset" class="font-semibold">Zona Horaria</label>
              <InputText id="offset" v-model="form.location.timezone.offset" />
            </div>
            <div class="flex flex-col flex-2">
              <label for="description" class="font-semibold">Descripción</label>
              <InputText id="description" v-model="form.location.timezone.description" />
            </div>
          </div>
        </div>

        <!-- Sección: Otros Detalles -->
        <Divider />
        <div class="py-5">
          <div class="mb-2 flex items-center gap-2">
            <i class="pi pi-info-circle text-primary"></i>
            <span class="font-semibold text-lg">Otros Detalles</span>
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="registered" class="font-semibold">Fecha Registro *</label>
              <Calendar
                id="registered"
                v-model="form.registered.date"
                dateFormat="yy-mm-dd"
                showIcon
                required
                class="w-full"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="nat" class="font-semibold">Nacionalidad *</label>
              <Select
                id="nat"
                v-model="form.nat"
                :options="natOptions"
                placeholder="Selecciona"
                required
                class="w-full"
              />
            </div>
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="idName" class="font-semibold">ID Nombre</label>
              <InputText id="idName" v-model="form.id.name" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="idValue" class="font-semibold">ID Valor</label>
              <InputText id="idValue" v-model="form.id.value" />
            </div>
          </div>
          <div class="flex gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="pictureLarge" class="font-semibold">Foto Grande</label>
              <InputText id="pictureLarge" v-model="form.picture.large" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pictureMedium" class="font-semibold">Foto Mediana</label>
              <InputText id="pictureMedium" v-model="form.picture.medium" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pictureThumbnail" class="font-semibold">Foto Miniatura</label>
              <InputText id="pictureThumbnail" v-model="form.picture.thumbnail" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="secondary"
          @click="mainStore.dialogNewUser = false"
        ></Button>
        <Button type="submit" label="Guardar"></Button>
      </div>
    </form>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Select from 'primevue/select'
import Calendar from 'primevue/calendar'
import { ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'
const mainStore = useMainStore()

const genderOptions = [
  { label: 'Masculino', value: 'male' },
  { label: 'Femenino', value: 'female' },
  { label: 'Otro', value: 'other' }
]

const titleOptions = [
  { label: 'Sr.', value: 'Sr.' },
  { label: 'Sra.', value: 'Sra.' },
  { label: 'Srta.', value: 'Srta.' },
  { label: 'Dr.', value: 'Dr.' },
  { label: 'Dra.', value: 'Dra.' }
]

const natOptions = [
  { label: 'Argentina', value: 'AR' },
  { label: 'México', value: 'MX' },
  { label: 'España', value: 'ES' },
  { label: 'Chile', value: 'CL' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Estados Unidos', value: 'US' }
]

const form = ref({
  gender: '',
  name: { title: '', first: '', last: '' },
  email: '',
  login: { username: '', password: '' },
  location: {
    street: { number: '', name: '' },
    city: '',
    state: '',
    country: '',
    postcode: '',
    coordinates: { latitude: '', longitude: '' },
    timezone: { offset: '', description: '' },
  },
  dob: { date: '', age: null },
  registered: { date: '' },
  phone: '',
  cell: '',
  id: { name: '', value: '' },
  picture: { large: '', medium: '', thumbnail: '' },
  nat: '',
})

function calculateAge(dateString) {
  if (!dateString) return null
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

function handleSubmit() {
  if (
    !form.value.gender ||
    !form.value.name.title ||
    !form.value.name.first ||
    !form.value.name.last ||
    !form.value.email ||
    !form.value.login.username ||
    !form.value.login.password ||
    !form.value.location.street.number ||
    !form.value.location.street.name ||
    !form.value.location.city ||
    !form.value.location.state ||
    !form.value.location.country ||
    !form.value.location.postcode ||
    !form.value.dob.date ||
    !form.value.registered.date ||
    !form.value.phone ||
    !form.value.cell ||
    !form.value.nat ||
    !form.value.picture.large
  ) {
    alert('Por favor, completa todos los campos requeridos.')
    return
  }
  form.value.dob.age = calculateAge(form.value.dob.date)
  mainStore.createUser({ ...form.value })
  mainStore.dialogNewUser = false
}
</script>
