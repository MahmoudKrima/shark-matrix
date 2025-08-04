<template>
  <label class="block w-full">
    <InputText
      v-model="value"
      :placeholder="`${placeholder} ${required ? '*' : ''}`"
      class="block w-full input-text"
      :pt="{ root: `${error && 'border-red-500'}` }"
      @blur="emits('blur')"
    />
    <Message v-if="error" severity="error" class="mt-1 text-white" variant="simple" size="small">
      {{ errorMessage }}
    </Message>
  </label>
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
.input-text {
  background: transparent !important;
  padding: 19px 12px;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: -0.015em;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  border: 1px solid #ced4da;
  height: 40px;
}
.input-text::placeholder {
  color: white;
  opacity: 1;
  font-size: 14px;
}
.input-text:hover,
.input-text:focus {
  border: 1.5px solid white;
}
</style>
