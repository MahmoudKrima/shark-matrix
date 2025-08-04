<template>
  <div class="flex-center max-w-[800px] w-full mt-5">
    <form class="flex flex-col items-center w-full max-w-[800px] gap-2" @submit.prevent="sendNews">
      <div class="input-wrapper">
        <div class="input-block">
          <InputText
            v-model="form.email"
            type="text"
            placeholder="Enter your Mail address over here"
            class="news_input"
            @blur="v$.email.$touch()"
            required
          />
        </div>
        <div class="button-block">
          <Button
            type="submit"
            label="Enter"
            class="news_btn w-full"
            :loading="uiFlags.creating"
            :disabled="v$.$error"
          />
        </div>
      </div>

      <Message
        v-if="v$.email.$error"
        severity="error"
        class="mt-1 text-white"
        variant="simple"
        size="small"
      >
        {{
          (v$.email.required.$invalid && 'This Field Is Required') ||
          (v$.email.email.$invalid && 'This Field Must Be a Valid Email')
        }}
      </Message>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useNewsStore } from '@/stores/news.store'
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})
const form = ref({
  email: '',
})

const rules = {
  email: { required, email },
}
const v$ = useVuelidate(rules, form)
const newsStore = useNewsStore()
const uiFlags = computed(() => newsStore.uiFlags)

const sendNews = async () => {
  v$.value.$touch()
  if (v$.value.$error || uiFlags.creating) return
  await newsStore.newsForm(form.value).then(() => {
    form.value.email = ''
    v$.value.$reset()
  })
}
</script>

<style scoped>
form {
  justify-content: center;
}

.news_input {
  background: #fff;
  color: black;
  border-radius: 4px 0 0 4px;
  border: 1.5px solid #ced4da;
  box-shadow: none;
  font-size: 18px;
  letter-spacing: -0.015em;
  padding: 12px 20px;
  width: 100%;
  height: 48px;
  transition: border 0.2s ease;
}

.news_input:focus {
  border-color: #000;
  outline: none;
}

.news_btn {
  background: #2e91cf;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 0 4px 4px 0;
  border: 1.5px solid #2e91cf;
  border-left: none;
  height: 48px;
  padding: 0 24px;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.news_btn:hover {
  background: #1c74aa;
}

@media (min-width: 640px) {
  .input-wrapper {
    display: flex;
    width: 100%;
  }

  .input-wrapper > .input-block {
    width: 70%;
  }

  .input-wrapper > .button-block {
    width: 15%;
  }
}

@media (max-width: 639px) {
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .news_input {
    font-size: 16px;
    padding: 11px 18px;
    border-radius: 4px;
  }

  .news_btn {
    width: 100%;
    border-radius: 4px;
    padding: 13px 18px;
    font-size: 15px;
    border-left: 1.5px solid #2e91cf;
  }
}
</style>
