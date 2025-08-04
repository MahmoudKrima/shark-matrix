<script setup>
import { ref } from 'vue'
const website = ref('')
const name = ref('')
const email = ref('')
const phone = ref('')
const props = defineProps({
  headerTitle: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['submit-form'])

const submitForm = () => {
  const formData = {
    web_site: website.value,
    name: name.value,
    email: email.value,
    phone: phone.value,
  }
  emit('submit-form', formData)
}
</script>

<template>
  <div>
    <h3 class="item" v-if="headerTitle">{{ headerTitle }}</h3>
    <div v-else>Loading...</div>

    <form @submit.prevent="submitForm">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        <s-input
          class="md:col-span-2"
          placeholder="Enter Your Website*"
          v-model="website"
          required
        />
        <s-input placeholder="Enter Your Name*" v-model="name" required />
        <s-input placeholder="Enter Your Email*" v-model="email" type="email" required />
        <s-input placeholder="Enter Your Phone*" v-model="phone" type="tel" required />
        <s-button style-class="home_btn" label="Get A Quote" type="submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.item {
  font-size: 28px !important;
  font-weight: 700;
  line-height: 40px;
  max-width: 540px;
  color: #fff;
  letter-spacing: 0.8px;
  font-family: Sora, sans-serif;
}
.card {
  box-sizing: border-box;
}

@media (max-width: 639px) {
  .item {
    text-align: center;
    font-size: 25px !important;
  }
}
</style>
