<template>
  <Dialog
    v-model:visible="mainStore.dialogNewUser"
    modal
    header="Nuevo Usuario"
    class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
    @hide="resetForm"
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

          <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <label for="gender" class="font-semibold w-full md:w-32">Género *</label>
            <Select
              id="gender"
              v-model="form.gender"
              :options="genderOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Selecciona"
              class="w-full"
              required
            />
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="title" class="font-semibold">Título *</label>
              <Select
                id="title"
                v-model="form.name.title"
                :options="titleOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Selecciona"
                required
                class="w-full"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="first" class="font-semibold">Nombre *</label>
              <InputText id="first" v-model="form.name.first" required autocomplete="off" class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="last" class="font-semibold">Apellido *</label>
              <InputText id="last" v-model="form.name.last" required autocomplete="off" class="w-full" />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="dob" class="font-semibold">Fecha Nacimiento *</label>
              <DatePicker
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

          <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <label for="email" class="font-semibold w-full md:w-32">Email *</label>
            <InputText
              id="email"
              v-model="form.email"
              type="email"
              required
              autocomplete="off"
              class="w-full"
            />
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="phone" class="font-semibold">Teléfono *</label>
              <InputText id="phone" v-model="form.phone" required class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="cell" class="font-semibold">Celular *</label>
              <InputText id="cell" v-model="form.cell" required class="w-full" />
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

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="username" class="font-semibold">Usuario *</label>
              <InputText id="username" v-model="form.login.username" required autocomplete="off" class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="password" class="font-semibold">Contraseña *</label>
              <InputText
                id="password"
                v-model="form.login.password"
                type="password"
                required
                autocomplete="off"
                class="w-full"
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

          <div class="flex flex-col md:flex-row gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="streetNumber" class="font-semibold">Número *</label>
              <InputText id="streetNumber" v-model="form.location.street.number" required type="number" class="w-full" />
            </div>
            <div class="flex flex-col flex-2">
              <label for="streetName" class="font-semibold">Calle *</label>
              <InputText id="streetName" v-model="form.location.street.name" required class="w-full" />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="city" class="font-semibold">Ciudad *</label>
              <InputText id="city" v-model="form.location.city" required class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="state" class="font-semibold">Estado *</label>
              <InputText id="state" v-model="form.location.state" required class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="country" class="font-semibold">País *</label>
              <InputText id="country" v-model="form.location.country" required class="w-full" />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="postcode" class="font-semibold">Código Postal *</label>
              <InputText id="postcode" v-model="form.location.postcode" required class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="latitude" class="font-semibold">Latitud</label>
              <InputText id="latitude" v-model="form.location.coordinates.latitude" class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="longitude" class="font-semibold">Longitud</label>
              <InputText id="longitude" v-model="form.location.coordinates.longitude" class="w-full" />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-2">
            <div class="flex flex-col flex-1">
              <label for="offset" class="font-semibold">Zona Horaria</label>
              <InputText id="offset" v-model="form.location.timezone.offset" class="w-full" />
            </div>
            <div class="flex flex-col flex-2">
              <label for="description" class="font-semibold">Descripción</label>
              <InputText id="description" v-model="form.location.timezone.description" class="w-full" />
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

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="registered" class="font-semibold">Fecha Registro *</label>
              <DatePicker
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
                optionLabel="label"
                optionValue="value"
                filter 
                placeholder="Selecciona"
                required
                class="w-full"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="idName" class="font-semibold">ID Nombre</label>
              <InputText id="idName" v-model="form.id.name" class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="idValue" class="font-semibold">ID Valor</label>
              <InputText id="idValue" v-model="form.id.value" class="w-full" />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label for="pictureLarge" class="font-semibold">Foto Grande</label>
              <InputText id="pictureLarge" v-model="form.picture.large" class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pictureMedium" class="font-semibold">Foto Mediana</label>
              <InputText id="pictureMedium" v-model="form.picture.medium" class="w-full" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pictureThumbnail" class="font-semibold">Foto Miniatura</label>
              <InputText id="pictureThumbnail" v-model="form.picture.thumbnail" class="w-full" />
            </div>
          </div>
        </div>
      </div>

      <!-- Botones -->
      <div class="flex justify-end gap-2">
        <Button
        type="button"
          label="Cancelar"
          severity="secondary"
          @click="mainStore.dialogNewUser = false"
          />
          <Button type="submit" label="Guardar" />
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
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'
import { useToast } from "primevue/usetoast";

const mainStore = useMainStore()
const toast = useToast();

const genderOptions = [
  { label: 'Masculino', value: 'male' },
  { label: 'Femenino', value: 'female' },
  { label: 'Otro', value: 'other' },
]

const titleOptions = [
  { label: 'Sr.', value: 'Sr.' },
  { label: 'Sra.', value: 'Sra.' },
  { label: 'Srta.', value: 'Srta.' },
  { label: 'Dr.', value: 'Dr.' },
  { label: 'Dra.', value: 'Dra.' },
]

const natOptions = [
  { label: 'Argentina', value: 'AR' },
  { label: 'Australia', value: 'AU' },
  { label: 'Alemania', value: 'DE' },
  { label: 'Arabia Saudita', value: 'SA' },
  { label: 'Bangladés', value: 'BD' },
  { label: 'Brasil', value: 'BR' },
  { label: 'Canadá', value: 'CA' },
  { label: 'Chile', value: 'CL' },
  { label: 'China', value: 'CN' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Corea del Sur', value: 'KR' },
  { label: 'Egipto', value: 'EG' },
  { label: 'Emiratos Árabes Unidos', value: 'AE' },
  { label: 'España', value: 'ES' },
  { label: 'Estados Unidos', value: 'US' },
  { label: 'Etiopía', value: 'ET' },
  { label: 'Filipinas', value: 'PH' },
  { label: 'Francia', value: 'FR' },
  { label: 'India', value: 'IN' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Irak', value: 'IQ' },
  { label: 'Irán', value: 'IR' },
  { label: 'Italia', value: 'IT' },
  { label: 'Japón', value: 'JP' },
  { label: 'Kenia', value: 'KE' },
  { label: 'Malasia', value: 'MY' },
  { label: 'Marruecos', value: 'MA' },
  { label: 'México', value: 'MX' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Pakistán', value: 'PK' },
  { label: 'Países Bajos', value: 'NL' },
  { label: 'Perú', value: 'PE' },
  { label: 'Polonia', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Reino Unido', value: 'GB' },
  { label: 'República Democrática del Congo', value: 'CD' },
  { label: 'Rusia', value: 'RU' },
  { label: 'Singapur', value: 'SG' },
  { label: 'Sudáfrica', value: 'ZA' },
  { label: 'Sudán', value: 'SD' },
  { label: 'Suecia', value: 'SE' },
  { label: 'Suiza', value: 'CH' },
  { label: 'Tailandia', value: 'TH' },
  { label: 'Turquía', value: 'TR' },
  { label: 'Ucrania', value: 'UA' },
  { label: 'Venezuela', value: 'VE' },
  { label: 'Vietnam', value: 'VN' },
  { label: 'Polonia', value: 'PL' },
  { label: 'Grecia', value: 'GR' }
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
  nat: null,
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
  toast.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario creado correctamente', life: 3000 });
}

function resetForm(){
  form.value = {
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
    nat: null,
  }
}
</script>
