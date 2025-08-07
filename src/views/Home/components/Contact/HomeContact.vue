<template>
  <div class="flex flex-col md:flex-row mt-[30px]">
    <HomeContactMap :data="contactStore.contactData" />
    <HomeContactForm />
  </div>
</template>

<script setup>
import { useContactStore } from '@/stores/contact.store'
import { onMounted } from 'vue'
import HomeContactMap from './HomeContactMap.vue'
import HomeContactForm from './HomeContactForm.vue'

const contactStore = useContactStore()
onMounted(() => {
  contactStore.getContactList()
})
</script>

<style scoped></style>
