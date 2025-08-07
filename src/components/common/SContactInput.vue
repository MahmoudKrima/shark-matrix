<template>
  <label for="name2">{{ label }}</label>
  <InputText
    :placeholder="`${placeholder}`"
    class="contact_input block w-full input-text"
    id="name2"
    type="text"
    v-model="value"
    :pt="{ root: `${error && 'border-red-500'}` }"
    @blur="emits('blur')"
  />
  <Message v-if="error" severity="error" class="mt-1 text-black" variant="simple" size="small">
    {{ errorMessage }}
  </Message>
</template>

<script setup>
import { computed } from 'vue'
const emits = defineEmits(['update:modelValue', 'blur'])
const props = defineProps({
  modelValue: {
    type: [null, String],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const value = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
})
</script>
<style scoped>
.contact_input {
  padding: 10px 0px;
  background: #fff;
  border-width: 0;
  box-shadow: none;
  border-bottom: 1px solid #dbdbdb;
  font-size: 15px;
  letter-spacing: -0.015em;
  margin: 0;
  color: black;
}

.contact_input::placeholder {
  color: #757575;
  font-size: 16px;
}
</style>
