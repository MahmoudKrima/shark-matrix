<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, url } from '@vuelidate/validators'
import { useHeadersStore } from '@/stores/headers.store'

const props = defineProps({
  headerTitle: {
    type: String,
    default: '',
  },
})

const form = ref({
  web_site: '',
  name: '',
  email: '',
  phone: '',
})

const rules = {
  web_site: { required, url },
  name: { required },
  email: { required, email },
  phone: { required },
}

const v$ = useVuelidate(rules, form)
const headersStore = useHeadersStore()
const uiFlags = computed(() => headersStore.uiFlags)
const sendQuote = async () => {
  v$.value.$touch()
  if (v$.value.$error || uiFlags.value.creating) return
  await headersStore.crateForm(form.value).then(() => {
    form.value.web_site = ''
    form.value.name = ''
    form.value.email = ''
    form.value.phone = ''
    v$.value.$reset()
  })
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
          placeholder="Enter Your Website"
          v-model="form.web_site"
          :error="v$.web_site.$error"
          :errorMessage="
            (v$.web_site.required.$invalid && 'This Filed Is Required') ||
            (v$.web_site.url.$invalid && 'This Filed Must Be Valid URL')
          "
          @blur="v$.web_site.$touch()"
          required
        />
        <s-input
          placeholder="Enter Your Name"
          v-model="form.name"
          :error="v$.name.$error"
          :errorMessage="'This Filed Is Required'"
          @blur="v$.name.$touch()"
          required
        />
        <s-input
          placeholder="Enter Your Email"
          v-model="form.email"
          type="email"
          :error="v$.email.$error"
          :errorMessage="
            (v$.email.required.$invalid && 'This Filed Is Required') ||
            (v$.email.email.$invalid && 'This Filed Must Be Valid Email')
          "
          @blur="v$.email.$touch()"
          required
        />
        <s-input
          placeholder="Enter Your Phone"
          v-model="form.phone"
          type="tel"
          :error="v$.phone.$error"
          :errorMessage="'This Filed Is Required'"
          @blur="v$.phone.$touch()"
          required
        />
        <s-button
          style-class="home_btn"
          label="Get A Quote"
          :loading="uiFlags.creating"
          :disabled="v$.$error"
          @click="sendQuote"
        />
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
