<template>
  <form
    @submit.prevent="sendQuote"
    class="w-full md:w-[55%] contact_form flex flex-col justify-start"
  >
    <h2 class="contact_form_title">You Can Trust Us With Your Marketing Needs</h2>

    <div class="grid grid-cols-2 gap-4 mt-4 items-start">
      <div
        v-for="field in formFields"
        :key="field.model"
        :class="{
          'flex flex-col mb-2': true,
          'col-span-1': field.colSpan === 1,
          'col-span-2': field.colSpan === 2,
        }"
      >
        <s-contact-input
          v-model="form[field.model]"
          :label="field.label"
          :placeholder="field.placeholder"
          :error="v$[field.model].$error"
          :errorMessage="
            (v$[field.model].required?.$invalid && 'This field is required') ||
            (field.model === 'email' &&
              v$[field.model].email?.$invalid &&
              'Must be a valid email') ||
            (field.model === 'answer' && v$[field.model].isThree?.$invalid && 'Answer must be 3')
          "
          @blur="v$[field.model].$touch()"
          required
        />
      </div>
    </div>

    <s-button
      type="submit"
      label="Submit"
      style-class="who_btn"
      class="mt-[30px]"
      :loading="uiFlags.creating"
      :disabled="v$.$error"
      @click="sendData"
    />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'
import { useContactStore } from '@/stores/contact.store'

const formFields = ref([
  { label: 'Your Name', placeholder: 'Enter Your Name', colSpan: 1, model: 'name' },
  { label: 'Your Email', placeholder: 'Enter Your Email', colSpan: 1, model: 'email' },
  { label: 'Company Name', placeholder: 'Company Name', colSpan: 1, model: 'company_name' },
  { label: 'Phone Number', placeholder: '', colSpan: 1, model: 'phone' },
  { label: 'Your Message', placeholder: 'Enter Message', colSpan: 2, model: 'message' },
  { label: 'How Can We Help?', placeholder: 'SEO', colSpan: 1, model: 'help' },
  { label: 'What is 8 + 7 ?', placeholder: 'Type Your Answer', colSpan: 1, model: 'answer' },
])

const form = ref({
  name: '',
  email: '',
  company_name: '',
  phone: '',
  message: '',
  help: '',
  answer: '',
})

const rules = {
  name: { required },
  email: { required, email },
  company_name: { required },
  phone: { required },
  message: { required },
  help: { required },
  answer: {
    required,
    numeric,
    isThree: (value) => value === '3' || 'Answer must be 3',
  },
}

const v$ = useVuelidate(rules, form)
const contactStore = useContactStore()
const uiFlags = computed(() => contactStore.uiFlags)

const sendData = async () => {
  v$.value.$touch()
  if (v$.value.$error || uiFlags.value.creating) return
  try {
    await contactStore.contactForm(form.value)
    Object.keys(form.value).forEach((key) => (form.value[key] = ''))
    v$.value.$reset()
  } catch (err) {
    console.error('Submit failed', err)
  }
}
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
