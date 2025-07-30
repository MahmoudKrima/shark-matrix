<template>
  <div class="w-full md:w-[55%] contact_form flex flex-col justify-start">
    <h2 class="contact_form_title">You Can trust us with your marketing needs</h2>
    <div class="grid grid-cols-2 gap-4 mt-4 items-start">
      <div
        v-for="(field, index) in formFields"
        :key="index"
        :class="`col-span-${field.colSpan} flex flex-col mb-2`"
      >
        <s-contact-input :placeholder="field.placeholder" :label="field.label" />
      </div>
    </div>
    <s-button label="Submit" style-class="who_btn" class="mt-[30px]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formFields = ref([
  { label: 'Your Name', placeholder: 'Enter Your Name', colSpan: 1 },
  { label: 'Your Email', placeholder: 'Enter Your Email', colSpan: 1 },
  { label: 'Company Name', placeholder: 'Company Name', colSpan: 1 },
  { label: 'Phone Number', placeholder: '', colSpan: 1 },
  { label: 'Your Message', placeholder: 'Enter Message', colSpan: 2 },
  { label: 'How can we Help?', placeholder: 'SEO', colSpan: 1 },
  { label: 'What is 2 + 1 ?', placeholder: 'Type Your Answer', colSpan: 1 },
])
</script>

<style scoped>
.contact_form {
  padding: 30px 6% 30px 3%;
}

.contact_form_title {
  margin: 0 0 50px;
  font-size: 26px;
  text-align: center;
  color: #2e91cf;
}
</style>
